import { CourseNavbarComponent } from './../shared/course-navbar/course-navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-text-list',
  standalone: true,
  imports: [CourseNavbarComponent],
  templateUrl: './text-list.component.html',
})
export class TextListComponent {

  mediaList = [
    { id: 0, name: 'المقدمة', isActive: false },
    { id: 1, name: '1-2', isActive: false },
    { id: 1, name: '3-7', isActive: false },
    { id: 1, name: '8-12', isActive: true },
    { id: 1, name: '12-18', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
    { id: 1, name: '18-25', isActive: false },
  ];

}
