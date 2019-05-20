import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-list/todo-form/todo-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModifTodoComponent } from './modif-todo/modif-todo.component';
import { ViewListComponent } from './todo-list/view-list/view-list.component';

const appRoute: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'todo', component: TodoListComponent},
  {path: 'modif/:id', component: ModifTodoComponent},
  {path: '', component: TodoListComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TodoListComponent,
    TodoFormComponent,
    HeaderComponent,
    ModifTodoComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    AuthGuardService,
    AuthService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
