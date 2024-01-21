import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSignInComponent } from './post-sign-in.component';

describe('PostSignInComponent', () => {
  let component: PostSignInComponent;
  let fixture: ComponentFixture<PostSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
