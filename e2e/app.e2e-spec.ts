import { ClariontechPage } from './app.po';

describe('clariontech App', () => {
  let page: ClariontechPage;

  beforeEach(() => {
    page = new ClariontechPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
