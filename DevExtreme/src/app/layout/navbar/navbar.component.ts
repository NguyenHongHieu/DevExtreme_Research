import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxTreeViewComponent } from 'devextreme-angular';
import { navigation } from 'src/app/shared/app-navigate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // menuItems = [
  //   {
  //     text: 'Dashboard',
  //     icon: 'fa fa-line-chart',
  //     path: '/dashboard'
  //   },
  //   {
  //     text: 'Televisions',
  //     icon: 'fa fa-laptop',
  //     path: '/televisions'
  //   },
  // ];

  @ViewChild(DxTreeViewComponent, { static: true }) menu: DxTreeViewComponent;

  private _selectedItem: String;
  @Input()
  set selectedItem(value: String) {
    this._selectedItem = value;
    if (!this.menu.instance) {
      return;
    }

    this.menu.instance.selectItem(value);
  }

  private _items: any;
  get items() {
    return navigation;
  }

  private _compactMode = false;
  @Input()
  get compactMode() {
    return this._compactMode;
  }
  set compactMode(val) {
    this._compactMode = val;

    if (!this.menu.instance) {
      return;
    }

    if (val) {
      this.menu.instance.collapseAll();
    } else {
      this.menu.instance.expandItem(this._selectedItem);
    }
  }
  constructor(public router: Router) { }

  ngOnInit(): void { }

  onItemClick(e: any) {
    var value = e.itemData;
    console.log(value.text);
    console.log(value.path);
    this.router.navigate([value.path]).then();
  }
}
