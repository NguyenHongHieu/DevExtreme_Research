import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuItems = [
    {
      text: 'Video Players',
    },
    {
      text: 'Televisions',
    },
    {
      text: 'Monitors',
      items: [
        {
          text: 'DesktopLCD 19',
        },
        {
          text: 'DesktopLCD 21',
        },
        {
          text: 'DesktopLED 21',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
