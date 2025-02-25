import { Component } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent {

  constructor(private taskService:TaskService) { }

  createList(e:any){
    this.taskService.createList('Test').subscribe((res:any)=>{
      console.log(res)
    })
  }
}
