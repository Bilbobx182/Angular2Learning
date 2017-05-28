import { AngProPage } from './app.po';

describe('ang-pro App', () => {
  let page: AngProPage;

  beforeEach(() => {
    page = new AngProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
