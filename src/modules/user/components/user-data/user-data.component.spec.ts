import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataComponent } from './user-data.component';
import { MatCardModule } from '@angular/material';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule ],
      declarations: [ UserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
