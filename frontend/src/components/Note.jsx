import React from 'react';

function Note({note, onDelete}) {
    return <div>
        <p className="note-title">{note.title}</p>
        <p className="note-content">{note.content}</p>
        <p className="note-data">{}</p>
        <button className="delete-button" onClick={() => onDelete(note.id)}>Delete</button>
        
    </div>
}