import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-bidder',
  templateUrl: './register-bidder.component.html',
  styleUrls: ['./register-bidder.component.css']
})
export class RegisterBidderComponent implements OnInit {

  name=''
  phone=''
  email=''
  address1=''
  address2=''
  city=''
  state=''
  pincode=''
  aadhar=''
  pan=''
  password=''
  error:boolean=false;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    
  }
  user2Register()
  {
let user =
{
"fullName":this.name,
"contactNo":this.phone,
"email":this.email,
"address1":this.address1,
"address2":this.address2,
"city":this.city,
"state":this.state,
"pincode":this.pincode,
"aadharNo":this.aadhar,
"panNo":this.pan,
"password":this.password

    }
    if(this.phone!='' && this.email!='' && this.name!='' && this.address1!='' && this.city!=''  && this.state!=''  && this.pincode!=''  && this.aadhar!=''  && this.pan!='' && this.password!='')
{
    this.register(user)
    .subscribe(response =>{
      this.error=false;
      this.router.navigate(['/login'])
      alert("The form was submitted");
    })
   }
   else{
    this.error=true;
  }
  }

  register(user2:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/eFam/bidder/register`,user2)
  }
}

