import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  @Input() cardTitle: string = 'My card'
  @Input() cardDesc: string = 'sit amet consectetur adipisicing elit. Ullam corporis totam consequuntur sapiente vero impedit dicta ipsum, omnis in, assumenda ab maiores natus reprehenderit voluptate ea. Sed modi quos expedita?'

  constructor() { }

  ngOnInit(): void {
  }

}
