import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.scss']
})
export class NewcarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  childMethod(){
    console.log("child & parent component")
  }

}
