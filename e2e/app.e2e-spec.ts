import { NgSearchMapPage } from './app.po';

describe('ng-search-map App', () => {
  let page: NgSearchMapPage;

  beforeEach(() => {
    page = new NgSearchMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
