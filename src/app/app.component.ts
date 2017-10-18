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
  assignmentsList: any = [];
  overall;

  constructor(private studentProgressService: StudentProgressService) {
    this.overall = this.studentProgressService.overall;
    this.refreshAssignmentList();
  }

  refreshAssignmentList() {
    this.studentProgressService.getAssignments().subscribe(
      data => this.assignmentsList = data
    );
  }

  addAssignment() {
    console.log('addAssignment');
    this.studentProgressService.addAssignment(
      this.iName,
      this.iScoredPoints,
      this.iPossiblePoints).subscribe(
        data => {
          this.refreshAssignmentList();
        }
      );
  }
}
