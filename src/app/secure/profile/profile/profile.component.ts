import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/profile.service';
import { BusinessProfile } from '../../model/profile';
import { ProfileUpdateResponse } from '../../model/profileUpdateResponse';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  errorMessage: string;
  infoMessage: string;
  userId: number = 1;
  company:string = "TestCompany2";
  profile: BusinessProfile = new BusinessProfile();
  profileUpdateResponse: ProfileUpdateResponse;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.profileForm = this.initializeProfileForm();
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile(this.userId,this.company).subscribe(profile => {
        this.profile = profile;
        this.populateBusinessProfileForm(this.profile);    
    });
  }

  populateBusinessProfileForm(profile: BusinessProfile) {
    this.profileForm.get('companyName').setValue(profile.companyName);
    this.profileForm.get('legalName').setValue(profile.legalName);
    this.profileForm.get('addressLine1').setValue(profile.businessAddress.line1);
    this.profileForm.get('addressLine2').setValue(profile.businessAddress.line2);
    this.profileForm.get('city').setValue(profile.businessAddress.city);
    this.profileForm.get('state').setValue(profile.businessAddress.state);
    this.profileForm.get('zip').setValue(profile.businessAddress.zip);
    this.profileForm.get('country').setValue(profile.businessAddress.country);
    this.profileForm.get('legalAddress').setValue(profile.legalAddress);
    this.profileForm.get('pan').setValue(profile.taxIdentifiers.pan);
    this.profileForm.get('ein').setValue(profile.taxIdentifiers.ein);
    this.profileForm.get('email').setValue(profile.email);
    this.profileForm.get('website').setValue(profile.webSite);

    this.profileForm.disable();

  }


  initializeProfileForm(): FormGroup {
    const profileForm: FormGroup = new FormGroup({
      companyName: new FormControl('', Validators.required),
      legalName: new FormControl('', Validators.required),
      addressLine1: new FormControl('', Validators.required),
      addressLine2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      legalAddress: new FormControl('', Validators.required),
      pan: new FormControl('', Validators.required),
      ein: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      website: new FormControl('')
    });
    return profileForm;
  }

  editButtonClicked() {
    this.profileForm.enable();
    this.profileForm.get('companyName').disable();
  }

  saveButtonClicked(){
    this.profile.legalName = this.profileForm.get('legalName').value;
    this.profile.businessAddress.line2 = this.profileForm.get('addressLine1').value;
    this.profile.businessAddress.line1 = this.profileForm.get('addressLine2').value;
    this.profile.businessAddress.city = this.profileForm.get('city').value;
    this.profile.businessAddress.state = this.profileForm.get('state').value;
    this.profile.businessAddress.zip = this.profileForm.get('zip').value;
    this.profile.businessAddress.country = this.profileForm.get('country').value;
    this.profile.legalAddress = this.profileForm.get('legalAddress').value;
    this.profile.taxIdentifiers.pan = this.profileForm.get('pan').value;
    this.profile.taxIdentifiers.ein = this.profileForm.get('ein').value;
    this.profile.email = this.profileForm.get('email').value;
    this.profile.webSite = this.profileForm.get('website').value;

    this.profileService.profileUpdate(this.userId, this.profile).subscribe(response => {
      this.profileUpdateResponse = response;
      this.infoMessage = "Your request for updating business profile reference {id} has been accepted. Please check after some time.";
      this.infoMessage = this.infoMessage.replace('{id}', this.profileUpdateResponse.requestId);
    })


  }

  get companyName() {
    return this.profileForm.get('companyName');
  }
  get legalName() {
    return this.profileForm.get('legalName');
  }
  get addressLine1() {
    return this.profileForm.get('addressLine1');
  }
  get addressLine2() {
    return this.profileForm.get('addressLine2');
  }
  get city() {
    return this.profileForm.get('city');
  }
  get state() {
    return this.profileForm.get('state');
  }
  get zip() {
    return this.profileForm.get('zip');
  }
  get country() {
    return this.profileForm.get('country');
  }
  get legalAddress() {
    return this.profileForm.get('legalAddress');
  }
  get pan() {
    return this.profileForm.get('pan');
  }
  get ein() {
    return this.profileForm.get('ein');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get website() {
    return this.profileForm.get('website');
  }


}
