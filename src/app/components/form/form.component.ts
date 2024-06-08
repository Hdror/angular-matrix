import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {

  onSubmitForm(form: NgForm) {
    console.log(form);

  }

}
