import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  
})
export class BtnComponent implements OnInit {

  @Input() label!: string

  constructor() { }

  ngOnInit(): void {
  }

}
