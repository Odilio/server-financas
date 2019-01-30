import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Account extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Account>) {
    super(data);
  }
}
