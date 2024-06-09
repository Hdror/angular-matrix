import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-form', 
  templateUrl: './form.component.html', 
  styleUrl: './form.component.scss' 
})

export class FormComponent {
  // Define a FormControl for the name field with a required validator
  name = new FormControl('', [Validators.required]);

  errorMessage = '';

  constructor() {
    // Combine the statusChanges and valueChanges observables of the name FormControl
    merge(this.name.statusChanges, this.name.valueChanges)
      .pipe(takeUntilDestroyed()) // Automatically unsubscribe when the component is destroyed
      .subscribe(() => this.updateErrorMessage()); // Update the error message whenever the control's status or value changes
  }

  // Method to update the error message based on the validation state of the name control
  updateErrorMessage() {
    if (this.name.hasError('required')) {
      // Set the error message if the name control is invalid due to being required
      this.errorMessage = 'You must enter a name';
    } else {
      // Clear the error message if there are no validation errors
      this.errorMessage = '';
    }
  }

  onSubmitForm() {
    console.log(this.name);
  }
}
