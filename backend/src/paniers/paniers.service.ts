import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePanierDto } from './dto/create-panier.dto';
import { UpdatePanierDto } from './dto/update-panier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Panier } from './entities/panier.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaniersService {
  constructor(
    @InjectRepository(Panier)
    private readonly pannierRepository:
    Repository<Panier>){}

  //ajout pannier
  async create(createPanierDto: CreatePanierDto) {
    const panier = this.pannierRepository.create(createPanierDto)
    return await this.pannierRepository.save(panier);
  }

  //recherche par id
  async findOne(id_panier: number) {
    return await this.pannierRepository.findOne({
      where:{ id_panier }
    });
  }

  //affichage tous les panniers
  async findAll() {
    return this.pannierRepository.find();
  }

  //affichage panier/Client/produits
  async liste(){
    const liste = await this.pannierRepository.find({
      relations : ['id_pro', 'id_cli'],
    })
    return liste; 
  }

  //mise à jours quantités produits commande
  async update(id_panier: number, updatePanierDto: UpdatePanierDto) {
    const rech = await this.findOne(id_panier)
    if(!rech){
      throw new NotFoundException()
    }
    Object.assign(rech, updatePanierDto)
    return await this.pannierRepository.save(rech);
  }

  //Suppression panier
  async remove(id_panier: number) {
    const sup = await this.findOne(id_panier)
    if(!sup){
      throw new NotFoundException()
    }
    return this.pannierRepository.remove(sup);
  }

  //somme prix produit par client
  async somme(): Promise<number>{
    const somme = await this.pannierRepository
    .createQueryBuilder('produits')
    .select('SUM(panier.prix)', 'sum')
    .getRawOne();

    return somme;
  }
}