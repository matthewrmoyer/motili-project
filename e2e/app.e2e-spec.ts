import { MotiliProjectPage } from './app.po';

describe('motili-project App', () => {
  let page: MotiliProjectPage;

  beforeEach(() => {
    page = new MotiliProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
