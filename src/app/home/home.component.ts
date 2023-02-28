import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userlist: any
  // displayedColumns: string[] = ['position', 'name', 'Email', 'Mobile','Date','Exp','onp','inp','degree'];
  deg: any[] = [];
  show: boolean = true;
  list: any[] = [];
  degreedata: any[] = [];
  todayDate = new Date();
  exp: any[] = [];
  constructor(private service: AuthService) {
    this.LoadUser('i');
  }
  LoadUser(i: any) {
    debugger
    if (i == 's') {
      this.show = false;
    }
    else {
      this.show = true
    }
    this.service.GetAll().subscribe(res => {
      debugger
      this.userlist = res;
      //  this.degreedata =this.userlist[0].degreeform


      for (i = 0; i < this.userlist.length; i++) {
        var tod = this.userlist[i].DOB
        const seledate = tod
        let sentOnDate = new Date(seledate);
        sentOnDate.setDate(sentOnDate.getDate());
        let differenceInTime = this.todayDate.getTime() - sentOnDate.getTime();
        let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        let fixed = Math.round(differenceInDays / 365.25);
        this.exp.push(fixed)
      }

      console.log(this.deg)
      // for (let i = 0; i < this.userlist.length; i++) {
      //   debugger
      //   var degre=this.userlist[i].degreeform;
      //   for (var j = 0; j < degre.length; j++) {
      //     this.deg.push(degre[j].degree)
      //   }
      //   this.degreedata.push(this.deg);
      // }
      console.log(this.deg)
      if(this.show == true){
        this.list = [];
        for(var i=0; i<5;i++){
          this.list.push(this.userlist[i])
        }  
        this.userlist = [];
        this.userlist = this.list
      }
      else{
        this.userlist = res;
      }

    });
  }

  degree(data: any) {
    var degrees = ''
    data.forEach((element: { degree: string; }) => {
      // degrees = degrees+','+element.degree;
      if(degrees == ''){
        degrees = element.degree;
      }else{
        degrees = degrees+','+element.degree;
      }
    });
    return degrees;
  }
}
