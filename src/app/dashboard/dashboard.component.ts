import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  analyticsDashboard = [
    {'id':1,'name':'Library','covid_index':'good','public_safety_index':'neutral','color_code':'green','image':'../../assets/dashboard-library.jpg'},
    {'id':2,'name':'Gym','covid_index':'bad','public_safety_index':'neutral','color_code':'red','image':'../../assets/dashboard-gym.jpg'},
    {'id':3,'name':'Dining Hall','covid_index':'good','public_safety_index':'bad','color_code':'yellow','image':'../../assets/dashboard-diningHall.jpg'},
    {'id':4,'name':'Student Center','covid_index':'neutral','public_safety_index':'neutral','color_code':'yellow','image':'../../assets/dashboard-studentCenter.jpg'}
  ]

}
