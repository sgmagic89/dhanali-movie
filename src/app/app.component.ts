import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  moviesData: any;
  constructor(private readonly http: HttpClient) {
    this.http.get('https://moviesdatabase.p.rapidapi.com/titles',{
      headers: {
        'X-RapidAPI-Key': 'a15caf3089msh88df891be81190dp1fb840jsn37e7faa2d340',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    }).subscribe((movies: any) => {
      this.moviesData = movies.results;
      console.log(movies);
    })
  }
}
