import React from 'react'



const TodoIcon = ({ IconType, IconColor }) => {
    let Icon = IconType
    let color = IconColor

    return (
     <Icon color={color}/>
    )
}

export { TodoIcon }