// app.interface.ts
export interface Applicant {
  appId: number;
  appNo: string;
  appDate: string;
  appName: string;
  appPosition: string;
  appDob: string;
  appAge: number;
  appGender: string;
  appMobile: string;
  appEmail: string;
  appReason: string;
  appNoYears: number;
  appCurrentEmployer: string;
  appNp: number;
}

export class NewApplicant {
  appId: number;
  appNo: string;
  appDate: string;
  appName: string;
  appPosition: string;
  appDob: string;
  appAge: number;
  appGender: string;
  appMobile: string;
  appEmail: string;
  appReason: string;
  appNoYears: number;
  appCurrentEmployer: string;
  appNp: number;

  constructor() {
    this.appId = 0;
    this.appNo = '';
    this.appDate = '';
    this.appName = '';
    this.appPosition = '';
    this.appDob = '';
    this.appAge = 0;
    this.appGender = '';
    this.appMobile = '';
    this.appEmail = '';
    this.appReason = '';
    this.appNoYears = 0;
    this.appCurrentEmployer = '';
    this.appNp = 0;
  }
}
