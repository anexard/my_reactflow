import React, {useState} from 'react'
import { useReactFlow, useNodeId } from 'reactflow';

import icon from '../assets/node_icon.svg';
import chevron from '../assets/chevron.svg';
import RobotPhraseIcon from '../assets/RobotPhraseIcon';

import ItemList from './ItemList';

export default function Dropdown() {
    const clientDropdownList = [
        {
            title: "Согласие",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
        {
            title: "Отказ",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
        {
            title: "Нейтральные",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
        {
            title: "Начало разговора",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
        {
            title: "Вопросы",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
        {
            title: "Вне контекста",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
    ]
    const robotDropdownList =[
        {
            title: "Согласие",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
        {
            title: "Согласие",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
        {
            title: "Согласие",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
        {
            title: "Согласие",
            subdropdown: ["Отправить информацию", "Да, давайте", "Вау, круто", "Контекстное согласие"]
        },
    ]
    const [show, setShow] = useState(false)
    const [type, setType] = useState(useReactFlow().getNode(useNodeId()).mainType === "clientNode")
    // const type = useReactFlow().getNode(useNodeId()).mainType === "clientNode"
    console.log(useReactFlow().getNode(useNodeId()).mainType)

    return (
        <div className="client-dropdown">
            {type ? <img src={icon} /> : <RobotPhraseIcon subType={"dropDown"} /> }
            <div className="drop-down-header" onClick={() => setShow(!show)}>
                <p>Приветствие</p>
                <div className="chevron-container">
                <img className="chevron" src={chevron} />
                </div>
            </div>

            { !!show && <div id="clientDropdown" className="dropdown-body">
                    {
                        (type ? clientDropdownList : robotDropdownList).map((el, i) => 
                            <ItemList key={i} el={el} last={i != clientDropdownList.length-1} chevron={chevron}/>
                        )


                        // robotDropdownList.map((el, i) => 
                        //     <ItemList key={i} el={el} last={i != clientDropdownList.length-1} chevron={chevron}/>
                        // )
                    }
                </div>
            }

            
        </div>
    )
}