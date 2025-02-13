import {Component, signal} from '@angular/core';
import {Button} from 'primeng/button';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Button, Slider, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeng-slider';
  sliderMax = signal(1994);
  sliderValue = signal(1994);

  changeMax() {
    this.sliderMax.set(1984); //after this I expect the handle should get moved or the slider should get updated and rerendered
  }
}
