import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  loginForm=this.formBuilder.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  
  })
constructor(private formBuilder:FormBuilder,private router:Router,private dataservice:DataService) { }

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
      var acno=this.loginForm.value.acno
      var pswd=this.loginForm.value.pswd
     if(this.loginForm.valid)
     {
      const result=this.dataservice.login(acno,pswd)
     if(result){
      alert("log in successfull")
      this.router.navigateByUrl('dashboard')
     }
     }
     else{
      alert('invalid form')
     }
     
    }
  }


