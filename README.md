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

Returns the value of an Object|Array given a `path` or a key|index

`key|index|Array<key> -> Object|Array -> any`

```
import {get} from 'immootable'

get(0, ['a', 'b']) // 'a'
get([0, 1], [['a', 'b'], 'c']) // 'b'
get(['a', 'b'], { a: { b: 'foo' } } ) // 'foo'
get(['a', 'b'], { aa: { bb: 3 } } ) // undefined
```

### has

Checks if the value pointed by a path is not undefined

`key|index|Array<key> -> Object -> Boolean`

```
import {has} from 'immootable'

has(['a', 'b'], { a: { b: 'foo' } } ) // true
has(['aa', 'b'], { a: { b: 'foo' } } ) // false
const named = has('name')
named({name: 'f', age: 1}) // true
```

### insert

`index -> value -> list -> list`

```
import {insert} from 'immootable'

const list = ['a', 'c']
insert(1, 'b', list) // ['a', 'b', 'c']
```

### log

Logs the second argument and returns it

`Function -> any -> any`

```
import {log} from 'immootable'
const parser = x => `count: ${x}`
const logCount = log(parser)

const add4 = pipe(
  add1,
  add1,
  log,
  add1,
  add1
)
add4(0) // 4
// count: 2
```

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

```
import {pipe} from 'immootable'
const getUserId = pipe(
  getUser,
  getId
)
getUserId({ user: { id: 'id' } }) // 'id
```

### prepend

`value -> list -> list`

```
import {prepend} from 'immootable'
const list = ['b', 'c']
prepend('a', list) // ['a', 'b', 'c']
```


### reverse

```
import {reverse} from 'immootable'
const list = ['b', 'c']
reverse(list) // ['c', 'b']
```

### set

```
import {set} from 'immootable'

const setNick = set('nick')
const input = {repos: [], nick: ''}
const output = setNick('moo', input) // {repos: [], nick: 'moo'}
ouput.repos === input.repos // true
output === input // false

const house = {door: { isOpen: true } }
const closeDoor = set(['door', 'isOpen'], false)
closeDoor(house) // {door: { isOpen: false } }

```

### update

```
import {update} from 'immootable'

const switchDoor = update(
  ['door', 'isOpen],
  (isOpen) => !isOpen
)
const house = {door: { isOpen: true } }
switchDoor(hosue) // {door: { isOpen: false } }

```

## Composable functions

Every method exposed allow curry (except `curry`, `pipe` and `combine`)
