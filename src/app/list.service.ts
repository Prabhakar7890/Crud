import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
   baseUrl = `${"http://localhost:5000"}/employee`;

  constructor(private hp:HttpClient) { }

  getEmp():Observable<any>{
    return this.hp.get("http://localhost:5000/employee")
  }
  delEmp(id: any) { 
    return this.hp.delete(`${this.baseUrl}/${id}`);
}
}
