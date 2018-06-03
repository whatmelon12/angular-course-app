import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFollowerComponent } from './media-follower.component';

describe('MediaFollowerComponent', () => {
  let component: MediaFollowerComponent;
  let fixture: ComponentFixture<MediaFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
