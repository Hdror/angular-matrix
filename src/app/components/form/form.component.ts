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

  name = new FormControl('', [Validators.required])
  errorMessage = '';

  constructor() {
    merge(this.name.statusChanges, this.name.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }


  updateErrorMessage() {
    if (this.name.hasError('required')) {
      this.errorMessage = 'You must enter a name';
    } else {
      this.errorMessage = '';
    }
  }



  onSubmitForm() {
    console.log(this.name);
  }

}
