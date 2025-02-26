import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-edit-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-list.component.html',
  styleUrl: './edit-list.component.css'
})
export class EditListComponent {

  constructor(private taskService:TaskService, private route:ActivatedRoute, private router:Router){}
  
  listId!:any

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      // console.log(params);
      this.listId = params['listId']
    })
  }  

  editList(title:any){
    this.taskService.updateList(this.listId,title).subscribe((res:any)=>{
      console.log("List Successfully Updated")
      this.router.navigate([`/lists/${this.listId}`]);
    })
  }
}
