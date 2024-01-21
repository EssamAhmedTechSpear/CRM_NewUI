import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSignoutComponent } from './post-signout.component';

describe('PostSignoutComponent', () => {
  let component: PostSignoutComponent;
  let fixture: ComponentFixture<PostSignoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSignoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
