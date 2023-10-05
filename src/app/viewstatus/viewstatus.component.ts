import { Component, OnInit } from '@angular/core';
import { REQUEST_TABLE_SETTINGS } from './settings';
import { ProfileService } from '../profile.service';
import { ProfileUpdateRequest } from '../secure/model/profileUpdateRequest';


@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent implements OnInit {

  settings: any;
  userId: number = 1;
  requests : ProfileUpdateRequest[] = [];

  constructor(private profileService: ProfileService) {
   }

  ngOnInit() {
    this.settings = REQUEST_TABLE_SETTINGS;
    this.getAllRequests();
  }

  getAllRequests() {
      this.profileService.getAllRequests(this.userId).subscribe(data => {
        this.requests = data;
      });
  }

}
