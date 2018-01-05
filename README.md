# Immootable

Update your data

## API

### apply

```
import {apply} from 'imootable'

const add = (a, b) => a + b
apply(add, [1, 2]) // 3
```

### combine

```
import {combine} from 'imootable'

const add1 = val => val + 1
const divide2 = val => val/2
const foo = combine(add1, divide2)
foo(2) // 2; first divides then adds
```

### curry

Allow currying values for a given function

`function -> function`

```
import {curry} from 'imootable'

const add = curry((a, b) => a + b)
const add1 = add(1)
add1(3) // 4
```

### defaulTo

Returns default value when target value is falsy

`defaultValue -> targetValue -> output`

```
import {defaultTo} from 'imootable'

defaulTo('foo', 1) // 1
defaulTo('foo', 0) // 'foo'
defaulTo('foo', null) // 'foo'
defaulTo('foo', undefined) // 'foo'
```

### get

### has

### keyPath

### log

### pipe

### reverse

### set

### update

## Composable functions

Every method exposed allow curry (except `curry`, `pipe` and `combine`)
