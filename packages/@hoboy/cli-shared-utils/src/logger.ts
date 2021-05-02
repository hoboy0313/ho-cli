import chalk from 'chalk';
import stripAnsi from 'strip-ansi';

/**
 * 格式化输出样式，保持多行第一个字符位置相同
 * @param {string} label 标签，LOG | INFO | WARN | ERROR
 * @param {string} msg 打印信息
 * @returns {string}
 */
const format = (label: string, msg: string) => {
  return msg.split('\n').map((line, i) => {
    return i === 0
      ? `${label} ${line}`
      : line.padStart(stripAnsi(label).length + line.length + 1);
  }).join('\n');
};

const log = (msg: string) => {
  console.log(format(chalk.bgWhite.black(' LOG '), msg));
};

const info = (msg: string) => {
  console.info(chalk.bgBlue.white(' INFO '), msg);
};

const warn = (msg: string) => {
  console.warn(chalk.bgYellowBright.white(' WARN '), msg);
};

const error = (msg: string) => {
  console.error(chalk.bgRed.white(' ERROR '), msg);
};

const logger = {
  log,
  info,
  warn,
  error,
};

export {
  log,
  info,
  warn,
  error,

  logger,
};
