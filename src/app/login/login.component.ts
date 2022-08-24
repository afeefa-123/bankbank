import { Component, OnInit } from '@angular/core';
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
constructor(private router:Router,private dataservice:DataService) { }

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
     const result=this.dataservice.login(acno,pswd)
     if(result){
      alert("log in successfull")
      this.router.navigateByUrl('dashboard')
     }
     
    }
  }


