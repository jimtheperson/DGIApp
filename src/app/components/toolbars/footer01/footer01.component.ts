import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-footer01',
  templateUrl: './footer01.component.html',
  styleUrls: ['./footer01.component.scss']
})
export class Footer01Component implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  backClicked(){
    this._location.back();
  }
}
