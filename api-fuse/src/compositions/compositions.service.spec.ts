import { Test, TestingModule } from "@nestjs/testing";
import { CompositionsService } from "./compositions.service";

describe("CompositionsService", () => {
  let service: CompositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompositionsService],
    }).compile();

    service = module.get<CompositionsService>(CompositionsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
