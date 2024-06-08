import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  // standalone: true,
  // imports: [MatButtonModule, MatDividerModule, MatIconModule],

})
export class BtnComponent implements OnInit {

  @Input() label = 'Default Label'

  constructor() { }

  ngOnInit(): void {
  }

}
