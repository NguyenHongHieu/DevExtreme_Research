import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  DataSource: number | undefined
  currentData: any;
  listData: any;
  withTitleVisible: boolean;

  constructor() {
    this.withTitleVisible = false;
  }

  ngOnInit(): void {
  }
  navSelectionChanged(e: any) {
    this.currentData = this.listData[e.itemIndex].data;
  }

}
