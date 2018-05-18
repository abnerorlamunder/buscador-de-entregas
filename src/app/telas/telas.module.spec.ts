import { TelasModule } from './telas.module';

describe('TelasModule', () => {
  let telasModule: TelasModule;

  beforeEach(() => {
    telasModule = new TelasModule();
  });

  it('should create an instance', () => {
    expect(telasModule).toBeTruthy();
  });
});
