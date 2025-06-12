import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('produits')
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) { }

  //ajout produit
  @Post()
  create(@Body() createProduitDto: CreateProduitDto) {
    return this.produitsService.create(createProduitDto);
  }

  //affichage tous les produits
  @Get()
  findAll() {
    return this.produitsService.findAll();
  }

  //recherche par id_pro
  @Get(':id_pro')
  findOne(@Param('id_pro') id_pro: number) {
    return this.produitsService.findOne(+id_pro);
  }

  //affichage liste sans id
  @Get('/liste')
  listPro() {
    return this.produitsService.listePro();
  }

  //testa somme des produits
  @Get("/somme")
  somme() {
    return this.produitsService.max()
  }

  //Upload de photo et stockage de donnée
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniquename =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniquename + extname(file.originalname))
        }
      })
    })
  )

  async uploadPhoto(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: Omit<CreateProduitDto, 'photo'>,
  ) {
    const photo = `/uploads/${file.filename}`;
    return this.produitsService.create({...body, photo});
  }
}