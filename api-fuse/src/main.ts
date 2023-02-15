import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import { FirebaseConnection } from "./auth/firebase.connection";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  FirebaseConnection.init();

  await app.listen(3000);
}
bootstrap();
