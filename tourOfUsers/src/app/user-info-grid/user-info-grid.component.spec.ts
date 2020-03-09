import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoGridComponent } from './user-info-grid.component';

describe('UserInfoGridComponent', () => {
  let component: UserInfoGridComponent;
  let fixture: ComponentFixture<UserInfoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
