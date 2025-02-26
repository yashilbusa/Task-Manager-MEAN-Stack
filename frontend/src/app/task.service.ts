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

  updateList(id:any,title:any){
    return this.webReqSevice.put(`lists/${id}`,{title:title})
  }
  
  getTasks(listId: any) {
    return this.webReqSevice.get(`lists/${listId}/tasks`);
  }

  createNewTask(task:any,listId:any){
    return this.webReqSevice.post(`lists/${listId}/tasks`,{title:task})
  }

  deleteList(id:any){
    return this.webReqSevice.delete(`lists/${id}`)
  }

  deleteTask(listId: any, taskId: any) {
    return this.webReqSevice.delete(`lists/${listId}/tasks/${taskId}`);
  }

}
