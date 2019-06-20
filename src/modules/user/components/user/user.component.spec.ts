import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserDataComponent} from '../user-data/user-data.component';
import {MatCardModule} from '@angular/material';
import {ApiService, PaginationApiService} from '../../../core/services';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, HttpModule, RouterModule.forRoot([])],
      declarations: [ UserComponent, UserDataComponent ],
      providers: [ ApiService, PaginationApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
