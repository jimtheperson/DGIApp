import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-routing-presets',
  templateUrl: './page-routing-presets.component.html',
  styleUrls: ['./page-routing-presets.component.scss']
})
export class PageRoutingPresetsComponent implements OnInit {
  
  filterList: boolean;
  sortList: boolean;
  entityListExpanded: boolean[]=[false,false,false,false,false];

  presets = [
    {label: 'Preset Label', isScheduled: true, isExpanded: false,
      entity: [

    ]},
    {label: 'Preset Label', isScheduled: false, isExpanded: false,
    entity: [
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' }
    ]},
    {label: 'Preset Label', isScheduled: true, isExpanded: false,
    entity: [
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' }
    ]},
    {label: 'Preset Label', isScheduled: true, isExpanded: false,
    entity: [
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' },
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' }
    ]},
    {label: 'Preset Label', isScheduled: false, isExpanded: false,
    entity: [
      { label: 'Entity Label', icon: 'tv', value: 'Entity Value' }
    ]}
  ];

  searchValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(){
    this.filterList = !this.filterList;
  }
  toggleSort(){
    this.sortList = !this.sortList;
  }
  entityListToggle(index: number){
    this.presets[index].isExpanded = !this.presets[index].isExpanded;
  }
}
