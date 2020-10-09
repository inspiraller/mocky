import { routes } from 'src/Main/Routes/index';

describe('routes', () => {
  it('should have first route ', () => {
    expect(routes.routeForm.path).toBe('/');
  });
});
