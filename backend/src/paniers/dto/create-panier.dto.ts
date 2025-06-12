import { Client } from "src/clients/entities/client.entity";
import { Produit } from "src/produits/entities/produit.entity";

export class CreatePanierDto {
    id_panier: number;
    qt_commande: number;
    id_pro: Produit;
    id_cli: Client
}