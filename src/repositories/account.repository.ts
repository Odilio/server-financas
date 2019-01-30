import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Account} from '../models';
import {FinancedbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype.id
> {
  constructor(
    @inject('datasources.financedb') dataSource: FinancedbDataSource,
  ) {
    super(Account, dataSource);
  }
}
