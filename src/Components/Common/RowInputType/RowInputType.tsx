import React, { FC } from 'react';
import { IConfigFieldsetItemProps } from 'src/types';
import { TacEdit } from 'src/store/eventCreate/actions';
import { IInitial, TLitVal } from 'src/store/eventCreate/_initialState';

import LabelInput from 'src/Components/Common/LabelInputHoc/LabelInput';
import LabelTextarea from 'src/Components/Common/LabelInputHoc/LabelTextarea';
import LabelSelect from 'src/Components/Common/LabelSelect/LabelSelect';
import LabelRadio from 'src/Components/Common/LabelRadio/LabelRadio';

import { getAriaExpandsAttr, getAriaExpandsRequired } from 'src//util/getAriaExpands';

import Row from './RowBlockOrInline';

export interface IRowInputType {
  formid: string;
  inputKey: string;
  inputProps: IConfigFieldsetItemProps;
  acEdit?: TacEdit;
  defaultValue?: TLitVal;
  eventCreate?: IInitial;
}

const RowInputType: FC<IRowInputType> = ({
  formid,
  inputKey,
  inputProps,
  acEdit,
  defaultValue,
  eventCreate
}) => {
  const { type, ariaExpandedBy, inline } = inputProps;

  const ariaExpandsAttr = getAriaExpandsAttr({ inputKey, ariaExpandedBy, eventCreate });
  const required = getAriaExpandsRequired(ariaExpandsAttr, inputProps.required);
  const inputPropsAugmentRequired: IConfigFieldsetItemProps = { ...inputProps, required };

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
              eventCreate
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
              eventCreate
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
              eventCreate
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
              eventCreate
            }}
          />
        </Row>
      );
  }
};

export default RowInputType;
