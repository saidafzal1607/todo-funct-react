import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import GlobalStyled from './Styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import './App.css';

const App = () => {

  const theme = {
    colors : {
      header: 'cyan',
      main: '#cecdcd',
      footer: 'lightgreen'
    }
  }

  const [items, setItems] = useState([])


  useEffect(() => {
    const listItems = JSON.parse(localStorage.getItem('shoppingList'))||[]
    setItems(listItems)
    
  }, []);

  const handleChecked = (id) =>{
    const listItems = items.map((item=> item.id === id ? {...item, checked : !item.checked } : item))
    setAndSave(listItems)
  }

  const handleDelete = (id) =>{
    const listItems = items.filter((item)=> item.id !== id);
    setAndSave(listItems)
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
      setAndSave(listItems);
  }

  const setAndSave = (newItems) =>{
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
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