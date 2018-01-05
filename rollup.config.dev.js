import buble from 'rollup-plugin-buble'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  moduleName: 'immutable-tools',
  plugins: [
    buble({
      objectAssign: 'Object.assign',
      exclude: ['node_modules/**'],
      transforms: { modules: false }
    })
  ]
}

