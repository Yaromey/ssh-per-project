import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUrlComponent } from './test-url.component';

describe('TestUrlComponent', () => {
  let component: TestUrlComponent;
  let fixture: ComponentFixture<TestUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUrlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
