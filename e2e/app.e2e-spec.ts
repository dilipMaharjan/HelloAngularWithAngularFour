import { AngularizePage } from './app.po';

describe('angularize App', () => {
  let page: AngularizePage;

  beforeEach(() => {
    page = new AngularizePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
