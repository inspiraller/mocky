import React, { FC } from 'react';
import { Toptgroups } from 'src/types';
import text from 'src/Main/text';
import Options from '../Options/Options';

interface IOptGroups {
  formid: string;
  optgroups: Toptgroups;
  label: string;
}

const OptGroups: FC<IOptGroups> = ({ formid, optgroups, label }) => (
  <>
    {Object.keys(optgroups).map(key => {
      const options = optgroups[key];

      return (
        <optgroup key={`${formid}-${label}-optgroup-${key}`} label={text(key)}>
          <Options {...{ formid, options, label }} />
        </optgroup>
      );
    })}
  </>
);

export default OptGroups;
