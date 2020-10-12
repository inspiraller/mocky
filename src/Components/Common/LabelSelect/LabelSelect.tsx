import React, { Component } from 'react';

import { TLitVal } from 'src/store/eventCreate/_initialState';
import { IRowInputType } from 'src/Components/Common/RowInputType/RowInputType';

import text from 'src/Main/text';
import hacEdit from 'src/util/hacEdit';
import getLabel from 'src/util/getLabel';
import getTouched from 'src/util/getTouched';

import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SelectStyle from 'src/Components/Common/Select/SelectStyle';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';
import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';
import Options from './Options';
import OptGroups from './OptGroups';

type TInputChange = React.ChangeEvent<HTMLSelectElement>;

const Select = SelectStyle();
const Option = OptionStyle();
const Label = LabelStyle();

interface IState {
  input?: TLitVal;
  touched: boolean;
  error: string;
}

class LabelSelect extends Component<IRowInputType, IState> {
  private refValue = React.createRef<HTMLSelectElement>();

  constructor(props: IRowInputType) {
    super(props);

    const { defaultValue, submitTouched } = props;
    this.state = {
      input: defaultValue,
      touched: submitTouched,
      error: ''
    };
    this.updateErrors = this.updateErrors.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setInput = this.setInput.bind(this);
  }

  componentDidUpdate(prevProps: IRowInputType, prevState: IState) {
    const { submitTouched } = this.props;
    if (submitTouched !== prevProps.submitTouched) {
      this.updateErrors();
    }
  }

  onChange = (evt: TInputChange) => {
    const { acEdit, inputKey, inputProps } = this.props;
    const { valueType } = inputProps;

    const value = this.refValue.current && this.refValue.current.value;
    if (value !== null) {
      hacEdit({ setInput: this.setInput, acEdit, inputKey, value, valueType });
      this.updateErrors();
    }
  };

  setInput(val: string) {
    this.setState({
      input: val
    });
  }

  updateErrors() {
    const { inputKey, inputProps } = this.props;
    const { validate, required } = inputProps;
    const label = getLabel(inputKey, inputProps.label);

    const value = this.refValue.current && this.refValue.current.value;
    if (value !== null) {
      const error = validateAll({ validate, required, label, value });
      this.setState({
        touched: true,
        error
      });
    }
  }

  render() {
    const {
      formid,
      inputKey,
      inputProps,
      acEdit,
      defaultValue,
      isAdjacentItem,
      submitTouched
    } = this.props;

    const { onChange } = this;
    const { input, error, touched } = this.state;
    const { required, options, optgroups, isLabel } = inputProps;

    const label = getLabel(inputKey, inputProps.label);
    const isTouched = getTouched(submitTouched, touched);
    const value = acEdit ? defaultValue : input;
    const id = `${formid}-${inputKey}`;

    return (
      <>
        {isLabel === undefined || isLabel ? (
          <Label data-aria-required={required} htmlFor={id} data-is-adjacentitem={isAdjacentItem}>
            {text(label)}
          </Label>
        ) : null}
        <Select
          id={id}
          onChange={onChange}
          name={inputKey}
          placeholder={text(label)}
          aria-required={required ? 'true' : 'false'}
          aria-invalid={error ? 'true' : 'false'}
          data-touched={isTouched && value !== '' ? 'true' : 'false'}
          aria-label={text(inputKey)}
          value={String(value)}
          ref={this.refValue}
        >
          <Option value="-1">{text('Please select...')}</Option>

          {options && !optgroups ? <Options {...{ formid, options, label }} /> : null}
          {optgroups && !options ? <OptGroups {...{ formid, optgroups, label }} /> : null}
        </Select>

        <SpanError {...{ error }} />
        <Success is={value !== '-1' && !!value && !error && isTouched} />
      </>
    );
  }
}

export default LabelSelect;
