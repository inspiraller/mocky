import React, { FC } from 'react';
import { IConfigFieldsetInputProps } from 'src/types';
import { TacEdit } from 'src/store/eventCreate/actions';
import { IInitial, TLitVal } from 'src/store/eventCreate/_initialState';

import LabelInput from 'src/Components/Common/LabelInputHoc/LabelInput';
import LabelTextarea from 'src/Components/Common/LabelInputHoc/LabelTextarea';
import LabelSelect from 'src/Components/Common/LabelSelect/LabelSelect';
import LabelRadio from 'src/Components/Common/LabelRadio/LabelRadio';

import { getAriaExpandsAttr, getAriaExpandsRequired } from 'src//util/getAriaExpands';

import Row from './Row';

export interface IRowInputType {
  formid: string;
  inputKey: string;
  inputProps: IConfigFieldsetInputProps;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
  eventCreate?: IInitial;
  isAdjacentItem?: boolean;
  submitTouched: boolean;
}

const RowInputType: FC<IRowInputType> = ({
  formid,
  inputKey,
  inputProps,
  acEdit,
  defaultValue,
  eventCreate,
  isAdjacentItem,
  submitTouched
}) => {
  const { type, ariaExpandedBy, inline } = inputProps;

  const ariaExpandsAttr = getAriaExpandsAttr({ inputKey, ariaExpandedBy, eventCreate });
  const required = getAriaExpandsRequired(ariaExpandsAttr, inputProps.required);
  const inputPropsAugmentRequired: IConfigFieldsetInputProps = { ...inputProps, required };

  switch (type) {
    case 'select':
      return (
        <Row {...{ inline, ariaExpandsAttr }}>
          <LabelSelect
            {...{
              formid,
              inputKey,
              inputProps: inputPropsAugmentRequired,
              acEdit,
              defaultValue,
              eventCreate,
              isAdjacentItem,
              submitTouched
            }}
          />
        </Row>
      );
    case 'textarea':
      return (
        <Row {...{ inline, ariaExpandsAttr }}>
          <LabelTextarea
            {...{
              formid,
              inputKey,
              inputProps: inputPropsAugmentRequired,
              acEdit,
              defaultValue,
              eventCreate,
              isAdjacentItem,
              submitTouched
            }}
          />
        </Row>
      );
    case 'radio':
      return (
        <Row {...{ inline, ariaExpandsAttr }}>
          <LabelRadio
            {...{
              formid,
              inputKey,
              inputProps: inputPropsAugmentRequired,
              acEdit,
              defaultValue,
              eventCreate,
              isAdjacentItem,
              submitTouched
            }}
          />
        </Row>
      );
    default:
      return (
        <Row {...{ inline, ariaExpandsAttr }}>
          <LabelInput
            {...{
              formid,
              inputKey,
              inputProps: inputPropsAugmentRequired,
              acEdit,
              defaultValue,
              eventCreate,
              isAdjacentItem,
              submitTouched
            }}
          />
        </Row>
      );
  }
};

export default RowInputType;
