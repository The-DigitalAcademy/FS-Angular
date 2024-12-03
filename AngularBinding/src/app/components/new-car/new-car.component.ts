import { Component, OnInit } from '@angular/core';
import { BmwService } from 'src/app/services/bmw.service';
import { BwmDataService } from 'src/app/services/bwm-data.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  carData: any[] = [];

 constructor(private carDataService: BwmDataService) { }

    ngOnInit(): void {
    this.loadCarData();
  }

  loadCarData() {
    this.carDataService.getCarData().subscribe(
      (data) => {
        this.carData = data;
      },
      (error) => {
        console.error('Error loading car data:', error);
      }
    );
  }

}
