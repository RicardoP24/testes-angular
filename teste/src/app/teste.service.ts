import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) { }

  getAlert(){
    alert("Olá Mundo");
  }

  fetchData(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos/");
  }

  postData(info:any):Observable<any>{
    return this.http.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(info), {headers: new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8',
       })}
    
    );
  }
}
