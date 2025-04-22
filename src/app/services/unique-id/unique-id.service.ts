import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {
  private numberOfGeneratetedIds = 0;

  constructor() { }

  generateUniqueIdWithPrefix(prefix: string): string {
    if(!prefix) {
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
