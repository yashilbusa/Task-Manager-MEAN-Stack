import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqSevice : WebRequestService) { }
  
  getLists(){
    return this.webReqSevice.get("lists")
  }

  createNewList(title:any){
   return this.webReqSevice.post("lists",{title:title})
  }
  
  getTasks(listId:String){
    return this.webReqSevice.get(`lists/${listId}/tasks`)
  }

  createNewTask(task:any,listId:String){
    return this.webReqSevice.post(`lists/${listId}/tasks`,{title:task})
  }
}
