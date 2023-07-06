import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { BaseTimeEntity } from "../entity/BaseTimeEntity";

@Entity()
export class User extends BaseTimeEntity {

    @Column()
    name:string;

    @Column()
    password:string;

    @Column()
    nickname:string;

    constructor() {
        super();
    }

    // 정적 (static) 메소드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출한다.
    static signup(name:string,nickname:string,password:string,createdAt:Date,updatedAt:Date): User {
        const user = new User();
        user.name = name;
        user.nickname = nickname;
        user.password = password;
        user.createdAt = createdAt;
        user.updatedAt = updatedAt;
        return user
    }

}