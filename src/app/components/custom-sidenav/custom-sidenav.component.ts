import { CommonModule } from '@angular/common';
import { Component, Input, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label:string,
  route: string
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule,CommonModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false)
  @Input() set collapsed(val:boolean){
    console.log(val)
    this.sideNavCollapsed.set(val)
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')

  menuItems = signal<MenuItem[]>([
    {
      icon: 'comment',
      label:'Dashboard',
      route:'dashboard'
    },
    {
      icon: 'video_library',
      label:'Content',
      route:'content'
    },
    {
      icon: 'analytics',
      label:'Analytics',
      route:'analytics'
    },
    {
      icon: 'comment',
      label:'Comment',
      route:'comment'
    },
  ])
}
