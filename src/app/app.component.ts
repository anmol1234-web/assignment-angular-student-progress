import { Component } from '@angular/core';
import { StudentProgressService } from './student-progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  studentName = 'Bob Smith';
  studentEmail = 'Bob@bobstech.com';
  iName;
  iScoredPoints;
  iPossiblePoints;
  assignmentsList = [];
  overall;

  constructor(private studentProgressService: StudentProgressService) {
    this.overall = this.studentProgressService.overall;
  }

  addAssignment() {
    console.log('addAssignment');
    this.assignmentsList = this.studentProgressService.addAssignment(
      this.iName,
      this.iScoredPoints,
      this.iPossiblePoints);
  }
}
