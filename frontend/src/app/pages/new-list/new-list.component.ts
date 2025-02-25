import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})
export class NewListComponent {

  constructor(private taskService:TaskService) { }
    
  createList(title:String){
    // console.log(title)
    this.taskService.createList(title).subscribe((res:any)=>{
      console.log(res)
    })
  }
}