import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://sujiefs.com/';
const apiM='http://192.168.0.100:8080';
/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//将用户数据存入数据库
const user2db = (params) => wxRequest(params,apiM + "/api/wechat/saveUser");

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiM + "/api/wechat/jscode2session");
const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");
//获取accessToken
const getAccessToken = (params) => wxRequest(params, apiM + "/api/wechat/getAccessToken");

//获取二维码
const getqrCode=(params) => wxRequest(params, apiM + "https://api.weixin.qq.com/wxa/getwxacode?access_token=ACCESS_TOKEN");
//商品接口---begin
//首页发现商品接口
const hostGoodsList = (params) => wxRequest(params, apiM + '/product/getAll');
const getHomeDisvocerList = (params) => wxRequest(params, apiM + '/pic/discoverList');
//查询商品列表
const getGoodsList = (params) => wxRequest(params, apiM + '/product/searchkeyword');

//查询商品详情信息
const goodsDetail = (params) => wxRequest(params, apiM + '/product/getById');
//商品加入购物车
// const addCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/add');
const addCart = (params) => wxRequest(params, apiM + '/orderitem/add');
//用户的购物车商品列表
// const cartList = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/list');
const cartList = (params) => wxRequest(params, apiM + '/orderitem/getCartList');
//购物车的商品选中状态
const cartCheck = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/check');
//购物车的商品选中状态(全选)
const cartCheckAll = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/checkAll');
//购物车的商品删除
// const cartDel = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/delete');
const cartDel = (params) => wxRequest(params, apiM + '/orderitem/deleteCartInfo');
//购物车的商品数量更新
const cartUpdateNum = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/updateNum');
//直接购买商品
const preOrder = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/commitData');

//立即购买
const purchaseNow = (params) => wxRequest(params, apiM + '/orderitem/purchaseNow');

//支付前生成订单
// const saveByCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/saveByCart');
const saveByCart = (params) => wxRequest(params, apiM + '/order/creatOrder');

//支付统一下单
const toPay = (params) => wxRequest(params, apiMall + '/wepay/toPay');

//商品收藏
const goodsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/add');

//商品收藏删除
const goodsUnFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/delete');

//商品是否已收藏
const goodsIsFavorite = (params) => wxRequest(params, apiM + '/product/goodsFavorite');

//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiMall + '/api/userSign/signInfo');
const doSign = (params) => wxRequest(params, apiMall + '/api/userSign/doSign');
//获取最近七天签到情况
const getSignDate = (params) => wxRequest(params, apiMall + '/api/userSign/getSignDate');

//用户积分信息
const pointInfo = (params) => wxRequest(params, apiMall + '/api/userPoint/pointInfo');

//用户足迹信息
const browseInfo = (params) => wxRequest(params, apiMall + '/api/userBrowse/browseInfo');
//添加用户足迹
const addBrowser = (params) => wxRequest(params, apiMall + '/api/userBrowse/add');
//添加用户足迹
const delUserBrowser = (params) => wxRequest(params, apiMall + '/api/userBrowse/delete');

//用户收藏的商品
const favoriteInfo = (params) => wxRequest(params, apiMall + '/api/goodsFavorite/favoriteInfo');

//用户消息
const messageInfo = (params) => wxRequest(params, apiMall + '/api/systemMessage/messageInfo');

//用户手机绑定
const registerUser = (params) => wxRequest(params, apiMall + '/api/userCenter/register');
//发送短信
const sendRandCode = (params) => wxRequest(params, apiMall + '/api/sms/send');

//用户是否绑定手机号
// const getUserInfo = (params) => wxRequest(params, apiMall + '/api/userCenter/getUserInfo');
const getUserInfo = (params) => wxRequest(params, apiM + '/user/getUserInfo');

//用户收货地址
// const getUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/list');
const getUserAddress = (params) => wxRequest(params, apiM + '/address/getAddress');

//保存用户收货地址
// const saveAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/saveOrUpdate');
const saveAddress = (params) => wxRequest(params, apiM + '/address/saveAddress');

//修改用户收货地址
const updateAddress = (params) => wxRequest(params, apiM + '/address/updateAddress');

//用户收货地址根据id查询
// const receiverInfoById = (params) => wxRequest(params, apiMall + '/api/receiverInfo/receiverInfoById');
const receiverInfoById = (params) => wxRequest(params, apiM + '/address/receiverInfoById');

//根据Id删除收货地址
// const delUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/operation');
const delUserAddress = (params) => wxRequest(params, apiM + '/address/delAddressById');

//根据用户id查询默认地址
const  getDefaultAddressByOpenid = (params) => wxRequest(params, apiM + '/address/getDefaultAddress');

//查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/add');
//查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiMall + '/api/searchkeyword/list');
//查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/clear');

//查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiM + '/order/getOrderAll');

//查询我的订单数量
const getMyOrderSize = (params) => wxRequest(params, apiM + '/order/getOrderSize');

//根据订单号查询详情
const getOrderInfo = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getOrderDetail');

//根据订单号查询详情
// const getPayOrderDetail = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getPayOrderDetail');
const getPayOrderDetail = (params) => wxRequest(params, apiM + '/order/getOneOrder');

//根据订单号删除订单
const editOrderInfo = (params) => wxRequest(params, apiM + '/order/delOrder');

//根据订单号查询物流
const orderExpressInfo = (params) => wxRequest(params, apiMall + '/api/orderExpress/orderExpressInfo');

//查询用户的已订购产品
const goodsUserOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/goodsUserOrderList');

//退货操作
const refundApply = (params) => wxRequest(params, apiMall + '/api/mall/refund/saveRefundApply');

//用户相关信息--end

//商品分类--begin
//一级分类
const rootCtegoryList = (params) => wxRequest(params, apiMall + '/api/mall/rootCtegoryList');
//二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList');
//商品分类--end
//查询广告列表
const getAdList = (params) => wxRequest(params, apiM + '/getImglist');

export default {
  hostGoodsList,
  getDiscoverList,
  getHomeDisvocerList,
  getGoodsList,
  goodsDetail,
  wxJsCode2Session,
  user2session,
  userSginInfo,
  doSign,
  addCart,
  cartList,
  cartCheck,
  cartCheckAll,
  cartDel,
  cartUpdateNum,
  preOrder,
  refundApply,
  pointInfo,
  browseInfo,
  addBrowser,
  delUserBrowser,
  favoriteInfo,
  messageInfo,
  registerUser,
  sendRandCode,
  getUserInfo,
  getUserAddress,
  saveAddress,
  receiverInfoById,
  addSearchKeyword,
  searchKeywordList,
  clearSearchKeyword,
  getMyOrderList,
  saveByCart,
  toPay,
  rootCtegoryList,
  childGoodsCatetoryList,
  getOrderInfo,
  editOrderInfo,
  goodsUserOrderList,
  orderExpressInfo,
  delUserAddress,
  goodsFavorite,
  goodsUnFavorite,
  goodsIsFavorite,
  getMyOrderSize,
  getPayOrderDetail,
  getAdList,
  getSignDate,
  getAccessToken,
  user2db,
  updateAddress,
  getDefaultAddressByOpenid,
  purchaseNow
}
