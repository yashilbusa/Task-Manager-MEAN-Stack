import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqSevice : WebRequestService) { }

  createNewList(title:any){
   return this.webReqSevice.post("lists",{title:title})
  }

  createNewTask(task:any){
    return this.webReqSevice.post("lists",{title:task})
  }

  getLists(){
    return this.webReqSevice.get("lists")
  }

  getTasks(listId:any){
    return this.webReqSevice.get(`lists/${listId}/tasks`)
  }
}
