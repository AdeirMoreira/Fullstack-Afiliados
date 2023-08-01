import { DataSource, EntityTarget, ObjectLiteral } from "typeorm";
import AppDataSource from "../server";

export class RepositoryService {
  constructor(private appDataSource: DataSource) {}

  fintAll(entity: EntityTarget<ObjectLiteral>, options: ObjectLiteral) {
    try {
      const repository = this.getRepository(entity);
      return Promise.resolve(repository.find(options));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  fintOne(entity: EntityTarget<ObjectLiteral>, where: ObjectLiteral) {
    try {
      const repository = this.getRepository(entity);
      return Promise.resolve(repository.findOneBy(where));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  rawQuery(query:string){
    return this.appDataSource.query(query)
  }

  getRepository(entity: EntityTarget<ObjectLiteral>) {
    return this.appDataSource.getRepository(entity);
  }
}

export default new RepositoryService(AppDataSource);
