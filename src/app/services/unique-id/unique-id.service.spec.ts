import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix `, () => {
    const id = service.generateUniqueIdWithPrefix('app');

    //expect(id).toContain('app-'); // Muito amplo, aceitaria algo como: "blablabla-app-1"
    // expect(id).toMatch(/^app-\d+/); // Utilizando regex
    expect(id.startsWith('app-')).toBeTrue(); // Verifica se começa com 'app-'
  });
});
