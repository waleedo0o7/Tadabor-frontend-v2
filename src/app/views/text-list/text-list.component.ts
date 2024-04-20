import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../core/services/shared.service';
import { CourseNavbarComponent } from './../shared/course-navbar/course-navbar.component';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { TextLesson } from '../../core/models/text-lesson.model';
import { SafeHtmlPipe } from '../../core/safe-html.pipe';

@Component({
  selector: 'app-text-list',
  standalone: true,
  imports: [CourseNavbarComponent, SafeHtmlPipe],
  templateUrl: './text-list.component.html',
})

export class TextListComponent {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private route: ActivatedRoute, private sharedService: SharedService) {
    this.coursesId = this.route.snapshot.paramMap.get('cid');
    this.topicId = this.route.snapshot.paramMap.get('tid');
  }

  textList!: TextLesson[];
  textDetails!: TextLesson;

  coursesId: any;
  topicId: any;
  topicName: any;


  getTopicName() {
    this.http.get<any>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}`).subscribe(e => { this.topicName = e.name });
  }

  getTextLessonsList(): Observable<TextLesson[]> {
    return this.http.get<TextLesson[]>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}/lessons/text`
    );
  }

  getTextLessonDetails(id: Number) {
    this.http.get<TextLesson>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}/lessons/text/${id}`
    ).subscribe((data: any) => {
      this.textDetails = data.descriptionAr;
    });
  }



  ngOnInit() {

    this.getTopicName();
    console.log('cid', this.coursesId);
    console.log('tid', this.topicId);

    this.getTextLessonsList().subscribe((data: any) => {

      this.textList = data.data;

      this.getTextLessonDetails(this.textList[0].id);

    });



  }

}
