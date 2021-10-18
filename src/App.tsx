import React, { useState, useMemo, useCallback } from 'react';
import { Item } from './components/item';

function App() {
  const [items, setItems] = useState<string[]>([])
  const [wishList, setWishList] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  function addItemToList() {
    setItems([...items, `item ${items.length}`]);
  }

  const addItemToWishList = useCallback((item: string) => {
    setWishList(state => [...state, item])
  }, [])

  const countItemWithOne = useMemo(() => {
    console.log('teste')
    return items.filter(item => item.includes('1')).length
  }, [items])

  return (
    <div>
      <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem} />
      <button onClick={addItemToList}>add</button>
      <ul>
        {items.map(item => {
          return <Item key={item} onAddToWishlist={addItemToWishList} title={item} />
        })}
      </ul>
      <div>
        contagem: {countItemWithOne}
      </div>
    </div>
  );
}

export default App;
