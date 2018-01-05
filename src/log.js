import curry from './curry'

const log = (parser, x) => {
  console.log(parser ? parser(x) : x)
  return x
}

export default curry(log)
