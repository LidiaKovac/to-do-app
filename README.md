# to-do-app AKA weekend review 
## Topics :
  - Redux 
  - Redux Thunk
  - Hooks
  - Socket.IO BE/FE
  - Typescript BE/FE
  - Auth / OAuth
## Frontend:
  - Step 1: CRA - Typescript 
  - Step 2: Install Redux and Redux Thunk: 
### Redux Setup: 
Since this is a TS React App, to use Redux we need some additional setup: 

with the library [Redux Devtools Extension](https://www.npmjs.com/package/redux-devtools-extension) we are able to set the brower extension without running into typescript issues. Since we don't need to do anything particular with the extension, I just used the composeWithDevTools() function in the export instead of declaring it as a constant.

To setup your initial state, export it as namespace from another file. I used the reducer file, but you can setup a new one if you think it's the case.

Remember to also set up a State interface and one for what you plan to put in the state. This is my example of  ```interfaces.ts``` : 
```js 
export interface State {
    tasks: {
        data: Array<Task>
    },
}

export interface Task {
    id: String,
    title: String,
    created: String,
    checked: String
}
import moment from "moment"
import uniqid from "uniqid"

export namespace initialState {
    tasks: {
        data: [{
        id: uniqid(),
        title: "",
        created: moment().format("DD/MM"),
        checked: moment().format("DD/MM")
    }]}
}
```




