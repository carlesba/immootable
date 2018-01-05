# Immootable

```js
/**
 * Example
 */
// import createReducer from '../create-reducer'
import {append, combine, get, set} from 'immootable'

// user -> id
const getUserId = get(['user', 'id'])
// user -> state -> state
const addUserToState = set(['users', getUserId(user)])
// user -> state -> state
const addUserIdToList = user => update(
  'list',
  // list -> list
  pipe(append, getUserId(user))
)

const actions = {
  ADD_USER: (state, {payload: { user }}) => {
    const action = combine(
      addUserIdToList(user),
      addUserToState(user)
    )
    return action(state)
  }
}

export default createReducer(actions, {list: [], users: {}})
```

## API

### append

```
import {append} from 'immootable'

const input = ['a', 'b']
const appendC = append('c')
appendC(input) // ['a', 'b', 'c']
```

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

### insert

`index -> value -> list -> list`

```
import {insert} from 'immootable'

const list = ['a', 'c']
insert(1, 'b', list) // ['a', 'b', 'c']
```

### log

### omit

`(key|Array<key>) -> (Object|Array) -> (Object|Array)`

```
import {omit} from 'immootable'
// with arrays
const cutthroat = omit(0)
cutthroat(['a', 'b', 'c']) // ['b', 'c']

// with objects
const anonymous = omit(['name', 'id'])
anonymous({ name: 'moo', id: 42, foo: true }) // { foo: true }
```

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

### prepend

`value -> list -> list`

```
import {prepend} from 'immootable'
const list = ['b', 'c']
prepend('a', list) // ['a', 'b', 'c']
```


### reverse

### set

### update

## Composable functions

Every method exposed allow curry (except `curry`, `pipe` and `combine`)
