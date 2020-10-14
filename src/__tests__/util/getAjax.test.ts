import axios from 'axios';
import getAjax, { getErrorMaxTries } from 'src/util/getAjax';

const url = 'someurl';

interface Iresult {
  somebool: boolean;
}

let result: Iresult | null;
let data: Iresult;
let maxTries: number;
let tries: number;
let loading: boolean;
let error: Error | null;
let CustomError: Error;

const setLoading = (val: boolean) => {
  loading = val;
};
const setTries = (val: number) => {
  tries = val;
};

const isGot = () => result !== null;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const reset = () => {
  jest.clearAllMocks();
  mockedAxios.get.mockReset();
  result = null;
  tries = 0;
  loading = false;
  error = null;
};

describe('getAjax', () => {
  describe('example - return result, increment tries, setLoading', () => {
    beforeAll(async () => {
      reset();
      data = {
        somebool: true
      };
      mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data }));
      await getAjax({
        url,
        tries,
        setTries,
        loading,
        setLoading,
        isGot
      }).then((resp: Iresult) => {
        result = resp;
      });
    });
    it('should increment tries', () => {
      expect(tries).toEqual(1);
    });
    it('should set loading = false', () => {
      expect(loading).toEqual(false);
    });
    it('should call axios', () => {
      expect(mockedAxios.get).toBeCalledTimes(1);
    });
    it('should return result', () => {
      expect(result).toEqual(data);
    });
  });
  describe('example - default maxTries reached', () => {
    beforeAll(async () => {
      reset();
      tries = 3;
      await getAjax({
        url,
        tries,
        setTries,
        loading,
        setLoading,
        isGot
      }).catch(err => {
        error = err;
      });
    });
    it('should NOT increment tries', () => {
      expect(tries).toEqual(3);
    });
    it('should NOT set loading', () => {
      expect(loading).toEqual(false);
    });
    it('should NOT call axios', () => {
      expect(mockedAxios.get).toBeCalledTimes(0);
    });
    it('should return error- Max Tries', () => {
      expect(error).toEqual(getErrorMaxTries(3));
    });
  });
  describe('example - custom maxTries reached', () => {
    beforeAll(async () => {
      reset();
      tries = 1;
      maxTries = 1;
      mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data }));
      await getAjax({
        url,
        tries,
        maxTries,
        setTries,
        loading,
        setLoading,
        isGot
      }).catch(err => {
        error = err;
      });
    });
    it('should return error - Custom Max Tries', () => {
      expect(error).toEqual(getErrorMaxTries(maxTries));
    });
  });
  describe('example - reject', () => {
    beforeAll(async () => {
      reset();
      CustomError = Error('some error');
      mockedAxios.get.mockImplementationOnce(() => Promise.reject(CustomError));
      await getAjax({
        url,
        tries,
        setTries,
        loading,
        setLoading,
        isGot
      }).catch(err => {
        error = err;
      });
    });
    it('should increment tries', () => {
      expect(tries).toEqual(1);
    });
    it('should set loading to true', () => {
      expect(loading).toEqual(true);
    });
    it('should call axios', () => {
      expect(mockedAxios.get).toBeCalledTimes(1);
    });
    it('should reject Some Error', () => {
      expect(error).toEqual(CustomError);
    });
  });
});
