import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  
  // Explicit
  title = 'app';

  // Main Function
  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    let data = {username: 'Nopita', password: 'nopi12345'}
    console.log('data ==> ' + data)
    
  } // ngOnInit


} // AppComponent








