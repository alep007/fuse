import { Injectable } from "@nestjs/common";
import { CreateCompositionDto } from "./dto/create-composition.dto";
import { UpdateCompositionDto } from "./dto/update-composition.dto";
import { getRepository } from "fireorm";
import { Composition } from "./entities/composition.entity";
import { FirebaseConnection } from "src/auth/firebase.connection";

@Injectable()
export class CompositionsService {
  private server;
  private compositionRepository;
  constructor() {
    this.server = FirebaseConnection.getInstance().db;
    this.compositionRepository = getRepository(Composition);
  }

  create(createCompositionDto: CreateCompositionDto) {
    return "This action adds a new composition";
  }

  async findAll() {
    const response = await this.compositionRepository.find();
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} composition`;
  }

  update(id: number, updateCompositionDto: UpdateCompositionDto) {
    return `This action updates a #${id} composition`;
  }

  remove(id: number) {
    return `This action removes a #${id} composition`;
  }
}
