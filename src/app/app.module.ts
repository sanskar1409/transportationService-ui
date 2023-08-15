import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTransportationComponent } from './search-transportation/search-transportation.component';
import { SubscribeTransportationComponent } from './subscribe-transportation/subscribe-transportation.component';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchTransportationComponent,
    SubscribeTransportationComponent,
    CancelSubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
