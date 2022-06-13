import { Component, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-sidenav01',
  templateUrl: './sidenav01.component.html',
  styleUrls: ['./sidenav01.component.scss']
})
export class Sidenav01Component implements OnInit {
  isExpandedSideNav: Boolean;

  navLinks = [
    {location:'page-routing',label:'A/V Routing',icon:'route'},
    { location: 'page-camera-controls', label: 'Camera Controls', icon: 'videocam' },
    { location: 'page-phone', label: 'Phone', icon: 'phone' },
    { location: 'page-input-controls', label: 'Input Controls', icon: 'remote_gen' },
    { location: 'page-shade-controls', label: 'Shade Controls', icon: 'roller_shades' },
    { location: 'page-light-controls', label: 'Lights', icon: 'lightbulb' },

  ];

  constructor() { }

  ngOnInit(): void {
    this.isExpandedSideNav = false;
  }

  sideNavExpand(){
    this.isExpandedSideNav = !this.isExpandedSideNav;
  }

  routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    fragment: 'ignored',
    paths: 'subset'
  };

}
