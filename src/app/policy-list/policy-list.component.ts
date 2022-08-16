import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Policy } from './policy';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policys:Observable<Policy[]> | any;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit():  void {
    this.reloadPolicy();
  }

  reloadPolicy(){
    this.policys=this.getPolicyList();
  }

  getPolicyList():Observable<any>
  {
    return this.http.get(`http://localhost:9095/eFam/insurance/policy`)
  }

}
