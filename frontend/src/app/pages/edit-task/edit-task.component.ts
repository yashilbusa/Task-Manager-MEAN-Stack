import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {

  task: any = []
  taskId!: string;
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    if (taskId) {
      this.taskId = taskId;
    }
    
    if (this.taskId) {
      this.getTask(this.taskId);
    }
  }

  getTask(taskId: string) {
    this.taskService.getTasks(taskId).subscribe((task:any) => {
      this.task = task;
    });
  }

  updateTask() {
    if (this.taskId && this.task.title) {
      this.taskService.updateTask(this.taskId, this.task.title).subscribe(() => {
        console.log('Task updated successfully');
        this.router.navigate(['/lists', this.taskId]);
      });
    }
  }
  cancel() {
    this.router.navigate(['/lists', this.taskId]); 
  }

}
