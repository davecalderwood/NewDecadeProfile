import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile2020';

  page1: boolean;
  page2: boolean;

  pageOneTitle = "Hi I'm Dave!"
  pageTwoTitle = "Page 2"

  constructor() {

  }

  ngOnInit() {
    this.page1 = true;
  }
}
