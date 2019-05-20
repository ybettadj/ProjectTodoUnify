import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  constructor(private httpClient: HttpClient, private appComponent: AppComponent, private router: Router) { }

  ngOnInit() {
  }

  @Input() etat: string;
  @Input() deadline: string;
  @Input() intitule: string;
  @Input() id: string;

  fait(){
    this.httpClient.patch('https://http-client-docunify.firebaseio.com/listTodo/' +this.id + '.json', {'etat': 'fait'})
    .subscribe(
      () => {
      location.reload();
    },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(){
    this.httpClient.delete('https://http-client-docunify.firebaseio.com/listTodo/' +this.id + '.json')
    .subscribe(
      () => {
      location.reload();
    },
      (error) => {
        console.log(error);
      }
    );
  }

  afaire(){
      this.httpClient.patch('https://http-client-docunify.firebaseio.com/listTodo/' +this.id + '.json', {'etat': 'à faire'})
      .subscribe(
        () => {
        location.reload();
      },
        (error) => {
          console.log(error);
        }
      );
  }

  redirectModif(id: string){
    this.router.navigate(['modif/' + id]);
  }

}
