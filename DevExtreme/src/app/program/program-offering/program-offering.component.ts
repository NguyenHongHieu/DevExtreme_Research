import { Component, OnInit } from '@angular/core';
import { ProgramOfferingModel } from 'src/app/model/program-offering.model';
import { OfferingService, PriorityEntity } from 'src/app/service/program-offering.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-program-offering',
  templateUrl: './program-offering.component.html',
  styleUrls: ['./program-offering.component.css']
})
export class ProgramOfferingComponent implements OnInit {
  capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
  popupVisible = true;
  offering: ProgramOfferingModel[] | undefined;
  priorities: string[];
  now: Date = new Date();

  priorityEntities: PriorityEntity[];

  constructor(Service: OfferingService) {

    this.priorities = [
      'Hybrid',
      'In person',
      'Online',
    ];
    this.priorityEntities = Service.getPriorityEntities();
  }

  ngOnInit(): void {
  }
  click = (e: any) => {
    const buttonText = e.component.option('text');
    notify(`The ${this.capitalize(buttonText)} button was clicked`);
  };

  contentReady() {

  }
}
