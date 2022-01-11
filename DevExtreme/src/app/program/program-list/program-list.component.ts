import { Component, OnInit } from '@angular/core';
import { DxBulletComponent } from 'devextreme-angular';
import { DxiColumnComponent, DxoSearchPanelComponent } from 'devextreme-angular/ui/nested';
import { DxoMarginComponent } from 'devextreme-angular/ui/nested';
import DataSource from 'devextreme/data/data_source';
import { Service } from 'src/app/service/test.service';
@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {

  dataSource: DataSource;
  // dataSource: any;
  // customizeTooltip: any;
  collapsed = false;

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = (pointsInfo: any) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });
  // constructor() { }
  constructor(service: Service) {
    this.dataSource = service.getDataSource();
  }

  ngOnInit(): void {
  }

  //   contentReady(e: any) {

  //   }
}
