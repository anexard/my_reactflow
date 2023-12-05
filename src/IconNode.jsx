import { useCallback, useEffect, useState } from 'react';
import { 
    Handle, 
    Position,
    useReactFlow,
    useNodeId
} from 'reactflow';

import LeaveIcon from './assets/LeaveIcon';
import ReturnIcon from './assets/ReturnIcon';
import IgnoreIcon from './assets/IgnoreIcon';

const handleStyle = { left: 10 };

const options = {
    includeHiddenNodes: false,
}
 
function IconNode({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    const [ renderOrder, setOrder ] = useState([
        <LeaveIcon key="leaveicon" chooseIcon={chooseIcon} type="leaveicon" />, 
        <ReturnIcon key="returnicon" chooseIcon={chooseIcon} type="returnicon" />, 
        <IgnoreIcon  key="ignoreicon" chooseIcon={chooseIcon} type="ignoreicon" />
    ])

    const [ currentItem, setItem ] = useState(renderOrder[0])
    const [ showDrop, setShowDrop ] = useState(false)

    function chooseIcon(type) {
       const a = {
            leaveicon: <LeaveIcon key="leaveicon"  chooseIcon={chooseIcon} type="leaveicon" />,
            returnicon: <ReturnIcon key="returnicon"  chooseIcon={chooseIcon} type="returnicon" />,
            ignoreicon: <IgnoreIcon key="ignoreicon"  chooseIcon={chooseIcon} type="ignoreicon" />
        }
        setItem(a[type])
        setOrder(prev=>{
            return [a[type],...prev.filter(el=>el.props.type !== type)]
        })
    }

    function showList(event) {
        event.stopPropagation()
        event.preventDefault()
        setShowDrop(prev=>!prev)
    }

    return (
            <div className="icon-node">
                <Handle type="target" position={Position.Left} />

                <div className="icon-dropdown-list" onClick={showList}>
                   {!showDrop && currentItem}
                    {showDrop && 
                        renderOrder.map((component, index) => {
                        return component
                    })
                    
                    }

                </div>

                <Handle type="source" position={Position.Right} id="a" />
            </div>
    );
}

export default IconNode;