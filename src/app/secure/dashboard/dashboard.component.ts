import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    {
      provide: CarouselConfig, useValue: { interval: 1500, noPause: true }}
  ]
})
export class DashboardComponent {
  carouselInterval: number = 5000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;

  refresh: Subject<any> = new Subject();
  picturesURL: any = [];

  //attandanceAccess: boolean = false;
  noticeAccess: boolean = false;
  holidaysAccess: boolean = false;
  checkWrite: boolean;
  checkRead: boolean;

  currentSchoolName: String;
  currentRole: String;

  constructor(
  ) {}

  ngOnInit() {

  }

}
