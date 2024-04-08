import { Component } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-course-navbar',
  standalone: true,
  imports: [],
  templateUrl: './course-navbar.component.html',
})
export class CourseNavbarComponent {


  constructor(private sharedService:SharedService) {
    this.sharedService.topicName$.subscribe( e => { console.log(e);})
  }

}
