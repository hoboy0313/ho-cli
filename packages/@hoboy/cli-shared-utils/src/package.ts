import { createRequire } from 'module';

/**
 * 命令默认的导出函数
 * @param {string} cwd 上下文
 * @param {Record<string, any>} args 命令行参数
 */
type RunFn = (cwd: string, args: Record<string, any>) => any

/**
 * 动态加载模块，没有模块返回 null
 *
 * @param {string} id 包名称
 * @return {RunFn | null}
 */
const safeRequire = (id: string): RunFn | null => {
  try {
    return createRequire(id);
  } catch (e) {
    return null;
  }
};

export {
  safeRequire,
};
