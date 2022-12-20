import { Exceptions } from './Exceptions';

export class InvalidEmailException extends Exceptions {
  constructor() {
    super('Invalid email');
  }
}
