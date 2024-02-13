'use strict';

const createExampleUiApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(createExampleUiApp(), 'Hello from createExampleUiApp');
console.info('createExampleUiApp tests passed');
