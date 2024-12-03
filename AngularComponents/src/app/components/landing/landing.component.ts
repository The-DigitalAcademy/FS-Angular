import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { NewcarComponent } from '../newcar/newcar.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild(NewcarComponent) childComponent!: NewcarComponent;

  ngAfterViewInit(): void {

    if (this.childComponent) {
      this.childComponent.childMethod();
    }
  }

  showChild: boolean = false;

  toggleChild() {
    this.showChild = !this.showChild;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
