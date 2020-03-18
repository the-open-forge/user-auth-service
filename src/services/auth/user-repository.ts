import { getRepository, Repository } from "typeorm";
import { Users, UserEntity } from "./user-entity";

let userRepository: Repository<Users>;

export const findTopUser = async () => await getRepository(UserEntity)
    .findOne(1)
    // .then(user => user)
    .catch((err: Error) => console.log(`Error at database level: ${err}`));


export const addUser = async(newUser: Users) => {
  return await getRepository(UserEntity)
    .save(newUser)
    .catch((err: Error) => console.log(`Error at database level: ${err}`));
};
