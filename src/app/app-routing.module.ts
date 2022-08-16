import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterBidderComponent } from './register-bidder/register-bidder.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { FarmerWelcomeComponent } from './farmer-welcome/farmer-welcome.component';
import { PlaceSellRequestComponent } from './place-sell-request/place-sell-request.component';
import { ViewMarketplaceComponent } from './view-marketplace/view-marketplace.component';
import { ViewSoldHistoryComponent } from './view-sold-history/view-sold-history.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { RegisterComponent } from './register/register.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { ApplyPolicyComponent } from './apply-policy/apply-policy.component';
import { LogoutComponent } from './logout/logout.component';
import { BidderWelcomeComponent } from './bidder-welcome/bidder-welcome.component';
import { CropsComponent } from './crops/crops.component';
import { PolicyListComponent } from './policy-list/policy-list.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'registerf',component:RegisterFarmerComponent},
  {path:'registerb',component:RegisterBidderComponent},
  {path:'login',component:LoginComponent},
  {path:'details',component:FarmerWelcomeComponent},
  {path:'cell-request',component:PlaceSellRequestComponent},
  {path:'marketplace', component:ViewMarketplaceComponent},
  {path:'histroy', component:ViewSoldHistoryComponent},
  {path:'insurance', component:InsuranceComponent},
  {path:'register', component:RegisterComponent},
  {path:'claim', component:ClaimInsuranceComponent},
  {path:'policy',component:ApplyPolicyComponent},
  {path:'logout',component:LogoutComponent},
  {path:'bidderHome',component:BidderWelcomeComponent},
  {path:'crops',component:CropsComponent},
  {path:'policyList', component:PolicyListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
