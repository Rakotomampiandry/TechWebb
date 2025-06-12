import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produit } from './entities/produit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProduitsService {
  constructor(
    @InjectRepository(Produit)
    private readonly produitRepository:
      Repository<Produit>) {
  }

  //AJOUT PRODUIT
  async create(createProduitDto: CreateProduitDto) {
    const produit = this.produitRepository.create(createProduitDto);
    return await this.produitRepository.save(produit);
  }

  //AFFICHAGE TOUS LES PRODUITS
  async findAll(): Promise<Produit[]> {
    return await this.produitRepository.find();
  }

  //AFFICHAGE DE PRODUIT PAR ID
  async findOne(id_pro: number) {
    return await this.produitRepository.findOne({
      where: { id_pro }
    });
  }

  //AFFICHAGE PRODUIT (nom, detail, description, prix, photo)
  async listePro() {
    return this.produitRepository.find({
      select: ['nom_pro', 'detail', 'description'],
    });
  }

  //somme prix produit par client
  async max(): Promise<number> {
    const max = await this.produitRepository
      .createQueryBuilder('produit')
      .select('MAX(produit.id_pro)', 'max')
      .getRawOne();
    
    return max ? max.max : 0;
  }
}