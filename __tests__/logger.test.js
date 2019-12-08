'use strict';

const logger = require('../logger/logger.js');
const spy = jest.spyOn(console, 'log');

describe('logger is awesome', () => {
  it('Its ALIVE!', () => {
    expect(true).toBeTruthy();
  });
});
xdescribe('Logger functions are working', () => {
  it('Save Console Logs', () => {
    const spy = jest.spyOn(console, 'log');
    logger.saveLog('path');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('Error Console Logs', () => {
    const spy = jest.spyOn(console, 'log');
    logger.errorLog('error');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});


