import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { RegisterBidderComponent } from './register-bidder/register-bidder.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FarmerWelcomeComponent } from './farmer-welcome/farmer-welcome.component';
import { PlaceSellRequestComponent } from './place-sell-request/place-sell-request.component';
import { ViewSoldHistoryComponent } from './view-sold-history/view-sold-history.component';
import { ViewMarketplaceComponent } from './view-marketplace/view-marketplace.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { RegisterComponent } from './register/register.component';
import { BidderWelcomeComponent } from './bidder-welcome/bidder-welcome.component';
import { ApplyPolicyComponent } from './apply-policy/apply-policy.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { AdminComponent } from './admin/admin.component';
import { CropsComponent } from './crops/crops.component';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { UpdateBidComponent } from './update-bid/update-bid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RegisterFarmerComponent,
    RegisterBidderComponent,
    LoginComponent,
    LogoutComponent,
    FarmerWelcomeComponent,
    PlaceSellRequestComponent,
    ViewSoldHistoryComponent,
    ViewMarketplaceComponent,
    InsuranceComponent,
    RegisterComponent,
    BidderWelcomeComponent,
    ApplyPolicyComponent,
    ClaimInsuranceComponent,
    AdminComponent,
    CropsComponent,
    PolicyListComponent,
    UpdateBidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
