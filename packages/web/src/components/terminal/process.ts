import { LaunchScriptsOptions } from '@ocsjs/scripts';
import { ChildProcess } from 'child_process';
import { ITerminal } from '.';
import { Page } from 'playwright';
import { message } from 'ant-design-vue';
import { remote } from '../../utils/remote';
import { path } from '../file/File';
import { store } from '../../store';

const childProcess = require('child_process') as typeof import('child_process');

/**
 * 运行进程
 */
export class Process {
  shell: ChildProcess | undefined
  launched: boolean = false
  options?: LaunchScriptsOptions
  uid: string
  logsPath: string

  constructor (uid: string, logsPath: string) {
    this.uid = uid;
    this.logsPath = logsPath;
  }

  /**
   * 使用 child_process 运行 ocs 命令
   */
  init (xterm: ITerminal) {
    const target = path.join(remote.app.call('getAppPath'), './script.js');

    const shell = childProcess.fork(target, { stdio: ['ipc'] });
    shell.stdout?.on('data', (data: any) => xterm.write(data));
    shell.stderr?.on('data', (data: any) => remote.logger.call('error', String(data)));
    this.shell = shell;
  }

  /**
   * 给子进程发送信息
   * @param action 事件名
   * @param data 数据
   */
  send (
    action: 'launch' | 'close' | 'call',
    data: LaunchScriptsOptions | { name: keyof Page; args: any[] } | undefined
  ) {
    console.log('process send :', { action, data });

    this.shell?.send(
      JSON.stringify({
        action,
        data: JSON.stringify(data),
        uid: this.uid,
        logsPath: this.logsPath
      })
    );
  }

  /** 启动文件 */
  launch (options: LaunchScriptsOptions) {
    const opts = JSON.parse(JSON.stringify(options));

    /** 解析默认字段 */
    opts.launchOptions.executablePath =
      opts.launchOptions.executablePath === 'default'
        ? store.script.launchOptions.executablePath
        : opts.launchOptions.executablePath;
    opts.localStorage = opts.localStorage === 'default' ? store.script.localStorage : opts.localStorage;

    // opts.localStorage.setting.answererWrappers = JSON.parse(opts.localStorage.setting.answererWrappers);
    console.log('opts', opts);

    this.send('launch', opts);
    this.launched = true;
    this.options = opts;
  }

  /** 关闭进程 */
  close () {
    this.send('close', undefined);
    this.launched = false;
  }

  /** 显示当前的浏览器  */
  bringToFront () {
    if (this.launched && this.options) {
      childProcess.exec(
        `"${this.options.launchOptions.executablePath}" --user-data-dir="${this.options.userDataDir}" "about:blank"`
      );
    } else {
      message.warn('必须先启动文件');
    }
  }
}
