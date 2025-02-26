import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})
export class NewListComponent {

  // listTitle: string = "";

  constructor(private taskService:TaskService, private router: Router) { }
    
  createList(title:any){
    // console.log(title)
    this.taskService.createNewList(title).subscribe((res:any)=>{
      // console.log(res)
      this.router.navigate(['/lists',res._id])
    })
  }
}