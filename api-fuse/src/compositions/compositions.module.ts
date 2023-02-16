import { Module } from "@nestjs/common";
import { CompositionsService } from "./compositions.service";
import { CompositionsController } from "./compositions.controller";

@Module({
  controllers: [CompositionsController],
  providers: [CompositionsService],
})
export class CompositionsModule {}
