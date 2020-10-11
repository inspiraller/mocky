import React from 'react';
import CharCount from 'src/Components/Common/CharCount/CharCount';

export const CharCountDisplay = () => <CharCount {...{ chars: 3, maxLength: 10 }} />;

export default CharCountDisplay;
