import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemiPage } from './semi.page';

describe('SemiPage', () => {
  let component: SemiPage;
  let fixture: ComponentFixture<SemiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
