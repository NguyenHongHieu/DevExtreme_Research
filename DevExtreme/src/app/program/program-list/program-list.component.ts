import { Component, OnInit } from '@angular/core';
import { DxBulletComponent } from 'devextreme-angular';
import { DxiColumnComponent, DxoSearchPanelComponent } from 'devextreme-angular/ui/nested';
import { DxoMarginComponent } from 'devextreme-angular/ui/nested';
import DataSource from 'devextreme/data/data_source';
import { Service } from 'src/app/service/test.service';
import themes from 'devextreme/ui/themes';
@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {

  dataSource: DataSource;
  currentProduct: any;
  collapsed = false;
  allMode: string;

  checkBoxesMode: string;

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = (pointsInfo: any) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
    this.checkBoxesMode = themes.current().startsWith('material') ? 'always' : 'onClick';
    this.allMode = 'allPages';
  }
  itemClick(data: any) {
    const item = data.itemData;

    if (item.price) {
      this.currentProduct = item;
    }
  }
  ngOnInit(): void {
  }
}
