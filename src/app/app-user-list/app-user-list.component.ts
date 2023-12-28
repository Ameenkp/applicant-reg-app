import {Component, OnInit} from '@angular/core';
import {ApplicantService} from "../services/applicant.service";
import {Applicant} from "../models/applicant.model";

@Component({
  selector: 'app-app-user-list',
  templateUrl: './app-user-list.component.html',
  styleUrls: ['./app-user-list.component.scss']
})
export class AppUserListComponent implements OnInit {

  public applicants: Applicant[] = [];

  searchQuery: string = '';

  get filteredApplicants() {
    return this.applicants
      .filter(applicant => applicant.appName.toLowerCase().includes(this.searchQuery.toLowerCase()))
      .sort((a, b) => new Date(b.appDate).getTime() - new Date(a.appDate).getTime());
  }

  ngOnInit(): void {
    this.applicantService.getApplicants().subscribe(
      {
        next: (data: Applicant[]) => {
          console.log(data);
          this.applicants = data;
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('Completed');
        }
      });
  }

  constructor(private applicantService: ApplicantService) {
  }

}
