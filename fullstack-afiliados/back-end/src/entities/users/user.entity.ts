import { IsBoolean, IsEmail, IsString, MinLength } from "class-validator";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "Users" })
export class User {
  @PrimaryGeneratedColumn("increment", { name: "idUser" })
  id?: number;

  @IsString({ message: "Um nome para o usuário é necessário" })
  @Column({
    name: "name",
    type: "varchar",
    length: 250,
    nullable: false,
  })
  name!: string;

  @IsEmail(undefined, { message: "O email do usuario não é válido" })
  @Column({
    name: "email",
    type: "varchar",
    length: 250,
    unique: true,
    nullable: false,
  })
  email!: string;

  @IsString({message: 'A senha do usuário deve ser uma string'})
  @MinLength(8,{message: 'A senha do usuario deve ter no mínimo 8 caracteres'})
  @Column({
    name: "password",
    type: "varchar",
    length: 250,
    nullable: false,
  })
  password!: string;

  @IsBoolean({message: 'Deve ser especificado se o usuário é admin ou não'})
  @Column({
    name: "admin",
    type: "boolean",
    nullable: false,
  })
  admin!: string;

  @CreateDateColumn({ name: "createdAt" })
  createadAt?: string;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt?: string;

  @DeleteDateColumn({ name: "deletedAt" })
  deleteaAt?: string;
}
