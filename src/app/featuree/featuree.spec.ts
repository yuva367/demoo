import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featuree } from './featuree';

describe('Featuree', () => {
  let component: Featuree;
  let fixture: ComponentFixture<Featuree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featuree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featuree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
