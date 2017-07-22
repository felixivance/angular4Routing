import { EmkayNowFelixPage } from './app.po';

describe('emkay-now-felix App', () => {
  let page: EmkayNowFelixPage;

  beforeEach(() => {
    page = new EmkayNowFelixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
