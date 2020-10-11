import axios, { AxiosResponse } from 'axios';
import { TAnyHook } from 'src/types';

interface IGetAjax {
  url: string;
  tries: number;
  loading: boolean;
  isGot: () => boolean;
  setLoading: TAnyHook;
  setTries: TAnyHook;
  handleGet: (data: any) => void;
  maxTries?: number;
}

const getAjax: (props: IGetAjax) => void = ({
  url,
  maxTries = 3,
  tries,
  loading,
  isGot,
  setLoading,
  setTries,
  handleGet
}) => {
  const isMaxReached = tries >= maxTries;
  if (!isGot() && !loading && !isMaxReached) {
    setLoading(true);
    setTries(tries + 1);
    axios.get(url).then((resp: AxiosResponse<any>) => {
      if (resp.data) {
        handleGet(resp.data);
      }
      setLoading(false);
    });
  } else if (isMaxReached) {
    console.log(`Max tries reached - ${maxTries}`);
  }
};

export default getAjax;
