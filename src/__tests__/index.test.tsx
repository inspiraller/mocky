import { Component } from 'react';
import Index, { render } from 'src/index';

class Comp extends Component {
  componentDidMount() {
    document.title = 'Hello vanilla webpack 4 and all typical packages in a project';
  }

  render() {
    return null;
  }
}

const DOM = {
  render: jest.fn()
};
const originalGetElement = global.document.getElementById;

describe('index.tsx', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('initialisation', () => {
    it('renders without crashing', () => {
      const obj = { ...Index, _reactInternalInstance: 'censored' };
      const strObj = JSON.stringify(obj);
      expect(strObj).toMatchSnapshot();
    });
  });

  describe('render', () => {
    beforeEach(() => {
      global.document.getElementById = () => null;
    });
    beforeEach(() => {
      global.document.getElementById = originalGetElement;
    });
    it('should call render', () => {
      render({ DOM, Comp });
      expect(DOM.render).toHaveBeenCalledTimes(1);
    });
  });
});
