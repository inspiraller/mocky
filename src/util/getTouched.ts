const getTouched = (submitTouched: boolean, touched?: boolean): boolean =>
  submitTouched || touched === true;

export default getTouched;
