import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  // Explicit
  private nameAppString: string;

  constructor() { }

  ngOnInit() {

    this.nameAppString = "Ung Baker";

  } // ngOnInit

} // Navigator Class
