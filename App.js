
import React from 'react'
import Route from './src/Route/mainRoute';
import { ThemeProvider } from './src/provider/appContext'

const App = () => {
  let state = {name:'hello'}
return(
  <ThemeProvider value={state}>
    <Route />
  </ThemeProvider>
)
};
export default App;