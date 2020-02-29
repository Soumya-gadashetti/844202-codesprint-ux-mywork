import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent implements OnInit {
  appointment:Appointment;
  msg:string;
  isNew:boolean;
  // joinDateStr :string;
 constructor(
   private appointmentService:AppointmentService,
   private actRoute:ActivatedRoute,
   private router:Router
 ) { }

 ngOnInit() {
   let firstName=this.actRoute.snapshot.params.id;
   if(firstName){
     this.isNew=false;
     this.appointmentService.getAllById(firstName).subscribe(
       (data) =>{
         this.appointment=data;
        //  this.joinDateStr = this.emp.joinDate.toISOString().substr(0,10);
       }
     );

   }else{
     this.isNew=true;
     this.appointment={
      //  empId:0,
       firstName:'',
       lastName:'',
      //  basic:0,
      //  joinDate:new Date(),
      // mobileNumber:'',
      age:0,
       email:'',
      //  dept:''
     };
    //  this.joinDateStr=this.emp.joinDate.toISOString().substr(0,10);
   
}
 }

  //  updateJoinDate(){
  //    this.emp.joinDate= new Date(this.joinDateStr);
  //  }
   save(){
     let ob:Observable<Appointment>;
     if(this.isNew){
       ob=this.appointmentService.add(this.appointment);
     }else{
       ob=this.appointmentService.save(this.appointment);
     }
     ob.subscribe(
       (Data) =>{
         this.router.navigateByUrl("");
       },
       (errResponse)=> {
         this.msg=errResponse.error;
         
       }
     );
   }
}
