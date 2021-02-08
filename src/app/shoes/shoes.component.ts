import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss'],
})
export class ShoesComponent implements OnInit, AfterViewInit, OnDestroy {
  folderUrl: string;

  constructor() {
    this.folderUrl = `${window.location.origin}/assets/abros/1/`;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (window.CI360) window.CI360.init();
  }

  ngOnDestroy() {
    if (window.CI360) window.CI360.destroy();
  }
}
