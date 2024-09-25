import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReccommendationsComponent } from './reccommendations.component';

describe('ReccommendationsComponent', () => {
  let component: ReccommendationsComponent;
  let fixture: ComponentFixture<ReccommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReccommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReccommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
