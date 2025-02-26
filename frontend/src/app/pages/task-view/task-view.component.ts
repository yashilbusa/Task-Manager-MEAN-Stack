import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent {
  constructor(private taskService:TaskService, private router:ActivatedRoute){}
}