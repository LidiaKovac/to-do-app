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

with the library [Redux Devtools Extension](https://www.npmjs.com/package/redux-devtools-extension) we are able to set the brower extension without running into typescript issues. Since we don't need to do anything particular with the extension, we can just use the composeWithDevTools() function in the configureStore().

Remember to also set up a State interface and one for what you plan to put in the state. You can take a look at how i setup my  : ```interfaces.ts``` in the repo.

Oddly, you cannot setup your initial state from the store without running into issues. This is something I investigated for hours, but this solution I found is a combo of many many repos and solutions, many of which were honestly too complex for my taste: 
1. Instead of passing the initial state, in the configureStore(), pass an ```undefined``` value. 
2. In your reducer, declare your initial state using your state interface. 
3. When creating the reducer, pass ```state=initial_state``` (or however you called your variable) as one of the params. 

 


Now let's move on to components: for the react-router-dom props, you need to use the RouteProps interface (imported from react-router-dom), for your props, you should use the same interface as the state. I named them differently and passed them as different params in the functional component  


