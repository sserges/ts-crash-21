// Basic Types
let id: number = 5
let company: string = 'Trascompany'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4]

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union
let pid: string | number

pid = 22

pid = 'hello'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid

let customerId = cid as number

// Functions
const addNum = (x: number, y: number): number => {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}

log('rrrrr')
