import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButtonUnderlineComponent } from './link-button-underline.component';

describe('LinkButtonUnderlineComponent', () => {
  let component: LinkButtonUnderlineComponent;
  let fixture: ComponentFixture<LinkButtonUnderlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkButtonUnderlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkButtonUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
