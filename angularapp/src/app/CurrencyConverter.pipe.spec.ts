import { CurrencyConverterPipe } from './currencyconverter.pipe';

describe('CurrencyConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
