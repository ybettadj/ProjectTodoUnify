import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-modif-todo',
  templateUrl: './modif-todo.component.html',
  styleUrls: ['./modif-todo.component.scss']
})
export class ModifTodoComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  id: string;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
  }

  onSubmit(form: NgForm){
    const newTodo = {
      id: 0,
      intitule: '',
      deadline: '',
      etat: "à faire"
    };
    newTodo.intitule = form.value.intitule;
    newTodo.deadline = form.value.deadline;
    console.log(newTodo)
    console.log(this.id)
    this.httpClient.patch('https://http-client-docunify.firebaseio.com/listTodo/' + this.id + ".json", {'intitule': newTodo.intitule, 'deadline': newTodo.deadline})
    .subscribe(
      () => {
        console.log("Modification terminé !")
        this.router.navigate(['/todo']);
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
