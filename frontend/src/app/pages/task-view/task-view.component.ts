import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { TaskService } from '../../task.service';
import { CommonModule } from '@angular/common';

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

  constructor(private taskService:TaskService, private route:ActivatedRoute){}

  ngOnInit() {
    
    this.taskService.getLists().subscribe((lists:any)=>{
      this.lists = lists
    })

    this.route.params.subscribe((params)=>{
      // console.log(params);
      this.taskService.getTasks(params['listId']).subscribe((task:any)=>{
        this.tasks = task
      })
    })
    
  }
}