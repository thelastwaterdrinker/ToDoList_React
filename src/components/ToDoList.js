import React, { useState, useEffect } from "react"
import { ListItem } from "./ListItem"
import './styles.css'

//exporting the TodoList to App.js, we are also importing it in App.js again.
//First creating empty array, then the strings that will fill the array.
export const ToDoList = () => {
    const [lists, setLists] = useState([])
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('lists'))
        if (localData)
            setLists(localData)
    }, [])

    //add new items to the list
    const addToList = () => {
        const nlo = {
            title,
            content
        }      
        const newList = [...lists]
        newList.push(nlo)
        setLists(newList)
        localStorage.setItem('lists', JSON.stringify(newList))
    }

    //delete an item from the list
    const removeFromList = (index) => {
        const newList = [...lists]
        newList.splice(index, 1)
        setLists(newList)
        localStorage.setItem('lists', JSON.stringify(newList))
    }

    return (
        <div className="div_container">
            <input onChange={(evt) => setTitle(evt.target.value)} type='text' placeholder="Add topic here..."
            style={{
                backgroundColor: '#8aa29e', 
                borderRadius: 8,
                borderColor: '#3D5467',
                color: 'F1EDEE', 
                paddingTop: 5, 
                paddingBottom: 5, 
                marginBottom: 15,
            }}/>
            <input placeholder="Add details here..."
            style={{
                backgroundColor: '#8aa29e', 
                borderRadius: 8,
                borderColor: '#3D5467',
                color: 'F1EDEE', 
                paddingTop: 5, 
                paddingBottom: 5, 
                marginBottom: 15,
                marginLeft: 10,
            }}
            onChange={(evt) => setContent(evt.target.value)} type='text' />
            <button 
            style={{ 
                backgroundColor: '#3D5467', 
                borderWidth: 3, 
                borderRadius: 5, 
                color: '#F1EDEE', 
                borderColor: '#3d5467', 
                paddingTop: 5, 
                paddingBottom: 5, 
                marginBottom: 15,
                marginLeft: 10,
                }}
            onClick={addToList}>Add</button>
            {
                //in the map what we are doing is similiar to for loop. we loop the items and index numbers one after another.
                 /* for(let i=0; i<5; i++) {console.log(lists[i]) } */
                lists.map((item, index) => {
                    return (
                        <ListItem content={item.content} title={item.title} onPressDelete={() => removeFromList(index)} />
                    )
                })
            }
        </div>
    )
}