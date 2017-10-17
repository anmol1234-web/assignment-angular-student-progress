import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentProgressService } from './student-progress.service';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GradePipe } from './grade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GradePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
