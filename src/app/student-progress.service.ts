import { Injectable } from '@angular/core';
import { Assignment } from './assignment';

@Injectable()
export class StudentProgressService {
  assignmentsList = [];
  overall = {
    pointsScored: 0,
    pointsPossible: 0,
    percent: 0
  };

  constructor() { }

  addAssignment(name: string, pointsScored: number, pointsPossible: number) {
    let assignment;
    assignment = new Assignment(name, pointsScored, pointsPossible);

    this.assignmentsList.push(assignment);

    this.overall.pointsScored += pointsScored;
    this.overall.pointsPossible += pointsPossible;
    this.overall.percent = this.overall.pointsScored / this.overall.pointsPossible;

    return this.assignmentsList;
  }

}
