import { Component } from '@angular/core';
import { BwmDataService } from 'src/app/services/bwm-data.service';


@Component({
  selector: 'app-find-new-car',
  templateUrl: './find-new-car.component.html',
  styleUrls: ['./find-new-car.component.scss']
})
export class FindNewCarComponent {
  carData: any[] = [];

  constructor(private carDataService: BwmDataService) { }

  // ngOnInit(): void {
  //   this.loadCarData();
  // }

  // loadCarData() {
  //   this.carDataService.getCarData().subscribe(
  //     (data) => {
  //       this.carData = data;
  //     },
  //     (error) => {
  //       console.error('Error loading car data:', error);
  //     }
  //   );
  // }
}
