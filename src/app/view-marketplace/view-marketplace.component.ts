import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Crop } from './crop';

@Component({
  selector: 'app-view-marketplace',
  templateUrl: './view-marketplace.component.html',
  styleUrls: ['./view-marketplace.component.css']
})
export class ViewMarketplaceComponent implements OnInit {

  crops:Observable<Crop[]> | any;
  bid=''

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit():  void {
    this.reloadCrop();
  }

  reloadCrop(){
    this.crops=this.getCropsList();
  }

  getCropsList():Observable<any>
  {
    return this.http.get(`http://localhost:9095/eFam/crop/crops`)
  }

  changeBid()
{
  this.updatebid(this.bid)
    .subscribe(response =>{
      alert("bid updated");
    })
}

updatebid(bid:string):Observable<any>
  {
    console.log(bid)
    return this.http.post(`http://localhost:9095/eFam/crop/updatebid/${bid}`, { responseType: 'text' })
  }
}

