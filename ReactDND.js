import {useState} from 'react'

const ReactDND = ({items}) => {

  const [items, setItems] = useState(items)
  const [cur, setCur] = useState(null)
  const [dragEl, setDragEl] = useState(null)

  const handleEnter = (e) => {
    e.preventDefault()
    setCur(e.target)
  }

  const handleLeave = (e) => {
    e.preventDefault()
    setCur(null)
  }

  const handleOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()

    const el_1 = parseInt(dragEl.innerText)
    const el_2 = parseInt(cur.innerText)

    setItems(prev => {
      let data = [...prev]

      let index1 = data.indexOf(el_1)
      let index2 = data.indexOf(el_2)
    
      data[index2] = el_1
      data[index1] = el_2

      return data
    })
  }

  return(
    <div className='dnd'>
      <ul>
        {items.map(i => {return(
          <li 
            key={i}

            onDragStart={(e) => setDragEl(e.target)}
            onDragEnter={handleEnter}
            onDragLeave={handleLeave}  
            onDragOver={handleOver}
            onDrop={handleDrop}

            draggable
            droppable="true">{i}</li>
        )})}
      </ul>
    </div>
  )
}

export default ReactDND
