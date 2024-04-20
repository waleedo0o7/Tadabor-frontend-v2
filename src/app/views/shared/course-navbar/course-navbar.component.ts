import { Component, Input } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-navbar',
  standalone: true,
  imports: [],
  templateUrl: './course-navbar.component.html',
})
export class CourseNavbarComponent {

  @Input() topicName = '';
  @Input() coursesId = '';
  @Input() topicId = '';

  constructor(private sharedService:SharedService , private router:Router) {}


  navText():void {
    this.router.navigate([`/courses-list/${this.coursesId}/topics-list/${this.topicId}/text-list`]);
  }

  navMedia():void {
    this.router.navigate([`/courses-list/${this.coursesId}/topics-list/${this.topicId}/media-list`]);
  }

  ngOnInit(){
    // alert(this.coursesId);
    // alert(this.topicId);
  }

}
