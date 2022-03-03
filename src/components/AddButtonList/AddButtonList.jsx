import React, {useState} from "react";
import List from "../List/List";
import Badge from "../Badge/Badge"

import CloseSVG from "../../assets/images/close.svg";

import "../AddButtonList/AddButtonList.scss";

const AddButtonList = ({ colors }) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, setSelectedColor] = useState(colors[0].id)

    console.log(selectedColor)

    return (
        <div className="add-list">
            <List
                onClick={() => setVisiblePopup(!visiblePopup)}
                items={[
                    {
                        className: 'list__add-button',
                        icon: 
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="#b4b4b4" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1V15" stroke="#b4b4b4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1 8H15" stroke="#b4b4b4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>,
                        name: 'Добавить список',
                    }
                        
                ]}
            />
            {visiblePopup && <div className="add-list__popup">
                <img
                onClick={() => setVisiblePopup(false)}
                src={CloseSVG} alt="Close Button" className="add-list__popup-close" />
                <input className="field" type="text" placeholder="Название списка" />
                <div className="add-list__popup-colors">
                    {
                        colors.map(color => 
                        <Badge 
                            onClick={() => setSelectedColor(color.id)} 
                            key={color.id} 
                            color={color.name} 
                            className={selectedColor === color.id && 'active'}
                        />)
                    }
                </div>
                <button className="button">Добавить список</button>
            </div>}
        </div>
    )
}

export default AddButtonList;
