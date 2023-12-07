import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellFeatureComponent } from './shell-feature.component';

describe('ShellFeatureComponent', () => {
  let component: ShellFeatureComponent;
  let fixture: ComponentFixture<ShellFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
