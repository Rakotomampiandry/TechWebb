import { Client } from "src/clients/entities/client.entity";
import { Produit } from "src/produits/entities/produit.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"panier"})
export class Panier {
    @PrimaryGeneratedColumn()
    id_panier: number;

    @Column({type: "integer", nullable: true})
    qt_commande: number;

    @ManyToOne(()=> Produit, produit => produit.id_pro, {nullable: true})
    @JoinColumn({name: "id_pro"})
    id_pro: Produit

    @ManyToOne(()=> Client, client=> client.id_cli, {nullable: true})
    @JoinColumn({name: "id_cli"})
    id_cli: Client
}