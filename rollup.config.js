import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    entry: 'src/index.js',
    name: 'immutableTools',
    targets: [
      { dest: pkg.main, format: 'cjs' },
      { dest: pkg.module, format: 'es' },
      { dest: pkg.browser, format: 'umd' }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
]
