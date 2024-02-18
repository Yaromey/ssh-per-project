import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TestUrlComponent} from "./test-url/test-url.component";
import {YamlgenComponent} from "./yamlgen/yamlgen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestUrlComponent, YamlgenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'url-prefix-helper';
}
