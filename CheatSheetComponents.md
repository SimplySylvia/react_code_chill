# Cheat Sheet - React Components 

There are two main classifications of components. **Static** and **Dynamic**. 

**Static** components do not update or change. There are no state to them and they most likely receive props and are view only. 

**Dynamic** components do update with user interaction. They contain state and adjust the ui based on the state content.


## Component Coding Styles

| Name | Description | Benefits |
| -------- | -------- | ------- |
| Class     | Dynamic components that need state are defined with the class syntax and must be extended from the Component class within react.     | Has access to state and life cycle methods. |

#### example 

```jsx
class Name extends Component {
    state = {
        // default state
    } 
    
    render(){
        return (
        // content to render
        )
    }
}
```

---


| Name | Description | Benefits |
| -------- | -------- | ------- |
| Functional | Static components that do not need to update with state changes are defined with he functional syntax.  | Lighter than class based components. |

*This has changed with hooks. With the power of hooks functional components can tap into state and become dynamic.*

#### example 

```jsx
function Name (props) {
    return (
        // content to render    
    )
}
```



## Component Types

| Name | Description |
| -------- | -------- |
| Container | The role of this component is to fetch and store information from the database into state. This state is passed down into another component as props. | 
| Computational | The role of this component is to receive an array of data as props (usually from a container) and generate a list of components based on that data.  | 
| Presentational     |   The role of this component is to usually receive props to display a ui based on that information, but could also be hard coded ui. Presentational components usually are dynamic and handle user input, but could also be static view only.  | 

