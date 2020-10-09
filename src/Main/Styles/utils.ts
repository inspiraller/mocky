type TUtil = (prop: string) => string;

export const Center: TUtil = maxTextWidth => `
  margin: 0 auto;
  width: ${maxTextWidth};
`;

type TFontSize = (fontSize: number) => string;
export const FontSize: TFontSize = fontSize => `
  font-size: ${fontSize * 10}px;
  font-size: ${fontSize}rem;
`;
