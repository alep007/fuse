import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CompositionsModule } from "./compositions/compositions.module";

@Module({
  imports: [CompositionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
