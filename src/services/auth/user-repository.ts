import { getConnection, Repository } from "typeorm";
import { Users, UserEntity } from "./user-entity";

let userRepository: Repository<Users>;

const init = () => {
  const connection = getConnection('userConnection');
  userRepository = connection.getRepository<Users>(UserEntity);
};

export const findTopUser = async () => {
  if (userRepository === undefined) {
    init();
  }

  return await userRepository
    .findOne(1)
    .then(user => user);
};
