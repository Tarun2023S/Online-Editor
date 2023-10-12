import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OEditorComponent } from './o-editor.component';

describe('OEditorComponent', () => {
  let component: OEditorComponent;
  let fixture: ComponentFixture<OEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OEditorComponent]
    });
    fixture = TestBed.createComponent(OEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
