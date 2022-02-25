import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CardsPage from './components/CardsPage';
import EventsPage from './components/EventsPage';
import NavigationPanel from './components/NavigationPanel';
import TodoItemPage from './components/TodoItemPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UsersPage from './components/UsersPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<NavigationPanel />}/>
        <Route path={'/users'} element={<UsersPage />}/>
        <Route path={'/users/:id'} element={<UserItemPage />}/>
        <Route path={'/todos'} element={<TodosPage />}/>
        <Route path={'todos/:id'} element={<TodoItemPage />}/>
        <Route path={'/events'} element={<EventsPage />}/>
        <Route path={'/card'} element={<CardsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
