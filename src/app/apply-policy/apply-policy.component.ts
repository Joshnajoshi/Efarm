import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apply-policy',
  templateUrl: './apply-policy.component.html',
  styleUrls: ['./apply-policy.component.css']
})
export class ApplyPolicyComponent implements OnInit {

  season=''
  year=''
  crop=''
  sumInsured=''
  area=''
  error:boolean=false;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  user4Register()
  {
let user4 =
{
  "season":this.season,
  "year":this.year,
  "crop":this.crop,
  "sumInsured":this.sumInsured,
  "area":this.area,
    }
    if(this.season!='' && this.year!=''&& this.crop!='' && this.sumInsured!='' && this.area!='')
{
    this.register(user4)
    .subscribe(response =>{
      this.error=false;
      this.router.navigate(['/details'])
      alert("Success");
    })
   }
   else{
    this.error=true;
   }
  }
  register(user4:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/eFam/insurance/policy`,user4)
  }

 
}
