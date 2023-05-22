import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  public submitted = false;


  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute
    ) { }


  @Input() error: string | null | undefined;

  @Output() sendDataEvent = new EventEmitter();

  submit() {
    //if (this.form.valid) {
    this.sendDataEvent.emit(this.form.value);
    this._router.navigate(['homeLog'], {relativeTo:this._activatedRoute});

    //}
  }



  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLogin(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;

  }

  ngOnInit(): void {
  }

  navigateToLogin() {
    this._router.navigate(['login'], {relativeTo:this._activatedRoute});
  }

}
