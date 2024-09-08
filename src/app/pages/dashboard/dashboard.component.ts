import { Component, inject } from '@angular/core';
import { WidgetComponent } from "../../components/widget/widget.component";
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent,CommonModule,MatButtonModule, MatIconModule, MatMenuModule],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  store = inject(DashboardService)
}
