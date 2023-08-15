import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { mockVehicleList } from '../app.constant';

@Component({
  selector: 'app-search-transportation',
  templateUrl: './search-transportation.component.html',
  styleUrls: ['./search-transportation.component.css']
})
export class SearchTransportationComponent implements OnInit {
  vehicleList: any = [];

  constructor(public service: HttpServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  logInputValue(inputValue: string) {
    this.service.get(`transports/${inputValue}`).subscribe({
      next: (data: any) => {
        this.vehicleList = data;
        if (data.length == 0) {
          alert('Please select another location');
        }
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }

  subscribe(data: any) {
    this.service.subscriptionPlan = data;
    this.router.navigateByUrl(`/subscribe`);
  }

}
