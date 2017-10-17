import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

 transform(value: number, args?: any): string {
    // 90-100 A
    // 80-89 B
    // 70-79 C
    // 60-69 D
    // < 60 F
    if (value >= .90){
      return 'A';
    }else if (value >= .80){
      return 'B';
    }else if (value >= .70) {
      return 'C';
    }else if (value >= .60){
      return 'D';
    }else {
      return 'F';
    }
  }  
}