
export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  console.log(el.className)
  console.log('判断有没有此class')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(elclassName)) {
    return
  }
  let newClass= el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}