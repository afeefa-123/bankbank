import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
//form group
registerForm=this.formBuilder.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})
  constructor(private formBuilder:FormBuilder,private dataServices:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register()
  {
    var acno=this.registerForm.value.acno
    var uname=this.registerForm.value.uname
    var pswd=this.registerForm.value.pswd

    if(this.registerForm.valid){
    const result=this.dataServices.register(uname,acno,pswd)
    if(result){
      alert('register successfully')
      this.router.navigateByUrl('')
    }
    else{
      alert('user already exist!!!!! please log in')
    }
  }

   else{
    alert('invalid form')
   }
  }

}
