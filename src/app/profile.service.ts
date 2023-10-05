import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessProfile } from './secure/model/profile';
import { ProfileUpdateResponse } from './secure/model/profileUpdateResponse';
import { ProfileUpdateRequest } from './secure/model/profileUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getProfile(userId: number, companyName: string): Observable<BusinessProfile> {
    let url: string;
    url = this.baseUrl + "/businessProfile/user/{userId}/company/{companyName}";
    url = url.replace("{userId}", userId.toString());
    url = url.replace("{companyName}", companyName.toString());
    return this.http.get<BusinessProfile>(url);
  }

  getAllRequests(userId: number): Observable<ProfileUpdateRequest[]> {
    let url: string;
    url = this.baseUrl + "/businessProfile/getAllRequestStatus/user/{userId}";
    url = url.replace("{userId}", userId.toString());
    return this.http.get<ProfileUpdateRequest[]>(url);
  }

  profileUpdate(userId: number, businessProfile: BusinessProfile): Observable<ProfileUpdateResponse> {
    let url: string;
    url = this.baseUrl + "/businessProfile/acceptRequest/user/{userId}";
    url = url.replace("{userId}", userId.toString());

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<ProfileUpdateResponse>(url, businessProfile, httpOptions);
  }
}
