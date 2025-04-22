import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {
  private numberOfGeneratetedIds = 0;
  private regexValidId = /^[A-Za-z]+[\w\-\:\.]*$/;

  constructor() { }

  generateUniqueIdWithPrefix(prefix: string): string {
    if(!prefix || !this.regexValidId.test(prefix)) {
      throw new Error('Prefix é obrigatório');
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratetedIds++;

    return `${prefix}-${this.numberOfGeneratetedIds}`;
  }

  getNumberOfGeneratedIds(): number {
    return this.numberOfGeneratetedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
