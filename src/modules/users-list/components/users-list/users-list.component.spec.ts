import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ApiService, PaginationApiService} from '../../../core/services';
import {HttpModule} from '@angular/http';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatTableModule, MatPaginatorModule, RouterModule.forRoot([]), HttpModule ],
      declarations: [ UsersListComponent ],
      providers: [ ApiService, PaginationApiService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
