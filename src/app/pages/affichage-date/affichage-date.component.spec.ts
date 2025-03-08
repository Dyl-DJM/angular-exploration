import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageDateComponent } from './affichage-date.component';

describe('AffichageDateComponent', () => {
  let component: AffichageDateComponent;
  let fixture: ComponentFixture<AffichageDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
