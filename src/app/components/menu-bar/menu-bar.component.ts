import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  @Input()
  linkedin:string=""
  @Input()
  github:string=""
  @Input()
  youtube:string=""
  @Input()
  menuLogo:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
