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
  // email = new FormControl('', [Validators.required, Validators.email]);


  ngOnInit() {
   this.onloginForm()
  }

  onloginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.pattern('[0-9]*')]),
    });

  }


  submit(e:any){
    
    console.log(this.loginForm.value, "value",e);
    
  }
}
