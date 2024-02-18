import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlgenComponent } from './yamlgen.component';

describe('YamlgenComponent', () => {
  let component: YamlgenComponent;
  let fixture: ComponentFixture<YamlgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YamlgenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YamlgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
