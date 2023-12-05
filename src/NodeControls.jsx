import React, { useCallback, useState } from 'react'

import ClientNodeIcon from './assets/ClientNodeIcon';
import RobotNodeIcon from './assets/RobotNodeIcon';
import ClientInputIcon from './assets/ClientInputIcon';
import AnyPhraseNodeIcon from './assets/AnyPhraseNodeIcon';
import IntentNodeIcon from './assets/IntentNodeIcon';
import RobotPhraseIcon from './assets/RobotPhraseIcon';

export default function NodeControls({ mainType, setMainType, subType, setNodeType }) {
    
    //Code for changing node type by clicking on the top controls

    // const nodeId = useNodeId();
    // const reactFlow = useReactFlow();

    // const changeNode = useCallback((e) => {
    //     e.preventDefault()
    //     const nodesArr = reactFlow.getNodes();
    //     const clickedNode = nodesArr.filter(el => el.id === nodeId )[0];
    //     const typetochange = e.currentTarget.attributes.typetochange.value;

    //     if (clickedNode.type === typetochange) return 0
        
    //     reactFlow.setNodes(nds => {
    //         return nds.map(object => {
    //             if (object.id === clickedNode.id) return {
    //                     ...object,
    //                     type: typetochange
    //             }
                
    //             return {...object}

    //             });
    //     });
    // }, [])

    const changeNode = useCallback((e) => {
        setNodeType(e.currentTarget.attributes.typetochange.value)
    }, [])

    const changeMainType = useCallback((e) => {
        setMainType(e.currentTarget.attributes.typetochange.value)
    })

    class MainIcons extends React.Component{
        render() {
            return (
                <>
                    <ClientNodeIcon mainType={mainType} changeNode={changeMainType} />
                    <RobotNodeIcon mainType={mainType} changeNode={changeMainType} />
                </>
            )
        }
    }

    class SecondaryIcons extends React.Component {
        render() {
            if (mainType === "robotNode") {
                return (
                    <RobotPhraseIcon subType={subType} changeNode={changeNode} />
                )
            }

            return (
                <>
                    <IntentNodeIcon subType={subType} changeNode={changeNode} />
                    <ClientInputIcon subType={subType} changeNode={changeNode} />
                </>
            )
        }
    }

    if (mainType === "robotNode" || mainType === "clientNode") {
        return (
            <div className="node-controls nodrag">
                <MainIcons />
                <SecondaryIcons />
            </div>
        )
    } else {
        return (
            <div className="node-controls nodrag">
                <IntentNodeIcon subType={subType} changeNode={changeNode} />
                <ClientInputIcon subType={subType} changeNode={changeNode} />
                <AnyPhraseNodeIcon subType={subType} changeNode={changeNode} />
            </div>
        )
    }

    // if (nodeType === "robotNode") {
    //     return (
    //         <div className="node-controls nodrag">
    //             <ClientNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //             <RobotNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //             <RobotPhraseIcon nodeType={nodeType} changeNode={changeNode} />
    //         </div>
    //     )
    // } else {
    //     if (nodeType === "clientNode" || nodeType === "textInputNode") {
    //         return (
    //             <div className="node-controls nodrag">
    //                 <ClientNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //                 <RobotNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //                 <IntentNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //                 <ClientInputIcon nodeType={nodeType} changeNode={changeNode} />
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div className="node-controls nodrag">
    //                 <IntentNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //                 <ClientInputIcon nodeType={nodeType} changeNode={changeNode} />
    //             </div>
    //         )
    //     }
    // }

    // return (
    //     <div className="node-controls nodrag">
    //         {
    //             if (nodeType === "robotNode") {
    //                 <RobotNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //             }                
    //         }
            
    //         {
    //             (nodeType === "clientNode" || nodeType === "textInputNode" || nodeType === "listenerNode") ? (
    //                 <>
    //                     <IntentNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //                     <ClientInputIcon nodeType={nodeType} changeNode={changeNode} />
    //                     <RobotPhraseIcon nodeType={nodeType} changeNode={changeNode} />
    //                 </>
    //             ) : <RobotPhraseIcon nodeType={nodeType} changeNode={changeNode} />
    //         }
            
            
    //         {nodeType === "listenerNode" ? <AnyPhraseNodeIcon /> : (
    //             <>
    //                 <ClientNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //                 <RobotNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //             </>
    //         )}
    //         {
    //             (nodeType === "clientNode" || nodeType === "textInputNode" || nodeType === "listenerNode") ? (
    //                 <>
    //                     <IntentNodeIcon nodeType={nodeType} changeNode={changeNode} />
    //                     <ClientInputIcon nodeType={nodeType} changeNode={changeNode} />
    //                     <RobotPhraseIcon nodeType={nodeType} changeNode={changeNode} />
    //                 </>
    //             ) : <RobotPhraseIcon nodeType={nodeType} changeNode={changeNode} />}
    //     </div>
    // )
}