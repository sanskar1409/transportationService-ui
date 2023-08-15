import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { mockRes } from '../app.constant';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: ['./cancel-subscription.component.css']
})
export class CancelSubscriptionComponent implements OnInit {
  subscriptions: any;

  constructor(
    public service: HttpServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  getSubscriptionList(id: any) {
    this.service.get(`subscriptions/${id}`).subscribe({
      next: (data: any) => {
        this.subscriptions = data;
      },
      error: (error) => {
        if (error.error?.message) {
          alert(error.error?.message);
        } else {
          alert(error?.message);
        }
      },
    })
  }

  cancelSubscription(id: number) {
    this.service.get(`subscriptions/${id}/unsubscribe`).subscribe({
      next: (data: any) => {
        this.getSubscriptionList(id);
      },
      error: (error) => {
        if (error.error?.message) {
          alert(error.error?.message);
        }
      },
    })
  }

}
