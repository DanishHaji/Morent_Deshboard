import { type SchemaTypeDefinition } from 'sanity';
import cars from './cars';
import { driver } from './drivers';
import { booking } from './booking';
import paymentSchema from './payment';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars,driver,booking, paymentSchema],
}
