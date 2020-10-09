import { configRoutes } from 'src/Main/Routes/index';

describe('configRoutes', () => {
  it('should have first route ', () => {
    expect(configRoutes.routeForm.path).toBe('/');
  });
});
