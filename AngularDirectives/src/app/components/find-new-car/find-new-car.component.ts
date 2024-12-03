import { Component } from '@angular/core';
import { BmwDataService } from 'src/app/services/bmw-data.service';


@Component({
  selector: 'app-find-new-car',
  templateUrl: './find-new-car.component.html',
  styleUrls: ['./find-new-car.component.scss']
})
export class FindNewCarComponent {

  carData: any[] = [];

  constructor(private carDataService: BmwDataService) { }

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

  toggleHighlight(car: any) {
    car.highlight = !car.highlight;
  }

}
