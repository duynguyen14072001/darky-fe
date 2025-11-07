export const PASSWORD_REGEX = {
  UPPER_CASE: /[A-Z]/,
  LOWER_CASE: /[a-z]/,
  NUMBER: /[0-9]/,
  SPECIAL_CHAR: /[!@#$%^&*(),.?":{}|<>]/,
};
// Must contain at least 3 of the following: a digit, a lowercase letter, an uppercase letter, or a special character (including space)
export const REGEX_PASSWORD =
  /^(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])|(?=.*[a-z])(?=.*[0-9])(?=.*[\W_])|(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])).+$/;
export const REGEX_FLOAT = /^-?\d+(\.\d+)?$/;
export const REGEX_UNSIGNED_FLOAT = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/;
export const REGEX_NUMBER = /^([0-9\s]*)$/;
export const REGEX_SIGNED_NUMBER = /^-?[0-9]+$/;
export const REGEX_NUMBER_AND_DASH = /^([0-9\s-]*)$/;
export const REGEX_MUST_HAS_HYPHEN = /.*-.*?/;
export const REGEX_FORMAT_PRICE = /\s\s+|,|[^0-9]/g;
export const REGEX_TEL_DASH = /^(0\d{1,4}-\d{1,4}-\d{3,4})$/;
export const REGEX_FAX_DASH = /^(\d{2})(\d{4})(\d{4})$/;
export const REGEX_DATE = /^\d{4}-(0[1-9]|1[0-2])$/;
export const REGEX_EMAIL =
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
