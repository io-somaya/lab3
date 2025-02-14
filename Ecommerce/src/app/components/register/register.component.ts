import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})



export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
        addresses: this.fb.array([]), // Initialize an empty form array for addresses
      },
      { validator: this.passwordMatchValidator }
    );

    // Add an initial address field
    this.addAddress();
  }

  // Getter for the addresses form array
  get addresses() {
    return this.registerForm.get('addresses') as FormArray;
  }

  // Getter for form controls
  get formControls() {
    return this.registerForm.controls;
  }

  // Method to create a new address form group
  createAddressGroup(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  // Method to add a new address to the form array
  addAddress() {
    this.addresses.push(this.createAddressGroup());
  }

  // Method to remove an address from the form array
  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: AbstractControl) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  // Handle form submission
  onRegisterSubmit() {
    if (this.registerForm.valid) {
      console.log('Register Data:', this.registerForm.value);
      // Add your registration logic here
      this.router.navigate(['/login']); // Navigate to login page
    }
  }
}