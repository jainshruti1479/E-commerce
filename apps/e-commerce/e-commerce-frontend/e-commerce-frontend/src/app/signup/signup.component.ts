import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EcommerceService } from '../services/ecommerce.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'e-commerce-signup',
  standalone: true,
  providers:[EcommerceService],
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private ecom:EcommerceService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted:', this.signupForm.value);
    }
    let data = {
      username:this.signupForm.value.username,
      email:this.signupForm.value.email,
      password:this.signupForm.value.password,
    }
    this.ecom.signup(data).subscribe(res =>{
      console.log(res)
    })
  }
}
