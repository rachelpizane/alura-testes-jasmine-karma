import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeWidgetComponent ],
      imports: [FontAwesomeModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta e aplica as mudanças no componente e no template.
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should auto generate id when id input property is missing', () => {
    expect(component.id).toBeTruthy();
  });

  it('should not auto generate id when id input property is present', () => {
    component.id = 'custom-id';
    fixture.detectChanges(); // Atualiza o template com as mudanças feitas no componente.
    expect(component.id).toBe('custom-id');
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should emit liked event`, () => {
    spyOn(component.liked, 'emit'); // Espiona o evento liked para verificar se ele foi chamado.
    component.like();
    expect(component.liked.emit).toHaveBeenCalled(); // Verifica se o evento liked foi emitido.
  });
});
