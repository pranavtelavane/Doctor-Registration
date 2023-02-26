import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { REGEX } from 'src/REGEX';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  regex = REGEX

  constructor(private http:HttpClient) { }

  apiurl= 'http://localhost:3000/users';

  GetAll(){
    return this.http.get(this.apiurl);
  }

  GetbyCode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  ProceedRegister(data:any){
    return this.http.post(this.apiurl,data);
  }

  Updateuser(code:any,data:any){
    return this.http.put(this.apiurl+ '/'+code,data)
  }
  // getFormFieldErrorMessage(formGroup: FormGroup, formControlName: string): string {
  //   let errorMsg = ''
  //   if (formControlName === undefined || formGroup.controls[formControlName] === undefined || formGroup.controls[formControlName] === null) {
  //     return ''
  //   }
  //   if (formGroup.controls[formControlName].hasError('required')) {
  //     errorMsg = "This Field is required"
  //   }
  //   if (formGroup.controls[formControlName].hasError('pattern')) {
  //     const pattern = (formGroup.controls[formControlName].errors['pattern'].requiredPattern);
  //     const regexObject = this.regex.ALL_REGEXP.find(regExp => (String(regExp.REG_EXP) === String(pattern)))
  //     errorMsg = `Invalid - ${regexObject?.ERROR_MSG}`
  //   }
  //   if (formGroup.controls[formControlName].hasError('email')) {
  //     errorMsg = "Email is Invalid"
  //   }
  //   if (formGroup.controls[formControlName].hasError('maxlength')) {
  //     const requiredLength = (formGroup.controls[formControlName].errors['maxlength'].requiredLength);
  //     errorMsg = `Max length (${requiredLength}) exceeded.`
  //   }
  //   if (formGroup.controls[formControlName].hasError('minlength')) {
  //     const requiredLength = (formGroup.controls[formControlName].errors['minlength'].requiredLength);
  //     errorMsg = `Minimum length is (${requiredLength}).`
  //   }
  //   if (formGroup.controls[formControlName].hasError('max')) {
  //     const requiredLength = (formGroup.controls[formControlName].errors['max'].max);
  //     errorMsg = `Max (${requiredLength}) value exceeded.`
  //   }
  //   if (formGroup.controls[formControlName].hasError('min')) {
  //     const requiredLength = (formGroup.controls[formControlName].errors['min'].min);
  //     errorMsg = `Minimum value is (${requiredLength}).`
  //   }
  //   return errorMsg
  // }
}
