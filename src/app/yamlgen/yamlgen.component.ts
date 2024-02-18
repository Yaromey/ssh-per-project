import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatSliderModule} from "@angular/material/slider";
import {NgForOf} from "@angular/common";

type TemperatureTransition = { TemperatureTransition: number[] };
type RGBTransition = { RGBTransition: number[] };

type Transition = RGBTransition | TemperatureTransition

interface FlowParams {
  action: string;
  count: number;
  transitions: Transition[];
}

interface Alarm {
  name: string;
  flow_params: FlowParams;
}

@Component({
  selector: 'yamlgen',
  standalone: true,
  imports: [
    FormsModule,
    MatSliderModule,
    NgForOf
  ],
  templateUrl: './yamlgen.component.html',
  styleUrl: './yamlgen.component.css'
})
export class YamlgenComponent {
  alarm: Alarm = {
    name: 'Alarm3',
    flow_params: {
      action: 'recover',
      count: 6,
      transitions: [
        {RGBTransition: [255, 255, 255, 213, 100]},
        {RGBTransition: [255, 0, 0, 426, 80]},
        {RGBTransition: [255, 0, 0, 854, 60]},
        {RGBTransition: [255, 100, 0, 1708, 100]},
        {TemperatureTransition: [1700, 3416, 1]}
      ]
    }
  }
  yamlCode: string = '';

  generateYaml(): void {
    this.yamlCode = '- ' + JSON.stringify(this.alarm, null, 4).replace(/"/g, "'");
  }

  getCurrentRGB(): number[] {
    const lastTransition = this.alarm.flow_params.transitions.slice(-1)[0];


    // Default RGB values if no RGBTransition is found
    return Object.values(lastTransition)[0] || [255, 255, 255];
  }

  protected readonly Object = Object;
}
