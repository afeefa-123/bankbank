import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  header="welcome to our bank........."
  accPlaceholder="Account please"
  acno=""
  pswd=""


  //database
  database:any={
    1000:{acno:1000,username:'neer',password:1000,balance:5000},
    1001:{acno:1001,username:'laish',password:1001,balance:6000},
    1002:{acno:1002,username:'vyom',password:1002,balance:5000}
  }

  constructor() { }

  ngOnInit(): void {

    }
    //user defained function
    acnoChange(event:any){

     this.acno= event.target.value
    }
      pswdChange(event:any){
       this.pswd=event.target.value
      }

    
    login(){
     var acno=this.acno
     var pswd=this.pswd
     let userDetails =this.database
     if(acno in userDetails){
      if(pswd == userDetails[acno]['password']){
        alert('log in successfull')
      }
      else{
        alert('incorrect password')
      }
     }
     else{
      alert('user does not exist')
     }
    }
  }


