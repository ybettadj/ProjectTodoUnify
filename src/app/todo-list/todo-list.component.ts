import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private httpClient: HttpClient){
  }
  todos: any[];
  todosAFaire = [];
  todosFait = [];
  todosRate = [];

  ngOnInit(){
    this.getTodoFromServer()
  }

  str: string;
  getTodoFromServer(){
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get<any[]>('https://http-client-docunify.firebaseio.com/listTodo.json')
      .toPromise()
      .then(
        res => {
          this.todos = res
          console.log(res)
        }
      )
      .then(
        res => {
          let i = 0;
          for (let todo in this.todos)
          {
            if (this.todos[todo].etat == "à faire"){
              this.todos[todo].id = todo;
              this.todosAFaire.push(this.todos[todo]);
            } else if (this.todos[todo].etat == "fait"){
              this.todos[todo].id = todo;
              this.todosFait.push(this.todos[todo]);
              console.log(this.todosFait)
            }else if (this.todos[todo].etat == "rate"){
              this.todos[todo].id = todo;
              this.todosRate.push(this.todos[todo]);
            }
            i++;
          }
        }
      ).then(
        res => {
          this.todosAFaire.reverse()
          this.todosFait.reverse()
          this.todosRate.reverse()
        }
      )
    })
  }
}
