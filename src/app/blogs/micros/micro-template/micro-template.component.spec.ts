import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroTemplateComponent } from './micro-template.component';

describe('MicroTemplateComponent', () => {
  let component: MicroTemplateComponent;
  let fixture: ComponentFixture<MicroTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
