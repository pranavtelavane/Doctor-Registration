import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

userlist:any
displayedColumns: string[] = ['position', 'name', 'Email', 'Mobile','Date','onp','inp','degree'];
  deg: any;
  show: boolean = true;
  list: any[]=[];
  constructor(private service : AuthService){
this.LoadUser('i');
  }
  LoadUser(i:any){
    debugger
    if(i =='s'){
      this.show = false;
    }
    this.service.GetAll().subscribe(res => {
      debugger
      this.userlist = res;
     
      if(this.show == true){
        for(var i=0; i<5;i++){
          this.list.push(this.userlist[i])
        }  
        
        this.userlist = [];
        this.userlist = this.list
      }
      else{
        this.userlist = res;
      }
      
      // for(let i=0;i<=this.userlist.length;i++){
      //   this.deg = this.userlist[i].degreeform;
      // }
     
      
    });
  }
}