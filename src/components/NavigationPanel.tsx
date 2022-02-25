import React, {FC} from "react";
import { NavLink } from "react-router-dom";

const NavigationPanel:FC = () => {
    const navStyles = {
        display: 'flex', 
        width: '70vw', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        justifyContent: 'center'
    }

    const liStyle = {
        marginRight: 20
    }
    return (
        <div style={navStyles}>
            <div style={liStyle}>
                <NavLink to={'/users'}>Пользователи</NavLink>
            </div>
            
            <div style={liStyle}>
                <NavLink to={'/todos'}>Список дел</NavLink>
            </div>
            
            <div style={liStyle}>
                <NavLink to={'/events'}>Типизированные события</NavLink>
            </div>
            
            <div style={liStyle}>
                <NavLink to={'/card'}>Карточка с кнопкой</NavLink>
            </div>
            
        </div>
    )
}

export default NavigationPanel;