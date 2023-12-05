import { useCallback, useEffect, useState } from 'react';
import { 
    Handle, 
    Position,
    useReactFlow,
    useNodeId
} from 'reactflow';

import NodeControls from './NodeControls';
import NodeBody from './node_types/NodeBody';

const handleStyle = { left: 10 };

const options = {
    includeHiddenNodes: false,
}
 
function SharedNodeType({ data, isConnectable }) {
    const nodeMainType = useReactFlow().getNode(useNodeId()).mainType;
    const nodeSubType = useReactFlow().getNode(useNodeId()).subType;
    const mainTypes = ["clientNode", "robotNode"]
    const subTypes = [ "dropDown", "textInputNode", "anyphrase", "exitNode", "hangupNode" ]

    const setNodeType = useCallback(() => {
        return subTypes.filter(el => {
            if (el === nodeSubType) return el

            // return "dropDown"
        })[0]

        // if (node === "clientNode") return "clientNode"
        // return "robotNode"
    });
    
    const setNodeMainType = useCallback(() => {
        return mainTypes.filter(el => {
            if (el === nodeMainType) return el
        })[0]
    })

    const [type, setType] = useState(setNodeType);
    const [mainType, setMainType] = useState(setNodeMainType)

    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="node-container">
            <NodeControls mainType={mainType} setMainType={setMainType} subType={type} setNodeType={setType}  />
            <div className="text-updater-node">
                <Handle type="target" position={Position.Left} />
                <div className="node-body">
                    <NodeBody subType={type} />
                </div>
                <Handle type="source" position={Position.Right} id="a" />
            </div>
        </div>
    );
}

export default SharedNodeType;