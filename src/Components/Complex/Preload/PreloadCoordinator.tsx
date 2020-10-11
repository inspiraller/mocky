import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState, TThunkDispatch } from 'src/store/storeTypes';

import { IInitial, TCoordinatorProps } from 'src/store/preload/_initialState';
import { actions, TacPopulateCoordinator } from 'src/store/preload/actions';

import getAjax from 'src/util/getAjax';

export interface IPreload {
  preload: IInitial;
  acPopulateCoordinator: TacPopulateCoordinator;
}

const PreloadCoordinator: FC<IPreload> = ({ preload, acPopulateCoordinator }) => {
  const [loading, setLoading] = useState(false);
  const [tries, setTries] = useState(0);
  useEffect(() => {
    getAjax({
      url: 'http://www.mocky.io/v2/5bcdd3942f00002c00c855ba',
      tries,
      loading,
      isGot: () => !!preload.coordinator,
      setLoading,
      setTries,
      handleGet: (coordinator: TCoordinatorProps) => {
        acPopulateCoordinator({ coordinator });
      }
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
)(PreloadCoordinator);
