
import  ReactDOM from "react-dom";
import React, {useContext} from "react";

const ThemeContext = React.createContext()
const NumberContext=React.createContext()

function Display() {
const theme=useContext(ThemeContext)
const number =useContext(NumberContext)
return <div>
	Theme value: {theme}, Number: {number}
</div>

}

function App(){
	const randoms=Math.floor(Math.random()*1000)
	return(
		<NumberContext.Provider value={randoms}> 
		<ThemeContext.Provider value="Blue">
			<div className="App">
			<Display/>
			<Display/>
		</div>
		</ThemeContext.Provider>
		</NumberContext.Provider>
	)
}

ReactDOM.render(<App/>, document.querySelector("#root"))