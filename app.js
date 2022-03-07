/**
 * TODO
 * React History
 * React vs ReactDOM
 * == Components == 
 * - types (Code style)
 *    -- functional -> lightweight returns react elements 
 *    -- class based -> heavier returns react elements with lifecycle methods (State)
 * - data within components 
 *    -- props 
 *    -- state
 * - roles 
 *    -- container 
 *    -- computational 
 *    -- presentational
 *    -- page
 * - Ideology F.I.R.S.T. 
 *    -- Focused
 *    -- Independent 
 *    -- Reusable
 *    -- Small 
 *    -- Testable   
 * 
 */

/* === Functional === */
// are used for static components a.k.a stateless 
// NO STATE HERE* :(
// *with react 16.5 react hooks -> allow us to hook into lifecycle methods  
// must always return jsx

function App(props){
  return (
    <div>
      <h1>Hello World</h1>
      <h3>Welcome.. {props.user.name}</h3>
     
      {/* assign props? */}
      <Greeter name="Alan" />
      <Greeter name="Paul" />

    </div>
  )
}

/* === Class Based === */
// used for dynamic components 
// stateful -> state can change and they can rerender 
// lifecycle methods 
// return react element 

// NOTE -> always need a render method to return jsx 

class Greeter extends React.Component {
  constructor(...args){
    super(args);

    // default state 
    this.state = {
      isVisible: true
    }

  }

  toggleVisibility = () => {
    console.log("Clicked");
    // how do i change state? 
    this.setState({
      isVisible: !this.state.isVisible
    });
  }


  render(){
    return (
      <div>
        <h2>Hello {this.props.name}</h2>
        <button onClick={this.toggleVisibility}>Click me!</button>
        {this.state.isVisible && <p>You can see me!</p>}
      </div>
    )
  }
}



/* === ReactDOM === */
// entire job is to manage the DOM 
// update dom when state changes 
// mount our application



const appEl = document.getElementById("app");

// .render(component, target to mount)
ReactDOM.render(<App user={{name:"dalton", email: "example@example.com"}}/>, appEl);