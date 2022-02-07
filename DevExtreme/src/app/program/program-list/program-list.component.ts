import { Active } from './../../model/program-list.model';
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/test.service';
import themes from 'devextreme/ui/themes';
import { ProgramListVM } from 'src/app/model/program-list.model';
import { Router } from '@angular/router';
import { ActionSelect } from 'src/app/shared/enum';
import { FillterSelect } from 'src/app/shared/enum';
@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {

  // dataSource: ProgramListVM[] = [
  //   new ProgramListVM('In to javascript', '3 offers', 'Hieu', 3),
  //   new ProgramListVM('In to javascript 1', '3 offers', 'Hieu', 3),
  //   new ProgramListVM('In to javascript 2', '3 offers', 'Hieu', 3),
  //   new ProgramListVM('In to javascript 3', '3 offers', 'Hieu', 3),
  //   new ProgramListVM('In to javascript 4', '3 offers', 'Hieu', 3)
  // ];

  dataSource: ProgramListVM[] = [];

  actionOnSelect: any = [
    { id: 0, name: ActionSelect.Delete_Program },
    { id: 1, name: ActionSelect.Set_To_Inactive },
  ];
  fillterOnselect: any = [
    { id: 0, name: FillterSelect.Bobs_Summer_Camp },
  ];

  active: Active[] = [
    new Active(0, 'Active()', 'Program in active'),
    new Active(0, 'InActive()', 'Program in inactive'),
    new Active(0, 'Unpublish()', 'Program is unpublish')
  ];
  program: string[];

  currentProduct: any;
  collapsed = false;
  allMode: string;
  selectedId: number;

  fillterBySelect: any = null;

  checkBoxesMode: string;

  showNavButtons = true;
  displayMode = 'full';
  showPageSizeSelector = true;
  showInfo = true;
  readonly allowedPageSizes = [5, 10, 'all'];
  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];
  get isCompactMode() {
    return this.displayMode === 'compact';
  }
  actionSelected: any = null;

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = (pointsInfo: any) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });

  constructor(service: Service, private router: Router) {

  }

  ngOnInit(): void {
    this.checkBoxesMode = themes.current().startsWith('material') ? 'always' : 'onClick';
    this.allMode = 'allPages';
  }

  itemClick(data: any) {
    const item = data.itemData;

    if (item.price) {
      this.currentProduct = item;
    }
  }

  onActionChanged(e: any) {
    console.log(this.actionSelected);
  }

  navigateToAddNew(e: any) {
    this.router.navigate(['programs', 'add']);
  }
  onFillterBy(e: any) {
    console.log(this.fillterBySelect);
  }
}
