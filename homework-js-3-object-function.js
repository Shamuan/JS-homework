function test () {
  return arguments ? arguments : arguments.callee
}

test(10, false, "google")
