import  ReactDOM from "react-dom";
import React from "react";

const ThemeContext = React.createContext()


function Display({theme}) {

 return(
		<ThemeContext.Consumer>
		{theme=><div>Theme is {theme}</div>}
		</ThemeContext.Consumer>
) 
}
function App(){
	const theme="light"
	return(
		<ThemeContext.Provider value="light">
			<div className="App">
			<Display/>
			<Display/>
		</div>
		</ThemeContext.Provider>
	)
}

ReactDOM.render(<App/>, document.querySelector("#root"))