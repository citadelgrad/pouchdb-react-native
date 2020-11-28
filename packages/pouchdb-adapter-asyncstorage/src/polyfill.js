'use strict'
import Buffer from 'buffer'
import 'btoa';
import 'atob';

import 'blob-polyfill';

if (!process.version) process.version = 'core-js'
process.nextTick = process.nextTick || setImmediate
