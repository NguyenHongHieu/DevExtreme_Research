import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuItems = [
    {
      text: 'Dashboard',
      icon: 'fa fa-line-chart',
    },
    {
      text: 'Televisions',
      icon: 'fa fa-laptop',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
