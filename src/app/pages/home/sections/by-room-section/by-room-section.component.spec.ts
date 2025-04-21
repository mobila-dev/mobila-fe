import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRoomSectionComponent } from './by-room-section.component';

describe('ByRoomSectionComponent', () => {
  let component: ByRoomSectionComponent;
  let fixture: ComponentFixture<ByRoomSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByRoomSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByRoomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
