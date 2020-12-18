import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNiruchartnewComponent } from './ng-niruchartnew.component';

describe('NgNiruchartnewComponent', () => {
  let component: NgNiruchartnewComponent;
  let fixture: ComponentFixture<NgNiruchartnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNiruchartnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNiruchartnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
