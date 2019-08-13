import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.sass']
})
export class StudentlistComponent implements OnInit {

  constructor(private service: StudentserviceService, private route: Router) { }

  public studentdetails: any;
  public subscribe: any;
  ngOnInit() {
    this.studentdetails = this.service.studentarray;
    console.log(this.studentdetails);
  }
  /*delete() {
   delete[this.studentdetails()];
  }*/

  edit(value) {
    console.log(value);
    this.route.navigate(['/form'], { queryParams: { id: value.id } });

  }
  deleteMsg(msg) {
    const index: number = this.studentdetails.indexOf(msg);
    if (index !== -1) {
      this.studentdetails.splice(index, 1);
    }

  }
}
