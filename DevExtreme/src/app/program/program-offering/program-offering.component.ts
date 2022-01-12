import { Service } from './../../service/test.service';
import { Component, OnInit } from '@angular/core';
import { ProgramOfferingModel } from 'src/app/model/program-offering.model';
import { OfferingService, PriorityEntity } from 'src/app/service/program-offering.service';

@Component({
  selector: 'app-program-offering',
  templateUrl: './program-offering.component.html',
  styleUrls: ['./program-offering.component.css']
})
export class ProgramOfferingComponent implements OnInit {
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

  contentReady() {

  }
}
