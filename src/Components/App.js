import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import { DndProvider } from 'react-dnd'
import Items from './Test'

const isTouchDevice = () => {  
  return (('ontouchstart' in window) ||  
    (navigator.maxTouchPoints > 0) ||  
    (navigator.msMaxTouchPoints > 0));  
} 

const App = () => {
  
  const mobile = isTouchDevice()

  return (
    <DndProvider backend={mobile ? TouchBackend : HTML5Backend}>
      <Items initialState={[1, 2, 3, 4, 5]} />
    </DndProvider>
  )
}

export default App

