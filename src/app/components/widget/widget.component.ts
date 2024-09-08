import { Component,input,signal } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WidgetOptionsComponent } from './widget-options/widget-options.component';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [NgComponentOutlet, MatIconModule, MatButtonModule, WidgetOptionsComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  host: {
    '[style.grid-area]': '"span "  + (data().rows ?? 1) + "/ span " + (data().columns ?? 1)'
  }
})
export class WidgetComponent {
data = input.required<Widget>()

showOptions = signal<Boolean>(false)
}
