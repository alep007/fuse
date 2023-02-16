import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { CompositionsService } from "./compositions.service";
import { CreateCompositionDto } from "./dto/create-composition.dto";
import { UpdateCompositionDto } from "./dto/update-composition.dto";

@Controller("compositions")
export class CompositionsController {
  constructor(private readonly compositionsService: CompositionsService) {}

  @Post()
  create(@Body() createCompositionDto: CreateCompositionDto) {
    return this.compositionsService.create(createCompositionDto);
  }

  @Get()
  findAll() {
    return this.compositionsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.compositionsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCompositionDto: UpdateCompositionDto) {
    return this.compositionsService.update(+id, updateCompositionDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.compositionsService.remove(+id);
  }
}
