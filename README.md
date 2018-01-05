# Immootable

Update your data

## API

### apply

```
import {apply} from 'immootable'

const add = (a, b) => a + b
apply(add, [1, 2]) // 3
```

### combine

```
import {combine} from 'immootable'

const add1 = val => val + 1
const divide2 = val => val/2
const foo = combine(add1, divide2)
foo(2) // 2; first divides then adds
```

### curry

Allow currying values for a given function

`function -> function`

```
import {curry} from 'immootable'

const add = curry((a, b) => a + b)
const add1 = add(1)
add1(3) // 4
```

### defaultTo

Returns default value when target value is falsy

`defaultValue -> targetValue -> output`

```
import {defaultTo} from 'immootable'

defaulTo('foo', 1) // 1
defaulTo('foo', 0) // 'foo'
defaulTo('foo', null) // 'foo'
defaulTo('foo', undefined) // 'foo'
```

### get

### has

### log

### passBy

Allows you to introduce side effects in a pipe.

` function -> value -> value`

```
import {passBy} from 'immootable'

const getUserName = combine(
  getName,
  passBy(console.log), // will log the output of getUser and return it
  getUser
)
```

### pipe

### reverse

### set

### update

## Composable functions

Every method exposed allow curry (except `curry`, `pipe` and `combine`)
