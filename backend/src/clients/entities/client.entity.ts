import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "clients"})
export class Client {
    @PrimaryGeneratedColumn()
    id_cli: number;

    @Column({ type: "text", nullable: false })
    nom_cli: string;
}