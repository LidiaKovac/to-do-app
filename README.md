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

Remember to also set up a State interface and one for what you plan to put in the state. You can take a look at how i setup my  : ```interfaces.ts``` in the repo. 


Now let's move on to components: for the react-router-dom props, you need to use the RouteProps interface (imported from react-router-dom), for your props, you should use the same interface as the state. I named them differently and passed them as different params in the functional component  


