import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
