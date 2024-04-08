import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CourseListComponent } from './views/course-list/course-list.component';
import { CourseItemComponent } from './views/course-item/course-item.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { MediaListComponent } from './views/media-list/media-list.component';
import { TextListComponent } from './views/text-list/text-list.component';
import { TopicsListComponent } from './views/topics-list/topics-list.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'courses-list/:cid/topics-list', component: TopicsListComponent } ,

  { path: 'courses-list/:cid/topics-list/:tid/media-list', component: MediaListComponent },

  { path: 'text-list', component: TextListComponent },
  { path: 'course-item', component: CourseItemComponent },
  { path: '**', component: PageNotFoundComponent },
];
