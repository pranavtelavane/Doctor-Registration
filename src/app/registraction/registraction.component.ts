import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registraction',
  templateUrl: './registraction.component.html',
  styleUrls: ['./registraction.component.css'],
})
export class RegistractionComponent{
  // Tdate: Date;
  Todate: string | null;
  gradate: string;
  todayDate = new Date();
  
  // degreeform: FormArray<any>;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private s: AuthService,
    private route: Router
  ) {}

 

 registractionform = this.fb.group({
    MobNo: this.fb.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ])
    ),
    EID: this.fb.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    Fname: this.fb.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[A-Za-z ]*$'),
      ])
    ),
    password: this.fb.control('',Validators.compose([Validators.required, Validators.pattern('^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])) ,
    ConPass: this.fb.control('',Validators.required),
    DOB: this.fb.control('',Validators.required),
    ExpYear:this.fb.control(''),
    OnConFee: this.fb.control('',Validators.compose([Validators.required,Validators.pattern('^[0-9]*$')])),
    InConFee: this.fb.control('',Validators.compose([Validators.required,Validators.pattern('^[0-9]*$')])),
    degreeform: this.fb.array([]),
    isactive: this.fb.control(false),
  });

  proceed() {
    if (this.registractionform.valid) {
      if(this.registractionform.controls.degreeform.length < 1){
        this.toastr.warning('Please add atleast 1 degree');
        return;
      }
      if(this.registractionform.controls['password'].value == this.registractionform.controls['ConPass'].value){
        this.s.ProceedRegister(this.registractionform.value).subscribe((res) => {
          this.toastr.success('Registered Successfully');
          this.route.navigateByUrl('/landing')
        });
      }
     else{
      this.toastr.warning('Password and Confirm Password should be same');
     }
    } else {
      this.toastr.warning('Please Enter Valid Data');
    }
  }
  // AddDegree(){
  //   this.degreeform = this.registractionform.get("degree") as FormArray;
  //   this.degreeform.push(this.generaterow());
  // }
  // generaterow(){
  //   return this.fb.group({

  //   })
  // }
  get degreeform(): FormArray {
    return this.registractionform.get("degreeform") as FormArray
  }
  newskill(): FormGroup {
    return this.fb.group({
      degree: ['',Validators.compose([Validators.required,Validators.pattern('^[A-Za-z.]*$')])]
    })
  }

  addskills() {
    this.degreeform.push(this.newskill());
  }

  removeskill(i: number) {
    this.degreeform.removeAt(i);
  }
  expyear(event:any){
    debugger
    const seledate = event.target.value
    // todayDate = new Date();
            let sentOnDate = new Date(seledate);
            sentOnDate.setDate(sentOnDate.getDate());
            let differenceInTime = this.todayDate.getTime() - sentOnDate.getTime();
            let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
            let fixed = Math.round(differenceInDays/365.25);
            this.gradate = fixed.toString();
            this.registractionform.controls['ExpYear'].setValue(this.gradate);
  }
}
