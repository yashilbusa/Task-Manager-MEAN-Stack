import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { List } from '../../models/task.model';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})
export class NewListComponent {

  // listTitle: string = "";

  constructor(private taskService:TaskService) { }
    
  createList(title:List){
    console.log(title)
    this.taskService.createNewList(title).subscribe((res:any)=>{
      console.log(res)
    })
  }
}