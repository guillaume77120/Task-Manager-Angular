import { Component, inject, OnInit, } from "@angular/core";
import { TaskService } from "../../../../core/services/task.service";
import { AsyncPipe} from "@angular/common";
import { Observable } from "rxjs";
import { Task } from "../../../../models/task.model";

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit {
    private taskService = inject(TaskService);
    
    tasks$!: Observable<Task[]>;
    
    ngOnInit(): void {
        this.tasks$ = this.taskService.filteredTasks$;
    }
    onDelete(id: string) {
        if (confirm('Êtes-vous sur de vouloir supprimer cette tâche ?')) {
            this.taskService.deleteTask(id);
        }
    }
    applyFilter(val: string) {
        this.taskService.setFilter(val);
    }
}   
