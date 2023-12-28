import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserRegComponent } from './app-user-reg.component';

describe('AppUserRegComponent', () => {
  let component: AppUserRegComponent;
  let fixture: ComponentFixture<AppUserRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
