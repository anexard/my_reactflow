import { useCallback } from 'react';
import { 
    Handle, 
    Position
} from 'reactflow';

import NodeControls from '../NodeControls'

import icon from '../assets/node_icon.svg';
import chevron from '../assets/chevron.svg';

const handleStyle = { left: 10 };
 
function RobotNodeType({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="node-container">
            <NodeControls />
            <div className="text-updater-node">
            <Handle type="target" position={Position.Left} />
            <div className="node-body">
                <img src={icon} />
                <div className="drop-down-header">
                    <p>
                        Нод робота
                    </p>
                    <div className="chevron-container">
                        <img className="chevron" src={chevron} />
                    </div>
                </div>
            </div>
            <Handle type="source" position={Position.Right} id="a" />
            </div>
        </div>
    );
}

export default RobotNodeType;