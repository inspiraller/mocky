import React, { ComponentType, ButtonHTMLAttributes } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { TStyles } from 'src/Main/Styles/Theme';

export type StyElem = keyof JSX.IntrinsicElements;
export type TButton = ButtonHTMLAttributes<HTMLButtonElement>;

export const withComp = <P extends {}, S extends TStyles>(
  Comp: ComponentType<P>,
  styles: S
): StyledComponent<ComponentType<P>, {}> => styled(Comp)`
  ${styles}
`;

export const withElem = (Comp: StyElem, styles: TStyles): StyledComponent<StyElem, {}> => styled(
  Comp
)`
  ${styles}
`;

export const withButton = (styles: TStyles): StyledComponent<'button', {}> => styled.button`
  ${styles}
`;

export const withInput = (styles: TStyles): StyledComponent<'input', {}> => styled.input`
  ${styles}
`;

export const withTextArea = (styles: TStyles): StyledComponent<'textarea', {}> => styled.textarea`
  ${styles}
`;

export const withSelect = (styles: TStyles): StyledComponent<'select', {}> => styled.select`
  ${styles}
`;

export const withOption = (styles: TStyles): StyledComponent<'option', {}> => styled.option`
  ${styles}
`;
