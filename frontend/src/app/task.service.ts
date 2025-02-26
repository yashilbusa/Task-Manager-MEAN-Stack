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
}
