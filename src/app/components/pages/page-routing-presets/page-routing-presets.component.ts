import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-routing-presets',
  templateUrl: './page-routing-presets.component.html',
  styleUrls: ['./page-routing-presets.component.scss']
})
export class PageRoutingPresetsComponent implements OnInit {

  presets = [
    {label: 'Preset Label', isScheduled: true,
      entity: [
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' }
    ]},
    {label: 'Preset Label', isScheduled: false,
    entity: [
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' }
    ]},
    {label: 'Preset Label', isScheduled: true,
    entity: [
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' }
    ]},
    {label: 'Preset Label', isScheduled: true,
    entity: [
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' }
    ]},
    {label: 'Preset Label', isScheduled: false,
    entity: [
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' }
    ]},
  ];

  searchValue = '';

  constructor() { }

  ngOnInit(): void {
  }

}
