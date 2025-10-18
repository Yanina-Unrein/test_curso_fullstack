import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-slider',
  imports: [],
  templateUrl: './info-slider.html',
  styleUrl: './info-slider.css'
})
export class InfoSlider {
  @Input() movie: any;       
  @Input() active: boolean = false;  
}
