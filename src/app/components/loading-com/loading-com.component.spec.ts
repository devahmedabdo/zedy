import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComComponent } from './loading-com.component';

describe('LoadingComComponent', () => {
  let component: LoadingComComponent;
  let fixture: ComponentFixture<LoadingComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
