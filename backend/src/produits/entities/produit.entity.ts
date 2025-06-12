import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "produits"})
export class Produit {
    @PrimaryGeneratedColumn()
    id_pro: number;

    @Column({type: "text", nullable: true})
    nom_pro: string;

    @Column({type: "text", nullable: true})
    detail: string;

    @Column({type: "text", nullable: true})
    description: string;

    @Column({type: "integer", nullable: true})
    quantite: number;

    @Column({type: "integer", nullable: true})
    prix: number;

    @Column({type: "text", nullable: true})
    photo: string;
}