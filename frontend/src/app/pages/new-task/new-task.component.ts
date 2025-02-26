import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  listId!:String

  constructor(private taskService:TaskService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe((params:any)=>{
        this.listId = params['listId']
        // console.log(this.listId);
    })
  }

  createTask(task:any){
    this.taskService.createNewTask(task,this.listId).subscribe((res:any)=>{
      console.log(res)
      this.router.navigate(['/lists',res._id])
    })
  }
}
