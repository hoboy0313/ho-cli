import {chalk, log, info, warn, error} from '../src'

it('logger', () => {
  const spyLog = jest.spyOn(console, 'log');
  const spyInfo = jest.spyOn(console, 'info');
  const spyWarn = jest.spyOn(console, 'warn');
  const spyError = jest.spyOn(console, 'error');

  const shortText = 'test'

  log(shortText);
  info(shortText);
  // warn(shortText);
  // error(shortText);

  function logTest(str: string, type: string, bgColor: string, color = 'white') {
    // @ts-ignore
    return [[`${chalk[bgColor][color](` ${type} `)} test`]];
  }

  // expect(spyLog.mock.calls).toEqual(logTest(shortText, 'LOG', 'bgWhite', 'black'));
  // expect(spyInfo.mock.calls).toEqual(logTest(shortText, 'INFO', 'bgBlue'));
  console.log('1', logTest(shortText, 'WARN', 'bgYellowBright'));
  expect(spyWarn.mock.calls).toEqual(logTest(shortText, 'WARN', 'bgYellowBright'));
  // expect(spyError.mock.calls).toEqual(logTest(shortText, 'ERROR', 'bgRed'));

})
