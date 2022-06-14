import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header01',
  templateUrl: './header01.component.html',
  styleUrls: ['./header01.component.scss']
})
export class Header01Component implements OnInit {

  roomName = 'Room Name';

  statusNotifications = [
    {icon: 'mic_off',color: 'warn',message: 'Microphone Muted'},
    {icon: 'volume_off',color: 'warn',message: 'Volume Muted'},
    {icon: 'videocam_off',color: 'warn',message: 'Videocamera Off'},
    {icon: 'cloud_off',color: 'warn',message: 'Disconnected'},
    {icon: 'timer_off',color: 'warn',message: 'Scheduled Event'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}