import React from 'react';
import { 
    useReactFlow
} from 'reactflow';

import Dropdown from './Dropdown';
import RobotDropdown from './RobotDropdown';
import ClientInput from './ClientInput';
import AnyPhraseNode from './AnyPhraseNode';

const options = {
    includeHiddenNodes: false,
}

export default function NodeBody({ subType }) {
    const components = [
        // {
        //     name: "clientNode",
        //     component: <ClientDropdown key={"clientNode"} />
        // },
        // {
        //     name: "robotNode",
        //     component: <RobotDropdown key={"robotNode"} />
        // },
        {
            name: "textInputNode",
            component: <ClientInput key={"textInputNode"} />
        },
        {
            name: "listenerNode",
            component: <Dropdown key={"clientNode"} />
        },
        {
            name: "anyphraseNode",
            component: <AnyPhraseNode key={"clientNode"} />
        },
        {
            name: "dropDown",
            component: <Dropdown key={"clientNode"} />
        }
    ]

    const hey = useReactFlow();

    return  components.map(item => {
            // console.log(subType)
            if (item.name === subType) return item.component
        })
}