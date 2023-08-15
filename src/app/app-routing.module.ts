import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTransportationComponent } from './search-transportation/search-transportation.component';
import { SubscribeTransportationComponent } from './subscribe-transportation/subscribe-transportation.component';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';

const routes: Routes = [
  { path: '', component: SearchTransportationComponent },
  { path: 'subscribe', component: SubscribeTransportationComponent },
  { path: 'cancel-subscription', component: CancelSubscriptionComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
