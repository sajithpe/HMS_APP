import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/'
  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
   
  }

  login(formData:NgForm) {
    return this.http.post(this.baseUrl + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.baseUrl + '/UserProfile');
  }



}
