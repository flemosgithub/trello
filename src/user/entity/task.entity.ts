import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserList } from "./user-list.entity";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "priority" })
    priority: string;

    @Column({ name: "duedate" })
    dueDate: string;

    @ManyToOne(type => UserList, userList => userList.tasks)
    userList: UserList;

}
