import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrarClienteComponent } from './listrar-cliente.component';

describe('ListrarClienteComponent', () => {
  let component: ListrarClienteComponent;
  let fixture: ComponentFixture<ListrarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
