import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav01',
  templateUrl: './sidenav01.component.html',
  styleUrls: ['./sidenav01.component.scss']
})
export class Sidenav01Component implements OnInit {
  isExpandedSideNav: Boolean;

  constructor() { }

  ngOnInit(): void {
    this.isExpandedSideNav = false;
  }

  sideNavExpand(){
    this.isExpandedSideNav = !this.isExpandedSideNav;
  }

}
