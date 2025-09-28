import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroTemplateComponent } from './macro-template.component';

describe('MacroTemplateComponent', () => {
  let component: MacroTemplateComponent;
  let fixture: ComponentFixture<MacroTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacroTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacroTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
