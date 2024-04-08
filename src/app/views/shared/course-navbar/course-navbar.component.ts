import { Component, Input } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-course-navbar',
  standalone: true,
  imports: [],
  templateUrl: './course-navbar.component.html',
})
export class CourseNavbarComponent {

  @Input() topicName = '';

  constructor(private sharedService:SharedService) {}

  ngOnInit(){}

}
