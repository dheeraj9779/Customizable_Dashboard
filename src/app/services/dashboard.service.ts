import { Injectable, signal, computed } from '@angular/core';
import { Widget } from '../models/dashboard';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/widgets/views/views.component';

@Injectable()
export class DashboardService {

  widgets = signal<Widget[]>([
    {
      id: 1,
      label: "Subscribers",
      content: SubscribersComponent,
      backgroundColor: '#003f5c',
      color: 'whitesmoke'
    },
    {
      id: 2,
      label: "Views",
      content: ViewsComponent,
      backgroundColor: '#003f5c',
      color: 'whitesmoke'
    }
  ]
  )

  addedWidgets = signal<Widget[]>([
    {
      id: 1,
      label: "Subscribers",
      content: SubscribersComponent,
      rows: 2,
      columns: 2
    },
    {
      id: 2,
      label: "Views",
      content: ViewsComponent
    }
  ])

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id))
  })


  addWidget(w: Widget){
    this.addedWidgets.set([...this.addedWidgets(),{...w}])
  }

  updateWidget(id: number, widget: Partial<Widget>){
    const index = this.addedWidgets().findIndex(w => w.id === id)
    if(index !== -1 ){
      const newWidgets = [...this.addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget};
      this.addedWidgets.set(newWidgets);
    }
  }

  moveWidgetToRight(id: number){
      const index = this.addedWidgets().findIndex(w => w.id === id);
      if(index === this.addedWidgets().length - 1){
        return;
      }

      const newWidgets = [...this.addedWidgets()];
      [newWidgets[index], newWidgets[index  + 1]] = [{...newWidgets[index + 1]}, {...newWidgets[index]}];

      this.addedWidgets.set(newWidgets)
  }

  moveWidgetToLeft(id: number){
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if(index === 0){
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index  - 1]] = [{...newWidgets[index - 1]}, {...newWidgets[index]}];

    this.addedWidgets.set(newWidgets)
  }

  removeWidget(id: number){
    this.addedWidgets.set(this.addedWidgets().filter(w => w.id !== id))
  }

  constructor() { }
}
