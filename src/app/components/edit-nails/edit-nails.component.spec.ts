import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNailsComponent } from './edit-nails.component';

describe('EditNailsComponent', () => {
  let component: EditNailsComponent;
  let fixture: ComponentFixture<EditNailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
