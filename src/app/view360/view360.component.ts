import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-view360',
  templateUrl: './view360.component.html',
  styleUrls: ['./view360.component.scss'],
})
export class View360Component implements OnInit, AfterViewInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    // console.log(window.location.origin);
  }

  ngAfterViewInit() {
    if (window.CI360) window.CI360.init();
  }

  ngOnDestroy() {
    if (window.CI360) window.CI360.destroy();
  }
}
