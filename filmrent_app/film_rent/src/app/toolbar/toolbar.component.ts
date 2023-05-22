import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  logDisabled: boolean= true;

  ngOnInit(): void{

 }

  constructor(private _router: Router, private _activatedRoute:ActivatedRoute) { }

  navigateToLogin() {
    this._router.navigate(['login'])
  }

  open(value:boolean){
    this.logDisabled=value;
  }

  enableButton() {
    this.logDisabled = false;
  }



}
