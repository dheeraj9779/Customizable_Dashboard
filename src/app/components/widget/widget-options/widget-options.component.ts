import { Component,inject,model,input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from '../../../services/dashboard.service';
import { Widget } from '../../../models/dashboard';

@Component({
  selector: 'app-widget-options',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatButtonToggleModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.css'
})
export class WidgetOptionsComponent {
showOptions = model<Boolean>(false)
data = input.required<Widget>()
store = inject(DashboardService)
}
