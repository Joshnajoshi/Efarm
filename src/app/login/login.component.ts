import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname=''
psw=''
type=''
isError:boolean=false;

constructor(private http:HttpClient,private router:Router,) { }

  ngOnInit(): void {
   
  }
login()
{
  let user={
    "email":this.uname,
    "password":this.psw
  }
  if(this.type=='farmer')
  {
  this.register(user)
    .subscribe(response =>{
      if(response){
        this. isError=false;
      this.router.navigate(['/details'])
      sessionStorage.setItem('uname', 'farmer');
      }
      else{
        this. isError=true;
      }
    })
  }
  else
  {
    console.log(user)
    this.registerBidder(user)
    .subscribe(response =>{
      if(response){
        this. isError=false;
      this.router.navigate(['/bidderHome'])
      sessionStorage.setItem('uname', 'bidder');
      }
      else{
       this. isError=true;
      }
    })
  }
}

register(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/eFam/farmer/farmerLogin`,user)
  }

  registerBidder(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/eFam/bidder/bidderLogin`,user)
  }


}
