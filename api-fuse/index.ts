import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import * as express from "express";
import { Express } from "express-serve-static-core";
import * as functions from "firebase-functions";
import { FirebaseConnection } from "src/auth/firebase.connection";
import { AppModule } from "./src/app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

const expressServer = express();
const createFunction = async (expressInstance: Express): Promise<void> => {
  FirebaseConnection.init();

  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));

  const config = new DocumentBuilder()
    .setTitle("Cats example")
    .setDescription("The cats API description")
    .setVersion("1.0")
    .addTag("cats")
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);

  await app.init();
};
export const api = functions.https.onRequest(async (request, response) => {
  await createFunction(expressServer);

  expressServer(request, response);
});
