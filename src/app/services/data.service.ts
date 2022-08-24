import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database:any={
    1000:{acno:1000,username:'neer',password:1000,balance:5000},
    1001:{acno:1001,username:'laish',password:1001,balance:6000},
    1002:{acno:1002,username:'vyom',password:1002,balance:5000}
  }

  constructor() { 
    this.getDetails()
  }
  saveDetails(){
    localStorage.setItem('database',JSON.stringify(this.database))
  }
//get details
getDetails(){
 this.database=JSON.parse(localStorage.getItem('database')||'')
} 
//register
register(username:any,acno:any,password:any){
  let userDetails= this.database
  if(acno in userDetails){
    return false
  }
  else{
    userDetails[acno]={
      acno,
      username,
      password,
      balance:0
    }
    this.saveDetails()
    return true
  }

}
login(acno:any,pswd:any){
  
  let userDetails =this.database
  if(acno in userDetails){
   if(pswd == userDetails[acno]['password']){
    return true
   }
    
   
   else{
     alert('incorrect password')
     return false
   }
  }
  else{
   alert('user does not exist')
   return false
  }
 }
}



