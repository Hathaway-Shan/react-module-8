# Planning

## Component Hierarchy

1. Main
2. RGB

## Component Descriptions

### Main

- Main should contain the primary display for the purposes of this project it should be wrapped in  
Browser Router tags and contain the Switch tags with the Route tags ie:

```js
function App() {
  // TODO: Add routes to books & views
  return (
    <Router>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/books" component={BookList} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}
```

- you will need to import BrowserRouter, Route, and Switch from react-router-dom as well as the R, G, and B components

### RGB

- Each of these components will have a color value you determine ahead of time
- clicking on the link, running the route, of any color should change the background color of the page
- Each page should have links to the one another allowing the user to shift between backgrounds from any page
- the color of the background of each page should be taken from Params instead of implementing this in any other fashion

### Use Params

- in order to properly utilize the UseParams hook from React to get our color value we will have to send up the color value as part of 
Params so that it can be destructured in the relevant component ie:

```js
export default function Main() {
  return (
    <Router>
      <header>
        <ul>
          <li>
            <NavLink className='red' to='/rgb/166/28/60'>
              Vivid Burgundy
            </NavLink>
          </li>
        </ul>
      </header>
      <div className='main'>
        <Switch>
          <Route path='/rgb/:r'><Color /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </div>
    </Router>
```

- The component that reads these params can be placed be handled in one Color component or spread over 3 to depending on preference

```js
import { useParams } from 'react-router-dom';

export default function R() {
  const { r, g, b } = useParams();

  return (
    <div className='color' style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h1>
        R: {r} G: {g} B: {b}
      </h1>
    </div>
  );
}
```

- The Params should be sent up in Main and destructured and read in the component

### Work Order

1. Clean out App from template
2. Create Main
3. Get main to display in App
4. Build Color component with links
5. Get first link working to change display from params
6. Get all links working

### Optional challenge use these colors

- #0000FF Blue
- #8A2BE2 BlueViolet
- #7FFF00 Chartreuse
