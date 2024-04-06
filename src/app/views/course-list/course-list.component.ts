import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  ActivatedRoute,
} from '@angular/router';
import { CourseNavbarComponent } from '../shared/course-navbar/course-navbar.component';

import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Topic } from '../../core/models/topic.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CourseNavbarComponent,
    HttpClientModule,
  ],
  templateUrl: './course-list.component.html',
})
export class CourseListComponent {


  constructor() {

  }


  ngOnInit() {
  }
}
