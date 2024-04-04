import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CourseListComponent } from './views/course-list/course-list.component';
import { CourseItemComponent } from './views/course-item/course-item.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'course-item', component: CourseItemComponent },
  { path: '**', component: PageNotFoundComponent },
];
