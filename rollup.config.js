import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs', name: 'immootable.cjs' },
      { file: pkg.module, format: 'es', name: 'immootable.es' },
      { file: pkg.browser, format: 'umd', name: 'immootable.umd' }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
]
