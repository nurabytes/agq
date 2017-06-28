import { NurabytesPage } from './app.po';

describe('nurabytes App', () => {
  let page: NurabytesPage;

  beforeEach(() => {
    page = new NurabytesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
