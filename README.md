# to-do-app AKA weekend review 
 
## Redux Setup: 
Since this is a TS React App, to use Redux we need some additional setup: 
### Store: 
with the library [Redux Devtools Extension](https://www.npmjs.com/package/redux-devtools-extension) we are able to set the brower extension without running into typescript issues. Since we don't need to do anything particular with the extension, we can just use the composeWithDevTools() function in the configureStore().
Remember to pass ```configureStore():Store<State, any>```. The Store interface is imported from redux and the State one is your to make. 

 You can take a look at how i setup my  : ```interfaces.ts``` in the repo.
 
**Remember to wrap your <App/> in a Provider.**

### Reducers: 

Oddly, it looks like **you cannot setup your initial state from the store** without running into issues. This is something I investigated for hours, but this solution I found is a combo of many many repos and solutions, many of which were honestly too complex for my taste: 
1. Instead of passing the initial state, in the configureStore(), pass an ```undefined``` value. 
2. In your reducer, declare your initial state using your state interface. 
3. When creating the reducer, pass ```state=initial_state``` (or however you called your variable) as one of the params. 

p.s. I ended up declaring the state as an empty array and therefore not assigning any type. 
Here is how I went about it before deciding to change: 
 ```js
 const basic_state:State = {
	tasks: {
		data: [
			{
				id: "",
				title: "",
				created: "",
				checked: ""
			}
		]
	},
	fullfilled: {
		data: []
	}
}
```
Using the State type on the initial state allowed me to not declare types later in the reducer. When I changed both the tasks and fullfilled values to data: [], I had to declare some typings in the reducer. 

The action passed as a second prop in the reducer is of type Action, which is a custom interface made of type (string, could also be from a list on constants) and payload (what you plan on sending, in my case, tasks.).
The reducer function should return your state, so remember to set that up that after the params.

## Components

I tried to keep the components as simple as possible. 

When handling events, **remember React has its own Event interfaces**
You might try to use ```event.target.value```, but you will fail. When trying to get the value from an input, remember to use the currentTarget prop, which is where you will find what you are looking for. 







