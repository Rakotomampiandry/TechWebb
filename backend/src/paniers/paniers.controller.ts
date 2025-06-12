import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaniersService } from './paniers.service';
import { CreatePanierDto } from './dto/create-panier.dto';
import { UpdatePanierDto } from './dto/update-panier.dto';

@Controller('paniers')
export class PaniersController {
  constructor(private readonly paniersService: PaniersService) {}

  //controller ajout
  @Post()
  create(@Body() createPanierDto: CreatePanierDto) {
    return this.paniersService.create(createPanierDto);
  }

  //controller tous les paniers
  @Get()
  findAll() {
    return this.paniersService.findAll();
  }

  //mise à jour c que tu veux dans le panier
  @Patch(':id_panier')
  update(@Param('id_panier') id_panier: number, @Body() updatePanierDto: UpdatePanierDto) {
    return this.paniersService.update(+id_panier, updatePanierDto);
  }

  //suppression pannier
  @Delete(':id_panier')
  remove(@Param('id_panier') id_panier: number) {
    return this.paniersService.remove(+id_panier);
  }

  //affichage produit/panier/client
  @Get('liste')
  liste(){
    return this.paniersService.liste()
  }

  //affichage somme prix produit par client
  @Get('sum')
  somme(){
    return this.paniersService.somme()
  }
}