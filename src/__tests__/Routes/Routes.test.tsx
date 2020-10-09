import { routes } from 'src/Main/Routes/index';

describe('routes', () => {
  it('should have path="welcome" ', () => {
    expect(routes.welcome.path).toBe('/');
  });
});
