import { Column, Entity, JoinColumn, BaseEntity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserList } from "./user-list.entity";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "firstname" })
    firstName: string;

    @Column({ name: "lastname" })
    lastName: string;

    @OneToMany(type => UserList, userList => userList.user, { eager: true})
    userLists: UserList[];

}