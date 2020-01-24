var exec = require('cordova/exec')

exports.login = function login (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'login', permissions)
}
