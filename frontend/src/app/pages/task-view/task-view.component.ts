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

    // this.route.params.subscribe((params)=>{
    //   // console.log(params);
    //   this.selectedListId = params['listId']
    //   this.taskService.getTasks(params['listId']).subscribe((task:any)=>{
    //     this.tasks = task
    //   })
    // })
  }

  onDeleteList(){
    this.taskService.deleteList(this.selectedListId).subscribe((res:any)=>{
      this.router.navigate(['/lists'])
      res.send("List Deleted Successfully")
    })
  }
}