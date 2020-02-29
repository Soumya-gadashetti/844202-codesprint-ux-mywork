import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:9090/place";
   }

   getAll() : Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(this.baseUrl)
  }
  getAllById(firstName:string) : Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${this.baseUrl}/${firstName}`);
 }

   add(appointment:Appointment) :Observable<Appointment>{
    return this.httpClient.post<Appointment>(this.baseUrl,appointment);
  }

  save(appointment:Appointment) :Observable<Appointment>{
   return this.httpClient.put<Appointment>(this.baseUrl,appointment);
 }
}
