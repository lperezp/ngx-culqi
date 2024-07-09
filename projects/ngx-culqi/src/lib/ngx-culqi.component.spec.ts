import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCulqiComponent } from './ngx-culqi.component';

describe('NgxCulqiComponent', () => {
  let component: NgxCulqiComponent;
  let fixture: ComponentFixture<NgxCulqiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCulqiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxCulqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
