var Validate = require('git-validate');

Validate.copy('js/eslintrc', '.eslintrc');
Validate.copy('js/eslintrc-strict', '.eslintrc-strict');

Validate.installScript('eslint', 'eslint .');
Validate.installScript('eslint-strict', 'eslint -c .eslintrc-strict .');

Validate.configureHook('pre-commit#dev', ['eslint']);
Validate.configureHook('pre-push#master', ['eslint-strict']);
