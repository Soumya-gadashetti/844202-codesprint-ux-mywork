import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointment:Appointment[];
  errMsg:string;
  constructor(private appointmentService :AppointmentService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.appointment=null;
    this.errMsg=null;

    this.appointmentService.getAll().subscribe(
      (data) =>{ this.appointment=data; },
      (err) => {this.errMsg="Sorry Server not reachable!";}
    );

}
}
