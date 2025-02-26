import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TaskService } from '../../task.service';
import { CommonModule } from '@angular/common';
import { parseArgs } from 'util';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent {

  lists:any[]= []
  tasks:any[]= []

  selectedListId!:any

  constructor(private taskService:TaskService, private route:ActivatedRoute, private router:Router){}

  ngOnInit() {
    
    this.taskService.getLists().subscribe((lists:any)=>{
      this.lists = lists
    })

    this.route.params.subscribe((params) => {
      this.selectedListId = params['listId']; // Check if this is undefined
      if (this.selectedListId) {
        this.taskService.getTasks(this.selectedListId).subscribe((tasks: any) => {
          this.tasks = tasks; 
        });
      } else {
        console.error("listId is undefined");
      }
    });
  }

  getTasks() {
    if (this.selectedListId) {
      this.taskService.getTasks(this.selectedListId).subscribe((tasks: any) => {
        this.tasks = tasks; 
      });
    }
  }

  onDeleteList() {
    this.taskService.deleteList(this.selectedListId).subscribe(() => {
      this.router.navigate(['/lists']);
    });
  }

  editTask(taskId: string) {
    this.router.navigate(['/edit-task', taskId]);
  }

  deleteTask(taskId: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(this.selectedListId, taskId).subscribe(() => {
        console.log('Task deleted');
        this.getTasks();
      });
    }
  }
}