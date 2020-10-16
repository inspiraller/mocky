import { IConfigFieldset } from 'src/types';

import getFlatAdjacent from 'src/util/getFlatAdjacent';

describe('getFlatAdjacent', () => {
  it('should reduce object to just adjacent - example no adjacent', () => {
    const config: IConfigFieldset = {
      myid: {
        label: 'some label'
      }
    };
    expect(getFlatAdjacent(config)).toEqual({});
  });
  it('should reduce object to just adjacent - example 1 item', () => {
    const config: IConfigFieldset = {
      myid: {
        label: 'some label',
        adjacent: {
          childid: {
            label: 'my label'
          }
        }
      }
    };
    expect(getFlatAdjacent(config)).toEqual({
      childid: {
        label: 'my label'
      }
    });
  });
  it('should reduce object to just adjacent - example 2 item', () => {
    const config: IConfigFieldset = {
      myid: {
        label: 'some label',
        adjacent: {
          childid: {
            label: 'my label'
          },
          child2: {
            label: 'my label2'
          }
        }
      }
    };
    expect(getFlatAdjacent(config)).toEqual({
      childid: {
        label: 'my label'
      },
      child2: {
        label: 'my label2'
      }
    });
  });
  it('should reduce object to just adjacent - example 4 item  - 2 separate', () => {
    const config: IConfigFieldset = {
      myid: {
        label: 'some label',
        adjacent: {
          child1: {
            label: 'my label'
          },
          child2: {
            label: 'my label2'
          }
        }
      },
      myid2: {
        label: 'some label',
        adjacent: {
          child3: {
            label: 'my label'
          },
          child4: {
            label: 'my label2'
          }
        }
      }
    };
    expect(getFlatAdjacent(config)).toEqual({
      child1: {
        label: 'my label'
      },
      child2: {
        label: 'my label2'
      },
      child3: {
        label: 'my label'
      },
      child4: {
        label: 'my label2'
      }
    });
  });
});
