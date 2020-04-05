import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHolderComponent } from './page-holder.component';

describe('PageHolderComponent', () => {
  let component: PageHolderComponent;
  let fixture: ComponentFixture<PageHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
