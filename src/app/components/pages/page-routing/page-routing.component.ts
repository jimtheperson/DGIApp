import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-routing',
  templateUrl: './page-routing.component.html',
  styleUrls: ['./page-routing.component.scss']
})

export class PageRoutingComponent implements OnInit {

  navLinks = [
    {location:'page-routing-presets',label:'Presets',icon:'bookmarks'},
    { location: 'page-routing-inputs', label: 'Inputs', icon: 'input' },
    { location: 'page-routing-outputs', label: 'Outputs', icon: 'output' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
