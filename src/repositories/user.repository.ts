import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {User} from '../models';
import {FinancedbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.financedb') dataSource: FinancedbDataSource,
  ) {
    super(User, dataSource);
  }
}
