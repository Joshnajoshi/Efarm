import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../app/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  farmerLogin:boolean=false;
  

  title = 'efarm';
  constructor(  public router:Router,public loginserice:LoginService){ }
  ngOnInit(): void {
   // this.isUserLoggedIn();

    
  }

//   isUserLoggedIn(){
    
//     if(sessionStorage.getItem("uname")=='farmer')
//     {
//  this.farmerLogin=true;
//     }
//   }
//   logout()
//   {
//     sessionStorage.clear();
//     this.router.navigate(['/home']);
//   }
}
