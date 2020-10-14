import axios, { AxiosResponse } from 'axios';
import { TAnyHook } from 'src/types';

interface IGetAjax {
  url: string;
  maxTries?: number;
  tries: number;
  setTries: TAnyHook;
  loading: boolean;
  setLoading: TAnyHook;
  isGot: () => boolean;
}

export const getErrorMaxTries = (maxTries: number) => Error(`Max tries reached - ${maxTries}`);

const getAjax: (props: IGetAjax) => Promise<any> = ({
  url,
  maxTries = 3,
  tries,
  setTries,
  loading,
  setLoading,
  isGot
}) =>
  new Promise((resolve, reject) => {
    const isMaxReached = tries >= maxTries;
    if (!isGot() && !loading && !isMaxReached) {
      setLoading(true);
      setTries(tries + 1);
      axios
        .get(url)
        .then((resp: AxiosResponse<any>) => {
          if (resp.data) {
            resolve(resp.data);
          }
          setLoading(false);
        })
        .catch(err => {
          reject(err);
        });
    } else if (isMaxReached) {
      reject(getErrorMaxTries(maxTries));
    }
  });

export default getAjax;
