import { getConnection, Repository } from "typeorm";
import { Users, UserEntity } from "./user-entity";

let userRepository: Repository<Users>;

const init = () => {
  const connection = getConnection();
  userRepository = connection.getRepository<Users>(UserEntity);
};

const initIfUndefined = () => {
  if(userRepository === undefined) {
    init();
  }
}
export const findTopUser = async () => {
 initIfUndefined();

  return await userRepository
    .findOne(1)
    // .then(user => user)
    .catch((err: Error) => console.log(`Error at database level: ${err}`));
};

export const addUser = async(newUser: Users) => {
  initIfUndefined();
  return await userRepository
    .save(newUser)
    .catch((err: Error) => console.log(`Error at database level: ${err}`));
};
