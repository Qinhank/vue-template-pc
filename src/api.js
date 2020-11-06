export default {
  /** ****数据模块: Record Controller ******/
  // 根据设备分页查询记录（get）
  terraceRecordFindPageByDevice: '/terrace/record/findPageByDevice',

  /** ****后台管理-01: 后台认证 ******/
  // 登录（post）
  backgroundAuthLogin: '/background/auth/login',

  /** ****安卓: Android Device Controller ******/
  // 上传设备信息（post）
  deviceDeviceSet: '/device/device/set',
  // 批量上传数据（post）
  deviceRecordBatchCreate: '/device/record/batchCreate',

  /** ****设备模块-01: Device Controller ******/
  // 添加设备（post）
  terraceDeviceAdd: '/terrace/device/add',
  // 注销设备（post）
  terraceDeviceCancel: '/terrace/device/cancel',
  // 获取我得设备（get）
  terraceDeviceGet: '/terrace/device/get',

  /** ****认证模块-01: 登录 ******/
  // 微信jsapi授权签名（get）
  terraceAuthLoginGetJsapiTicket: '/terrace/auth/login/getJsapiTicket',
  // 微信登录（post）
  terraceAuthLoginLoginByWinxin: '/terrace/auth/login/loginByWinxin'
}
