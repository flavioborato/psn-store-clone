import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  linkedin:string=""
  @Input()
  github:string=""
  @Input()
  youtube:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
