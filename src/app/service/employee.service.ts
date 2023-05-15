import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) {}
  
  async addEmployee(data: any): Promise<Observable<any>> {

   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    
     const response = this.http.post<any>('https://employee16.azurewebsites.net/Employee', JSON.stringify(data), httpOptions)
    

     
    return response
    
  }
  employeeupdate(id:number,data:any): Observable<any>{
    return this.http.put(`https://employee16.azurewebsites.net/Employee/${id}`,data);
   }
  getEmployeeList():Observable<any> {
    return this.http.get('https://employee16.azurewebsites.net/Employee');
  }
  employeedelete(id:number): Observable<any>{
    return this.http.delete(`https://employee16.azurewebsites.net/Employee/${id}`);
  }
}
