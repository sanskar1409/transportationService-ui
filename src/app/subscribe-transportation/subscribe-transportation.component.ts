import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscribe-transportation',
  templateUrl: './subscribe-transportation.component.html',
  styleUrls: ['./subscribe-transportation.component.css']
})
export class SubscribeTransportationComponent implements OnInit {
  plan: any;
  subscriptions: any;
  subscriptionPlan: any;
  newSubscription: any;
  localStorageSubscriptionValue !: string | null;
  localStoragePlansValue !: string | null;

  constructor(public service: HttpServiceService, public router: Router) { }

  ngOnInit(): void {
    this.plan = this.service.subscriptionPlan;
    if (!this.plan) {
      this.router.navigateByUrl(`/`);
    }
    this.newSubscription = new FormGroup({
      subscribedByEmployee: new FormControl(''),
      subscriptionStartDate: new FormControl(''),
      subscriptionEndDate: new FormControl(''),
      transportService: new FormGroup({
        id: new FormControl(this.plan?.id)
      }),
    });
  }

  subscribe() {
    this.service.post('subscriptions/new', this.newSubscription.value).subscribe({
      next: (data: any) => {
        this.router.navigateByUrl(`/cancel-subscription`);
      },
      error: (error) => {
        if (error.error?.message) {
          alert(error.error?.message);
        }
        else {
          this.router.navigateByUrl(`/cancel-subscription`);
          alert(error.error?.text);
        }
      },
    });
  }
}
