import { ALLOWED_PAGE_SIZES } from './../../app.constaints';
import { Active } from './../../model/program-list.model';
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/test.service';
import themes from 'devextreme/ui/themes';
import { ProgramListVM } from 'src/app/model/program-list.model';
import { Router } from '@angular/router';
import { ActionSelect } from 'src/app/shared/enum';
import { FillterSelect } from 'src/app/shared/enum';
import { HttpClientModule } from '@angular/common/http';
import { ProgramListService } from 'src/app/service/program-list.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { BaseFilterParamsModel } from 'src/app/model/base-filter-params.model';
import { SORT_TYPE } from 'src/app/shared/app.enum';
import { PAGE_SIZE_XSMALL } from 'src/app/app.constaints';


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

  gridSource: any;
  sortColumn = '';
  sortOrder: string;
  pageSize: number = PAGE_SIZE_XSMALL;
  allowPageSizes: any = ALLOWED_PAGE_SIZES;

  checkBoxesMode: string;

  fillterBySelect: any = null;

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

  constructor(private programListService: ProgramListService, private router: Router) {
    //this.loadGrid();
  }
  // loadGrid() {
  // 	this.programListService.getPrograms().subscribe(res => {
  // 		this.dataSource = res;
  // 		console.log(res);
  // 	})
  // }

  loadGridData() {
    if (!this.gridSource) {
      this.gridSource = {};
    }

    this.gridSource = new DataSource({
      store: new CustomStore({
        load: (option) => {
          console.log(option);
          return this.gridLoadOption(option);
        },
        update: (key: string, values: ProgramListVM) => {
          values.id = key;
          return null;
        },
        onLoaded: () => {
          // Updates the content of widget after resizing.
          //this.updateDimension();
        },
        onUpdated: async (key, values) => {
          console.log('Update rent review successfully');
        },
        onRemoved: (key) => {
          console.log('The rent review is deleted');
        }
      })
    });
  }

  gridLoadOption(loadOptions: any) {

    this.sortColumn = '';
    this.sortOrder = '';

    if (!!loadOptions.sort) {
      this.sortColumn = loadOptions.sort[0].selector.charAt(0).toUpperCase() + loadOptions.sort[0].selector.slice(1);
      this.sortOrder = loadOptions.sort[0].desc ? SORT_TYPE.DESC : SORT_TYPE.ASC;
    }

    const params = new BaseFilterParamsModel({
      sortColumn: this.sortColumn,
      sortType: this.sortOrder,
      skip: loadOptions.skip,
      take: loadOptions.take,
      filters: [],
    });

    return this.programListService.getPrograms(params).toPromise()
      .then(res => {
        console.log(res);
        return {
          data: res.records,
          totalCount: res.totalRecords
        };
      });
  }

  ngOnInit(): void {
    this.checkBoxesMode = themes.current().startsWith('material') ? 'always' : 'onClick';
    this.allMode = 'allPages';
    this.loadGridData();
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
