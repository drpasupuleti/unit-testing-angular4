import { Angular2KarmaPage } from './app.po';

describe('unit-testing-angular4 App', () => {
  let page: Angular2KarmaPage;

  beforeEach(() => {
    page = new Angular2KarmaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
