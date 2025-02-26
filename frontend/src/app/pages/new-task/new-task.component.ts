import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  constructor(private taskService:TaskService) { }

  createTask(task:any){
    this.taskService.createNewTask(task).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
