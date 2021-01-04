/*
    GRt,5lePZegR  安装mysql数据库时的初始密码
*/

import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Article extends BaseEntity {
    // 配置主键，表示自增长的主键
    @PrimaryGeneratedColumn()
    id: number;

    // 标题
    @Column({ length: 255 })
    title: string;

    // 描述
    @Column("text")
    description: string;

    // 内容
    @Column("text")
    content: string;

    // 类型
    @Column("int")
    type: number;

    // 状态
    @Column({ default: true })
    status: boolean;
}