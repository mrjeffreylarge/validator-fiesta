var Validate = require('git-validate');

Validate.copy('eslintrc', '.eslintrc');

Validate.installScript('eslint', 'eslint .');
Validate.configureHook('pre-commit', ['eslint']);
