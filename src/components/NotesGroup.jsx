import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note';

function NotesGroup() {
    const note = useSelector((state) => state.notes.filterNote);
  return (
    <div>
          <div className='row row-cols-auto g-4' style={{padding: 80}}>
            {
              note.map((note) => (
                <Note 
                   key = {note.id}
                   {...note}
                  />
              ))
            }
          </div>
    </div>
  )
}

export default NotesGroup