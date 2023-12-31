import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseTimeEntity } from "../entity/BaseTimeEntity";
import { User } from "../User/User";
import { Category } from "../Category/Category";
import { Comment } from "../Comment/Comment";
import { BoardLike } from "../BoardLike/BoardLike";

@Entity()
export class Board extends BaseTimeEntity {
    @Column()
    userId: number;

    @Column()
    categoryId: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    grade: string;

    @Column({ default: true })
    isPublic: Boolean;

    @ManyToOne(() => User, (user) => user.boards)
    user: User;

    @ManyToOne(() => Category, (category) => category.boards)
    category: Category;

    @OneToMany(() => Comment, (comments) => comments.board, {
        cascade: true,
        eager: true,
    })
    comments: Comment[];

    @OneToMany(() => BoardLike, (boardLikes) => boardLikes.board, {
        cascade: true,
        eager: true,
    })
    boardLikes: BoardLike[];

    static createBoard(
        userId: number,
        categoryId: number,
        title: string,
        content: string,
        isPublic: boolean,
        now: Date,
    ): Board {
        const board = new Board();
        (board.userId = userId), (board.categoryId = categoryId);
        board.title = title;
        board.content = content;
        board.isPublic = isPublic;
        board.createdAt = now;
        board.updatedAt = now;
        return board;
    }

    setPublic(): void {
        this.isPublic = true;
    }

    setPrivate(): void {
        this.isPublic = false;
    }
}
