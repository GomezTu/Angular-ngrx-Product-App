import { AngularNgrxProductAppPage } from './app.po';

describe('angular-ngrx-product-app App', function() {
  let page: AngularNgrxProductAppPage;

  beforeEach(() => {
    page = new AngularNgrxProductAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
