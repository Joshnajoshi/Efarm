import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {

  policyNo=''
  company=''
  name=''
  sumInsured=''
  cause=''
  date=''
  error:boolean=false;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  user3Register()
  {
let user3 =
{
  "policyNo":this.policyNo,
  "company":this.company,
  "name":this.name,
  "sumInsured":this.sumInsured,
  "cause":this.cause,
  "date":this.date
    }
    if(this.policyNo!='' && this.company!='' && this.name!='' && this.sumInsured!='' && this.cause!=''  && this.date!='')
{
    this.register(user3)
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
  register(user3:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/eFam/insurance/claim`,user3)
  }
}
