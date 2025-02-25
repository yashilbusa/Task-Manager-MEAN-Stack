import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqSevice : WebRequestService) { }

  createList(title:String){
   return this.webReqSevice.post("lists",title)
  }
}
