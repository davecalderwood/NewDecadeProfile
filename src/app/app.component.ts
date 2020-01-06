import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile2020';

  page1: any;
  page2: any;
  page3: any;
  page4: any;

  currentIndex = 0

  array = [
    this.page1 = 0,
    this.page2 = 1,
    this.page3 = 2,
    this.page4 = 3
]; 

  constructor() {

  }

  ngOnInit() {
    // this.page1 = true;
  }

  // for(i=0;i<10;i++)
  goNext() {
    if(this.currentIndex == this.array.length - 1){
      this.currentIndex = 0
    }
    else{
      this.currentIndex++;
    }
  }

  goPrevious() {
    if(this.currentIndex == 0){
      this.currentIndex = this.array.length - 1;
    }
    else{
      this.currentIndex--;
    }
  }
}
