import {Component, OnInit} from '@angular/core';
import {NewApplicant} from "../models/applicant.model";
import {ApplicantService} from "../services/applicant.service";

@Component({
  selector: 'app-app-user-reg',
  templateUrl: './app-user-reg.component.html',
  styleUrls: ['./app-user-reg.component.scss']
})
export class AppUserRegComponent implements OnInit {
  ngOnInit(): void {
  }

  newApplicant = new NewApplicant();

  constructor(private applicantService: ApplicantService) {
  }

  saveApplicant() {
    this.applicantService.saveApplicant(this.newApplicant).subscribe(
      {
        next: (data: any) => {
          console.log(data);
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('Completed');
        }
      });
  }

  cancelForm() {
    // Reset the form on cancel
    this.resetForm();
  }

  private resetForm() {
    // Reset the newApplicant object and form
    this.newApplicant = new NewApplicant();
  }

}
