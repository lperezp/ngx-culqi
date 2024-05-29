import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCulqiComponent } from './ng-culqi.component';

describe('NgCulqiComponent', () => {
  let component: NgCulqiComponent;
  let fixture: ComponentFixture<NgCulqiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCulqiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgCulqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
