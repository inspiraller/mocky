import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState, TThunkDispatch } from 'src/store/storeTypes';

import { IInitial, TResponsibleProps } from 'src/store/preload/_initialState';
import { actions, TacPopulateResponsible } from 'src/store/preload/actions';

import getAjax from 'src/util/getAjax';

export interface IPreload {
  preload: IInitial;
  acPopulateResponsible: TacPopulateResponsible;
}

const PreloadResponsible: FC<IPreload> = ({ preload, acPopulateResponsible }) => {
  const [loading, setLoading] = useState(false);
  const [tries, setTries] = useState(0);
  useEffect(() => {
    getAjax({
      url: 'http://www.mocky.io/v2/5bcdd7992f00006300c855d5',
      tries,
      setTries,
      loading,
      setLoading,
      isGot: () => !!preload.responsible
    }).then((responsible: TResponsibleProps) => {
      acPopulateResponsible({ responsible });
    });
  });
  return null;
};

const mapDispatchToProps = (dispatch: TThunkDispatch) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  (state: RootState) => ({
    preload: state.preload
  }),
  mapDispatchToProps
)(PreloadResponsible);
