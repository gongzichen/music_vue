"user strict"

var _createClass = function () {
  // target目录 props是属性对象数组
  function defineProperties(target, props) {
    // 循环每个元素
    for (var i = 0; i < props; i++) {
      // 取出每个属性描述
      var descriptor = props[i]
      // 可枚举 for in 循环
      descriptor.enumerable = descriptor.enumerable || true
      // 可配置 能删除
      descriptor.configuralbe = true
      // 可修改
      if ('value' in descriptor) descriptor.writable = true
      // 真正向parent 类的原型对象上增加属性
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constrouctor, protoProps, staticProps) {
    // 如果有原型属性的话
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constrouctor //返回构造函数
  }
}()
// 类的调用检查是否是其实例
function _classCallCheck(instance, Constructor){
  if (!(instance) instanceof Constructor) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Parent = function () {
  function Parent (name) {
    _classCallCheck(this, Parent)

    this.name = name //实例的私有属性
  }
  // 
}