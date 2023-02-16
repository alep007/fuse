import { Test, TestingModule } from "@nestjs/testing";
import { CompositionsController } from "./compositions.controller";
import { CompositionsService } from "./compositions.service";

describe("CompositionsController", () => {
  let controller: CompositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompositionsController],
      providers: [CompositionsService],
    }).compile();

    controller = module.get<CompositionsController>(CompositionsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
