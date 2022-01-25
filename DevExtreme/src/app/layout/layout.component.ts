import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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


  isFooterVisible: boolean = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.withTitleVisible = false;


  }

  ngOnInit(): void {
    // 1. Google Angular Router and ActivatedRoute to detect current url and show/hide for footer

    // this.activatedRoute.params.subscribe(url => {
    //   console.log(url);
    // });
  }

  navSelectionChanged(e: any) {
    this.currentData = this.listData[e.itemIndex].data;
  }

}
