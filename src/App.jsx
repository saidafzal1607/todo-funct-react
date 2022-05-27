import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import GlobalStyled from './Styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import './App.css';

const App = () => {

  // const API_URL = 'http://localhost:3500/items'

  const theme = {
    colors : {
      header: 'cyan',
      main: '#cecdcd',
      footer: 'lightgreen'
    }
  }

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))


  

  const handleChecked = (id) =>{
    const listItems = items.map((item=> item.id === id ? {...item, checked : !item.checked } : item))
    setAndSaveItems(listItems)
  }

  const handleDelete = (id) =>{
    const listItems = items.filter((item)=> item.id !== id);
    setAndSaveItems(listItems)
  }

  const [newItem , setNewItem] = useState('')

  const handleSubmit = (e) =>{
      e.preventDefault();

      if(!newItem) return;
      //add Item 
      addItem(newItem)
      console.log('hii');
      setNewItem('')
  }

  const addItem = (task) =>{
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = {id, checked:false, task};
      const listItems = [...items, myNewItem]
      setAndSaveItems(listItems);
  }

  const setAndSaveItems = (newItem) =>{
    localStorage.setItem('shoppingList', JSON.stringify(newItem))
    setItems(newItem)
  }
  


  const [search , setSearch] = useState('')


  return (
    <div className='App'>
      <GlobalStyled/>
      <ThemeProvider theme={theme}>
        <Header
          title="To Do List!"
        />
        
        <Main
          search={search}
          setSearch={setSearch}
          newItem={newItem}
          setNewItem={setNewItem}
          items={items}
          setItems={setItems}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
        
        />
        <Footer 
          length = {items.length}
        />
      </ThemeProvider>

    </div>
  );
};

export default App;