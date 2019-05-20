import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private httpClient: HttpClient, private appComponent: AppComponent) { }

  ngOnInit() {

  }

  postTodoOnServer(todo: {id: number; intitule: string; deadline: string; etat: string;}){
    this.httpClient.post('https://http-client-docunify.firebaseio.com/listTodo.json', todo)
    .subscribe(
        () => {
        location.reload();
      },
        (error) => {
          console.log(error);
        }
      );
  }

  onSubmit(form: NgForm)
  {
    const todo = {
      id: 0,
      intitule: '',
      deadline: '',
      etat: "à faire"
    };
    todo.intitule = form.value.intitule;
    todo.deadline = form.value.deadline;
    this.postTodoOnServer(todo);
  }
}
