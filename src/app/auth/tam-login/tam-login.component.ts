import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tam-login',
  templateUrl: './tam-login.component.html',
  styleUrls: ['./tam-login.component.scss']
})
export class TamLoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,) { }
  email = new FormControl('', [Validators.required, Validators.email]);


  ngOnInit() {
   this.onloginForm()
  }

  onloginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

  }

}
