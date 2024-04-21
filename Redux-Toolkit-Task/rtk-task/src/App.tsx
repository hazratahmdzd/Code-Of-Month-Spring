import './App.css'
import { addNote, noteProps, removeNotes } from './Redux/notes.slice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './Redux';


function App() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state: RootState) => state.notes)

  

  const handleSubmit = () => {
    const input = document.getElementById('input') as HTMLInputElement;
    dispatch(addNote({id: parseInt(localStorage.getItem("id") || "1"), title: input.value, important: false}))
    input.value = '';
    localStorage.setItem("id", (parseInt(localStorage.getItem("id") || "1") + 1).toString());
  }

  return (
    <>
    <h1>Redux Toolkit</h1>

    <input type="text" id='input'/>
    <button onClick={handleSubmit}>Add</button>

    <ul>
      {notes.map((note: noteProps) => (
        <li>
          {note.title}
          <button onClick={(() => dispatch(removeNotes(note.id)))}>dleete</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
