import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInDirectivesComponent } from './build-in-directives.component';

describe('BuildInDirectivesComponent', () => {
  let component: BuildInDirectivesComponent;
  let fixture: ComponentFixture<BuildInDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildInDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
