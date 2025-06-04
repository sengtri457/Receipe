import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItems } from './recipe-items';

describe('RecipeItems', () => {
  let component: RecipeItems;
  let fixture: ComponentFixture<RecipeItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
