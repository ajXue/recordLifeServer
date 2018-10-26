const wxConfig = {
  hostname: "https://api.weixin.qq.com/sns/jscode2session",
  appid: "wxdeb0e3ab2383ffd0",
  appSecret: "a9a704274ac60d0366f0d87e3bd868e0",
  grant_type: "authorization_code"
};
const Config = {
  mongodb: "mongodb://127.0.0.1:27017/recordLife",

  code2Session: `${wxConfig.hostname}?appid=${wxConfig.appid}&secret=${
    wxConfig.appSecret
  }&grant_type=${wxConfig.grant_type}`
};
module.exports = Config;
