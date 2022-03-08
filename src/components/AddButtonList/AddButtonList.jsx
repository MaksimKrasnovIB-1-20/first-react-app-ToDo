import React, {useState} from "react";
import List from "../List/List";
import Badge from "../Badge/Badge"

import CloseSVG from "../../assets/images/close.svg";

import "../AddButtonList/AddButtonList.scss";

const AddButtonList = ({ colors, onAddList }) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, setSelectedColor] = useState(colors[0].id)
    const [inputValue, setInputValue] = useState('')

    const onClose = () => {
        setVisiblePopup(false)
        setInputValue('')
        selectedColor(colors[0].id)
        onClose()
    }

    const addList = () => {
        if(!inputValue) {
            alert('Введите название списка')
            return
        }
        const color = colors.filter(c => c.id === colors)[0].name
        onAddList({ id: Math.random(), name: inputValue, color })
        
    }

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
                    onClick={onClose}
                    src={CloseSVG} 
                    alt="Close Button" 
                    className="add-list__popup-close"
                />
                
                <input 
                    value={inputValue}
                    onChange={e => {setInputValue(e.target.value)}}
                    className="field" 
                    type="text" 
                    placeholder="Название списка" 
                />
                
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
                <button 
                    onClick={addList} 
                    className="button">Добавить список
                </button>
            </div>}
        </div>
    )
}

export default AddButtonList;
