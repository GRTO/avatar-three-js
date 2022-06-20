module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint src --max-warnings=0',
    'npm run test --watchAll=false',
    () => 'tsc-files --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
