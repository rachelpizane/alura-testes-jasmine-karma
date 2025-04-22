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

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate ids when called multiple times`, () => {
    const ids: Set<string> = new Set<string>();

    for (let i = 0; i < 50; i++) {
      const id = service.generateUniqueIdWithPrefix('app');

      ids.add(id);
    }

    expect(ids.size).toBe(50); // Espero que o tamanho do conjunto seja 50, ou seja, não houve duplicatas
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should return the number of generated Ids when called`, () => {
    for (let i = 0; i < 2; i++) {
      service.generateUniqueIdWithPrefix('app')
    }
    const numberOfGeneratedIds = service.getNumberOfGeneratedIds();

    expect(numberOfGeneratedIds).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw error when called without prefix`, () => {
      const emptyValues = [null, undefined, '', '0', '1'];

      emptyValues.forEach((value) => {
        expect(() => service.generateUniqueIdWithPrefix(value)).withContext(`Empty Value: ${value}`).toThrowError('Prefix é obrigatório');
      });
  });
});
