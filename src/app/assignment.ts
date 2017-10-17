export class Assignment {
  public percent = this.points / this.points_possible;

  constructor(public name: string,
    public points: number,
    public points_possible: number) {}
}

// let assignment = new Assignment(name, pointsScored, pointsPossible);
// let assignment = { name: "Assignment 1", pointsScored: 2, pointsPossible: 3 };