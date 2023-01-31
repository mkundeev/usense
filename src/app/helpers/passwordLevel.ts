import { CONST } from '../const/const';
const passwordLevel = (password: string) => {
  const symbols = CONST.SYMBOLS;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-z]/i.test(password);
  const hasSymbols = symbols.test(password);
  const level = Number(hasNumber) + Number(hasLetter) + Number(hasSymbols);
  return level;
};

export default passwordLevel;
