import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Applicant} from "../models/applicant.model";

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private apiUrl = 'http://localhost:5255/api';

  constructor(private http: HttpClient) {}

  getApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(`${this.apiUrl}/applicants`);
  }

  saveApplicant(applicant: Applicant): Observable<Applicant> {
    console.log(applicant);
    return this.http.post<Applicant>(`${this.apiUrl}/applicants`, applicant);
  }

  updateApplicant(applicant: Applicant): Observable<Applicant> {
    return this.http.put<Applicant>(`${this.apiUrl}/applicants/${applicant.appId}`, applicant);
  }

  deleteApplicant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/applicants/${id}`);
  }
}
