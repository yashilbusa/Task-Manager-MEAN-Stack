import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqSevice : WebRequestService) { }

  createList(title:any){
   return this.webReqSevice.post("lists",{title})
  }

}
