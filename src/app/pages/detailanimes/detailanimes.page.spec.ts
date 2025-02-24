import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailanimesPage } from './detailanimes.page';

describe('DetailanimesPage', () => {
  let component: DetailanimesPage;
  let fixture: ComponentFixture<DetailanimesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailanimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
