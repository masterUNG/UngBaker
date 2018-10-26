import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  // Explicit
  private nameAppString: string;
  private mainTitleString: string;

  constructor() { }

  ngOnInit() {

    this.nameAppString = "Ung Baker";
    this.mainTitleString = "Main Page";

  } // ngOnInit

} // Navigator Class
