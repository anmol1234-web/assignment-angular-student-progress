import { Injectable } from '@angular/core';
import { Assignment } from './assignment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StudentProgressService {
  assignmentsList: any = [];
  overall = {
    pointsScored: 0,
    pointsPossible: 0,
    percent: 0
  };

  constructor(private http: HttpClient) { }

  addAssignment(name: string, pointsScored: number, pointsPossible: number) {
    let assignment;
    assignment = new Assignment(name, pointsScored, pointsPossible);

    // this.assignmentsList.push(assignment);

    this.overall.pointsScored += pointsScored;
    this.overall.pointsPossible += pointsPossible;
    this.overall.percent = this.overall.pointsScored / this.overall.pointsPossible;

    // Make a POST call to our API
    // After the successful POST call, then call getAssignments
    return this.http.post('http://localhost:3000/assignments', assignment, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getAssignments() {
    // Return an observable that contains an array of Assignment objects
    return this.http.get('http://localhost:3000/assignments');
  }
}
