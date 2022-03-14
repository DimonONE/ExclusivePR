import React, { FC } from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import CategoriesPage from './components/pages/categories-page';

const App: FC = () => (
  <Routes>
    <Switch>
      <Route path="/" component={CategoriesPage} exact />
    </Switch>
  </Routes>
  );

export default App;
