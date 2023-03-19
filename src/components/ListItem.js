import React from "react"
import './styles.css'

//This is like a container for each ListItem
export const ListItem = ({title, content, onPressDelete}) => {
    return(
        <div style={{ 
            backgroundColor: '#8aa29e', 
            borderWidth: 3, 
            bordeRadius: 5, 
            width: 600, 
            color: '#F1EDEE',
            borderColor: '#3D5467',
        }}>
            <h1 style={{ 
                padding: 10,
                margin: 20, 
                }}>
                {title}
            </h1>
            <h3 style={{ 
                padding: 10, 
                margin: 20, 
                }}>
                {content}
            </h3>
            <button onClick={onPressDelete} 
            style={{ 
                backgroundColor: '#db5461', 
                borderWidth: 3, 
                borderRadius: 5, 
                width: 100, 
                color: '#F1EDEE', 
                borderColor: '#3d5467', 
                paddingTop: 5, 
                paddingBottom: 5, 
                marginBottom: 15,
                }}>Delete</button>
        </div>
    )
}




