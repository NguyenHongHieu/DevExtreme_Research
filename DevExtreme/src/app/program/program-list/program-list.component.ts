import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/test.service';
import themes from 'devextreme/ui/themes';
import { ProgramListVM } from 'src/app/model/program-list.model';
import { Router } from '@angular/router';
import { ActionSelect } from 'src/app/shared/enum';
@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {

  dataSource: ProgramListVM[] = [
    new ProgramListVM('In to javascript', '3 offers', 'Hieu', 3),
    new ProgramListVM('In to javascript 1', '3 offers', 'Hieu', 3),
    new ProgramListVM('In to javascript 2', '3 offers', 'Hieu', 3),
    new ProgramListVM('In to javascript 3', '3 offers', 'Hieu', 3),
    new ProgramListVM('In to javascript 4', '3 offers', 'Hieu', 3)
  ];

  actionOnSelect: any = [
    { id: 0, name: ActionSelect.Delete_Program },
    { id: 1, name: ActionSelect.Set_To_Inactive },
  ];
  allOrganizations: string[];
  program: string[];

  currentProduct: any;
  collapsed = false;
  allMode: string;
  selectedId: number;

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

  onBoatDetail(data: any) {
  }

  onDeleteBoat(id: any, e: MouseEvent) {
    this.selectedId = id;
  }

  onActionChanged(e: any) {
    console.log(this.actionSelected);
  }

  navigateToAddNew(e: any) {
    this.router.navigate(['programs', 'add']);
  }
}
