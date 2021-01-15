export default {
  /**
   * @description 平台名字
   */
  platformName: '',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 7,
  /***
   *  @description 平台域
   */
  domain: 'api.jishuibao.net',
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://192.168.1.220:5050',
    pro: 'http://192.168.1.220:5050',
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: '_goods',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: false, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true, // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    },
  },
};