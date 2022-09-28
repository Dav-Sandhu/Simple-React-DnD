import { useDrag, useDrop } from "react-dnd"
import React, { useState, useRef } from "react"

const Item = ({ id, swap }) => {
  
  const [, drop] = useDrop({
    accept: 'number',
    hover: (item) => {
      swap(item.id, id)
    }
  })
  
  const [, drag] = useDrag({
    type: 'number',
    item: { id },
  })

  const ref = useRef(null)
  const dndRef = drag(drop(ref))

  return(
    <div className="item" ref={dndRef}>{id}</div>
  )
}

const Items = ({initialState}) => {

  const [items, setItems] = useState(initialState)

  const swap = (item1, item2) => {

    setItems(prev => {
      let temp = []
      prev.forEach((i) => {
        if (i === item1){
          temp.push(item2)
        }else if (i === item2){
          temp.push(item1)
        }else{
          temp.push(i)
        }
      })

      return temp
    })
  }

  return(
    <div className="items" >
      {items.map(i => {
        return(
          <div 
            key={i}>
            <Item id={i} swap={swap} />
          </div>
        )
      })}
    </div>
  )
}

export default Items