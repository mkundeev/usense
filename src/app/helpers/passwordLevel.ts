const passwordLevel = (password: string) => {
  const symbols = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-z]/.test(password);
  const hasSymbols = symbols.test(password);
  const level = Number(hasNumber) + Number(hasLetter) + Number(hasSymbols);
  return level;
};

export default passwordLevel;
