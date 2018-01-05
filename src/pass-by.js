import curry from './curry'

const passBy = (by, pass) => {
  by(pass)
  return pass
}

export default curry(passBy)
