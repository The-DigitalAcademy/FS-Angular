import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-find-new-car',
  templateUrl: './find-new-car.component.html',
  styleUrls: ['./find-new-car.component.scss']
})
export class FindNewCarComponent implements OnInit {

  carImages: any[] = [];

  constructor(private carService: ApiDataService) { }

  ngOnInit(): void {
    this.loadCarImages();
  }

  loadCarImages() {
    this.carService.getCarImages().subscribe(
      (response) => {
        this.carImages = response; 
      },
      (error) => {
        console.error('Error loading car images:', error);
      }
    );
  }

}
