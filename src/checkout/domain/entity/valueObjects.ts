import { BeANumber } from '../exceptions/BeANumber.Exceptions';
import { InvalidEmailException } from '../exceptions/InvalidEmail.Exceptions';
import { InvalidTypes } from '../exceptions/InvalidTypes.Exceptions';
import { MissingFields } from '../exceptions/MissingFields';
import { TotalMaxZero } from '../exceptions/TotalMaxZero';
import dotenv from 'dotenv';

dotenv.config();

const RETURN_URL = process.env.RETURN_URL;
const TEST = process.env.TEST || true;
const WEBHOOK = process.env.WEBHOOK;

export class CheckoutId {
  readonly _value: string;
  constructor(value: string) {
    if (!value) throw new MissingFields();
    this._value = value;
  }
}

export class CheckoutTotal {
  readonly _value: number;
  constructor(value: number) {
    // if (typeof value !== 'number') throw new InvalidTypes();
    if (value <= 0) throw new TotalMaxZero();
    this._value = value;
  }
}

export class CheckoutDescription {
  readonly _value: string;
  constructor(value: string) {
    if (typeof value !== 'string') throw new InvalidTypes();
    if (!value) throw new MissingFields();
    this._value = value;
  }
}

export class CheckoutReference {
  readonly _value: string;
  constructor(value: string) {
    this._value = value;
  }
}

export class CheckoutCurrency {
  readonly _value: string;
  constructor(value: string) {
    if (!value) {
      this._value = 'ARS';
    } else {
      this._value = value;
    }
  }
}

export class CheckoutTest {
  readonly _value: boolean;
  constructor(value: boolean) {
    this._value = TEST as boolean;
  }
}

export class CheckoutReturn_Url {
  readonly _value: string;
  constructor(value: string) {
    this._value = RETURN_URL as string;
  }
}

export class CheckoutWebhook {
  readonly _value: string;
  constructor(value: string) {
    this._value = WEBHOOK as string;
  }
}

export class CheckoutUrl {
  readonly _value: string;
  constructor(value: string) {
    this._value = value;
  }
}

export class CheckoutStatus {
  readonly _value: string;
  constructor(value: string) {
    if (value === '200') {
      this._value = 'Pagado';
    } else if (value === '400') {
      this._value = 'Denegada';
    } else if (value === '3') {
      this._value = 'Pendiente de Pago';
    } else {
      this._value = 'Nuevo';
    }
  }
}

export class CheckoutEmail {
  readonly _value: string;
  constructor(value: string) {
    if (
      !/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
        value
      )
    )
      throw new InvalidEmailException();

    this._value = value;
  }
}

export class CheckoutName {
  readonly _value: string;
  constructor(value: string) {
    if (typeof value !== 'string') throw new InvalidTypes();
    if (!value) throw new MissingFields();
    this._value = value;
  }
}

export class CheckoutIdentification {
  readonly _value: string;
  constructor(value: string) {
    if (typeof value !== 'string') throw new InvalidTypes();
    if (!value) throw new MissingFields();
    this._value = value;
  }
}
