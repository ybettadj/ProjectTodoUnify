import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  constructor(private httpClient: HttpClient, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  @Input() etat: string;
  @Input() deadline: string;
  @Input() intitule: string;
  @Input() id: string;

  fait(){
    this.httpClient.patch('https://http-client-docunify.firebaseio.com/listTodo/' +this.id + '.json', {'etat': 'fait'}).subscribe(
      () => {
      console.log("modification terminé")
      location.reload();
    },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(){
    this.httpClient.delete('https://http-client-docunify.firebaseio.com/listTodo/' +this.id + '.json').subscribe(
      () => {
      console.log("Suppression terminé")
      location.reload();
    },
      (error) => {
        console.log(error);
      }
    );
  }

  afaire(){
      this.httpClient.patch('https://http-client-docunify.firebaseio.com/listTodo/' +this.id + '.json', {'etat': 'à faire'}).subscribe(
        () => {
        console.log("modification terminé")
        location.reload();
      },
        (error) => {
          console.log(error);
        }
      );
  }

}
