# Cheat Sheet - Component Lifecycle Methods

## Commonly Used

### Mounting Methods

#### Constructor()
- set up initial state
- bind event handler methods to instance

*NOTE: Do not use setState here*

#### render()
- Allowed in render
    - React Elements
    - Arrays and Fragments
    - Strings/numbers
    - Booleans or null
- Keep render as pure as possible
    - No side effects like ajax calls

*NOTE: Do not use setState here will cause infinite loop*

#### componentDidMount()
- runs immediately after component output
- allows component to render then do an action
    - this is best time for side effects including ajax calls
        
*NOTE: You can run setState here. Initial state should be done in constructor. Use componentDidMount and setState together for network requests*

### Updating Methods

#### componentDidUpdate(prevProps,prevState, snapshot)
- called after props have updated **ONLY** after the first render
- Good place for network requests as long as you compare the prop changes to prevent infinite loop

*NOTE: You can run setState here. You want to only run setState if props have changed to prevent an infinite loop*

### Unmounting Methods

#### componentWillUnmount()
- runs right before component is removed from dom
- common use is remove event listeners or component clean up
    
*NOTE: Do not run setState here. Component is being terminated.*

## Rarely Used

####  static getDerivedStateFromProps(props,state)
- exists for where the state depends on changes in props over time
    - Example: Component checks against props and next children to animate in or out
- if you are performing a side effect like an ajax call in response to a prop change use componentDidUpdate instead

*NOTE: Can use setstate here.*

#### shouldComponentUpdate(nextProps,nextState)
- returns a boolean letting react know if it should update
- if you have a component that will never update you can set false here
- render() and componentDidUpdate() will not run if this returns false

*NOTE: Can not use setstate here. Can only return true or false.*

#### getSnapshotBeforeUpdate(prevProps,prevState)
- in specific occasions this will capture data from dom before it is changed
    - Example: scroll position
- snapshot value or null should be returned
- this is where componentDidUpdate gets it's snapshot data

*NOTE: Can not use setstate here. Only return snapshot value or null. *

#### componentDidCatch(error,info)
- used in components to turn them into Error Boundaries
- catches errors in children compnent tree that crashed
- errors are caught in rendering, lifecycle methods, and in constructors

*NOTE: Can not use setState here.*
