import {EntityManager, EntitySchema} from 'typeorm';

export interface Users {
  id: number;
  firstname: string;
};

export const UserEntity = new EntitySchema<Users>({
  name: "users",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    firstname: {
      type: String
    }
  }
});
