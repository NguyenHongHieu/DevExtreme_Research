import { OfferingService } from './../../service/program-offering.service';
import { Service } from 'src/app/service/test.service';
import { FormDetailService } from './../../service/program-form-detail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PriorityEntity } from 'src/app/service/program-offering.service';
import notify from 'devextreme/ui/notify';
import { ProgramOfferingModel } from 'src/app/model/program-offering.model';
@Component({
  selector: 'app-program-form-detail',
  templateUrl: './program-form-detail.component.html',
  styleUrls: ['./program-form-detail.component.css'],
})
export class ProgramFormDetailComponent implements OnInit {
  capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
  valueForEditableTextArea: string;
  public subscription: Subscription | undefined;
  simpleProducts: string[];
  eventValue: string;
  valueChangeEvents: any[];
  priorities: string[];
  priorityEntities: PriorityEntity[];

  popupVisible = false;
  offering: ProgramOfferingModel[] | undefined;
  now: Date = new Date();

  namePattern: any = /^[^0-9]+$/;


  constructor(private _activateRouteService: ActivatedRoute, Service: OfferingService) {
    this.simpleProducts = [];
    this.valueForEditableTextArea = "";
    this.valueChangeEvents = [{
      title: 'On Blur',
      name: 'change',
    }, {
      title: 'On Key Up',
      name: 'keyup',
    }];
    this.eventValue = this.valueChangeEvents[0].name;
    this.priorities = [
      'Hybrid',
      'In person',
      'Online',
    ];
    this.priorityEntities = Service.getPriorityEntities();

  }

  ngOnInit(): void {
    this.subscription = this._activateRouteService.params.subscribe((data) => {
      let id = data['id'];
      console.log('🚀 ~ id', id);
    });
  }
  showAddOffering(_e: any) {
    this.popupVisible = true;
    //...
  }
  click = (e: any) => {
    const buttonText = e.component.option('text');
    notify(`The ${this.capitalize(buttonText)} button was clicked`);
  };


}


