import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TestPageComponent } from './student/test-page/test-page.component';
import { ResultComponent } from './student/result/result.component';
import { AddChaptersComponent } from './teacher/add-chapters/add-chapters.component';
import { ManageStudentsComponent } from './teacher/manage-students/manage-students.component';
import { ManageQuestionsComponent } from './teacher/manage-questions/manage-questions.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: SignupComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'teacher_dashboard', component: TeacherDashboardComponent, pathMatch: 'full' },
  { path: 'student_dashboard', component: StudentDashboardComponent, pathMatch: 'full' },
  { path: 'test_page', component: TestPageComponent, pathMatch: 'full' },
  { path: 'result', component: ResultComponent, pathMatch: 'full' },
  { path: 'add_chapter', component: AddChaptersComponent, pathMatch: 'full' },
  { path: 'students', component: ManageStudentsComponent, pathMatch: 'full' },
  { path: 'questions', component: ManageQuestionsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, StudentDashboardComponent, TeacherDashboardComponent]
