import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  data = false;
  UserForm: any;
  massage: string;
  constructor(private formbulider: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.UserForm = this.formbulider.group({

      LoginName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],

    });
  }
  onFormSubmit() {
    const user = this.UserForm.value;
    this.Createemployee(user);
  }
  Createemployee(register: Register) {
    this.loginService.CreateUser(register).subscribe(
      () => {
        this.data = true;
        this.massage = 'Data saved Successfully';
        this.UserForm.reset();
      });
  }
}
