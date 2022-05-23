import React from 'react'
import LineItem from './LineItem.jsx/LineItem'
import { StyledList } from './List.Styled'

const ListItems = ({ items, handleChecked, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <StyledList>
          {items.map(item => (
            <LineItem
              key={item.id}
              item={item}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          ))}
        </StyledList>
      ) : (
        <p>There is no Item</p>
      )}
    </>
  )
}

export default ListItems
