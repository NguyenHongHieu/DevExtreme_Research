import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-program-form-detail',
  templateUrl: './program-form-detail.component.html',
  styleUrls: ['./program-form-detail.component.css'],
})
export class ProgramFormDetailComponent implements OnInit {
  public subscription: Subscription | undefined;

  constructor(private _activateRouteService: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this._activateRouteService.params.subscribe((data) => {
      let id = data['id'];
      console.log('🚀 ~ id', id);
    });
  }
}
