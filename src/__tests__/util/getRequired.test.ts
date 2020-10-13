import { config } from 'process';
import { IInitial } from 'src/store/eventCreate/_initialState';
import getRequired from 'src/util/getRequired';

describe('getRequired ', () => {
  it('should get empty array', () => {
    const configFieldset = {
      id: {
        label: 'my id'
      }
    };
    expect(getRequired(configFieldset)).toEqual([]);
  });
  it('should get - 1 required item', () => {
    const configFieldset = {
      id1: {
        label: 'my id',
        required: true
      }
    };
    expect(getRequired(configFieldset)).toEqual(['id1']);
  });
  it('should get - 2 required item', () => {
    const configFieldset = {
      id1: {
        label: 'my id',
        required: true
      },
      id2: {
        label: 'my id'
      },
      id3: {
        label: 'my id',
        required: true
      }
    };
    expect(getRequired(configFieldset)).toEqual(['id1', 'id3']);
  });
  it('should get - 1 adjacent item', () => {
    const configFieldset = {
      id1: {
        label: 'my id',
        adjacent: {
          'id1-adjacent1': {
            required: true
          }
        }
      }
    };
    expect(getRequired(configFieldset)).toEqual(['id1-adjacent1']);
  });
  it('should get - 2 adjacent item', () => {
    const configFieldset = {
      id1: {
        label: 'my id',
        adjacent: {
          'id1-adjacent1': {},
          'id1-adjacent2': {
            required: true
          },
          'id1-adjacent3': {
            required: true
          }
        }
      }
    };
    expect(getRequired(configFieldset)).toEqual(['id1-adjacent2', 'id1-adjacent3']);
  });
  it('should get - 3 separate adjacent item', () => {
    const configFieldset = {
      id1: {
        label: 'my id',
        adjacent: {
          'id1-adjacent1': {},
          'id1-adjacent2': {
            required: true
          },
          'id1-adjacent3': {
            required: true
          }
        }
      },
      id2: {
        label: 'my id',
        adjacent: {
          'id2-adjacent1': {
            required: true
          }
        }
      }
    };
    expect(getRequired(configFieldset)).toEqual([
      'id1-adjacent2',
      'id1-adjacent3',
      'id2-adjacent1'
    ]);
  });
  it('should get - combined', () => {
    const configFieldset = {
      id1: {
        label: 'my id',
        required: true,
        adjacent: {
          'id1-adjacent1': {},
          'id1-adjacent2': {
            required: true
          },
          'id1-adjacent3': {
            required: true
          }
        }
      },
      id2: {
        label: 'my id',
        adjacent: {
          'id2-adjacent1': {
            required: true
          }
        }
      },
      id3: {
        label: 'my id',
        required: true,
        adjacent: {
          'id3-adjacent1': {
            required: true
          }
        }
      }
    };
    expect(getRequired(configFieldset)).toEqual([
      'id1-adjacent2',
      'id1-adjacent3',
      'id2-adjacent1',
      'id3-adjacent1',
      'id1',
      'id3'
    ]);
  });
});
