function sampleFunc () {
  console.log (`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`)
}

function modificator(func) {
  return func.bind(func, 'test', 'sample')
}

testFunc = modificator(sampleFunc)

testFunc()