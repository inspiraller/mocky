import { configRoutes } from 'src/Main/Routes/index';

describe('configRoutes', () => {
  it('should have first route ', () => {
    expect(configRoutes.routeForm.path).toBe('/');
  });
  it('should have 2nd route as EventCreated ', () => {
    expect(configRoutes.routeNotfication.path).toBe('/EventCreated');
  });
});
