import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './financedb.datasource.json';

export class FinancedbDataSource extends juggler.DataSource {
  static dataSourceName = 'financedb';

  constructor(
    @inject('datasources.config.financedb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
