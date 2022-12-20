import { Exceptions } from './Exceptions';

export class MissingFields extends Exceptions {
  constructor() {
    super('Missing Fields');
  }
}
