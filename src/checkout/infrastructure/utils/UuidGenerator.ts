import { UuidGenerator } from '../../../../src/checkout/domain/utils/uuidGenerator';
import { v4 as uuid } from 'uuid';
export class UuidV4Generator implements UuidGenerator {
  generate(): string {
    return uuid();
  }
}
