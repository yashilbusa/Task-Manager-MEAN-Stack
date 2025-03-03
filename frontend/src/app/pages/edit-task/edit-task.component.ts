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
  listId!: any
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    const listId = this.route.snapshot.paramMap.get('listId'); // Get listId from route
  
    if (taskId && listId) {
      this.taskId = taskId;
      this.listId = listId;
      this.getTask(this.listId, this.taskId);
    }
  }

  getTask(listId: string, taskId: string) {
    this.taskService.getTask(listId, taskId).subscribe((task:any) => {
      this.task = task; // Fetch the task correctly
    });
  }

  updateTask() {
    if (this.taskId && this.listId && this.task.title) {
      this.taskService.updateTask(this.listId, this.taskId, this.task.title).subscribe(
        () => {
          console.log('Task updated successfully');
          this.router.navigate(['/lists', this.listId]);
        },
        (error) => console.error('Error updating task:', error)
      );
    } else {
      console.error('Missing taskId, listId, or title');
    }
  }
  
  cancel() {
    this.router.navigate(['/lists', this.taskId]); 
  }

}
