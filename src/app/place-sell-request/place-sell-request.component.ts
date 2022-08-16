import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-sell-request',
  templateUrl: './place-sell-request.component.html',
  styleUrls: ['./place-sell-request.component.css']
})
export class PlaceSellRequestComponent implements OnInit {

  cropType=''
  name=''
  fertilizer=''
  quantity=''
  soilpH=''
  price=''
  error:boolean=false;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  cellRegister()
  {
let cell =
{
"cropType":this.cropType,
"cropName":this.name,
"fertilizerType":this.fertilizer,
"quantity":this.quantity,
"price":this.price,
"pH":this.soilpH

    }
    if(this.cropType!='' && this.fertilizer!='' && this.name!='' && this.quantity!='' && this.price!=''  && this.soilpH!='')
{
    this.register(cell)
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

  register(cell:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/eFam/crop/register`,cell)
  }
}
