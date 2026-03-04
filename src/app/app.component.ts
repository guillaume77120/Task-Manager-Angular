import { Component, signal} from '@angular/core';
import { TaskFormComponent } from './features/tasks/components/task-form/task-form.component';
import { TaskListComponent } from './features/tasks/components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('my-first-app-angular');
}
