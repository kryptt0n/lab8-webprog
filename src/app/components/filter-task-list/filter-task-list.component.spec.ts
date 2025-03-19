import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTaskListComponent } from './filter-task-list.component';

describe('FilterTaskListComponent', () => {
  let component: FilterTaskListComponent;
  let fixture: ComponentFixture<FilterTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTaskListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
