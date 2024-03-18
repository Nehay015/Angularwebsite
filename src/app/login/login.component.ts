import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,RouterLink,MatFormFieldModule,MatIconModule, MatInputModule,FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   hide = true;
   email = new FormControl('', [Validators.required, Validators.email]);
  password: any;

   getErrorMessage() {
     if (this.email.hasError('required')) {
       return 'You must enter a value';
     }
     return this.email.hasError('email') ? 'Not a valid email' : '';
    }
}
