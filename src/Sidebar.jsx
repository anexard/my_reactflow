import React from 'react';

export default () => {
  const onDragStart = (event, [nodeType, mainType, subType]) => {
    event.dataTransfer.setData('application/reactflow', [nodeType, mainType, subType]);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      {/* <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div> */}
      <div className="dndnode clientNode" onDragStart={(event) => onDragStart(event, ['sharedNode', 'listenerNode', 'dropDown'])} draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M22.6667 26.6666H22.4C20.1598 26.6666 19.0397 26.6666 18.184 26.2307C17.4314 25.8472 16.8195 25.2352 16.436 24.4826C16 23.6269 16 22.5068 16 20.2666V11.7333C16 9.49308 16 8.37298 16.436 7.51733C16.8195 6.76468 17.4314 6.15276 18.184 5.76927C19.0397 5.33329 20.1598 5.33329 22.4 5.33329H22.6667M22.6667 26.6666C22.6667 28.1394 23.8606 29.3333 25.3333 29.3333C26.8061 29.3333 28 28.1394 28 26.6666C28 25.1939 26.8061 24 25.3333 24C23.8606 24 22.6667 25.1939 22.6667 26.6666ZM22.6667 5.33329C22.6667 6.80605 23.8606 7.99996 25.3333 7.99996C26.8061 7.99996 28 6.80605 28 5.33329C28 3.86053 26.8061 2.66663 25.3333 2.66663C23.8606 2.66663 22.6667 3.86053 22.6667 5.33329ZM9.33333 16L22.6667 16M9.33333 16C9.33333 17.4727 8.13943 18.6666 6.66667 18.6666C5.19391 18.6666 4 17.4727 4 16C4 14.5272 5.19391 13.3333 6.66667 13.3333C8.13943 13.3333 9.33333 14.5272 9.33333 16ZM22.6667 16C22.6667 17.4727 23.8606 18.6666 25.3333 18.6666C26.8061 18.6666 28 17.4727 28 16C28 14.5272 26.8061 13.3333 25.3333 13.3333C23.8606 13.3333 22.6667 14.5272 22.6667 16Z" 
            stroke="#464749" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="dndnode clientNode" onDragStart={(event) => onDragStart(event, ['iconNode', 'return', '-'])} draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 20C18.2091 20 20 21.7909 20 24C20 26.2091 18.2091 28 16 28C13.7909 28 12 26.2091 12 24C12 21.7909 13.7909 20 16 20ZM16 20C16 14.2456 11.5 8 4 8L20 8M20 8C20 10.2091 21.7909 12 24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8Z" 
            stroke="#464749" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="dndnode clientNode" onDragStart={(event) => onDragStart(event, ['sharedNode', 'clientNode', 'dropDown'])} draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M7.30056 17.1508C5.92598 15.0163 4.9019 12.7217 4.22831 10.3485C4.0147 9.59586 3.9079 9.21957 3.90626 8.66897C3.90444 8.05801 4.11959 7.23069 4.41882 6.69801C4.68848 6.21797 5.04157 5.86489 5.74773 5.15872L5.95791 4.94854C6.6665 4.23995 7.02079 3.88566 7.4013 3.6932C8.15805 3.31044 9.05174 3.31044 9.80848 3.6932C10.189 3.88566 10.5433 4.23995 11.2519 4.94854L11.5117 5.20837C11.9778 5.67451 12.2109 5.90758 12.3633 6.14195C12.938 7.02581 12.938 8.16525 12.3633 9.0491C12.2109 9.28347 11.9778 9.51654 11.5117 9.98268C11.3593 10.1351 11.2831 10.2113 11.2193 10.3004C10.9926 10.617 10.9143 11.076 11.0233 11.4498C11.054 11.555 11.0939 11.6381 11.1737 11.8044C11.3348 12.1399 11.5061 12.4718 11.6875 12.7996M14.9089 17.0906L14.9689 17.1508C16.571 18.7529 18.3825 20.018 20.3153 20.946C20.4816 21.0258 20.5647 21.0657 20.6699 21.0963C21.0437 21.2053 21.5027 21.127 21.8193 20.9004C21.9083 20.8366 21.9846 20.7604 22.137 20.6079C22.6031 20.1418 22.8362 19.9087 23.0706 19.7564C23.9544 19.1817 25.0938 19.1817 25.9777 19.7564C26.2121 19.9087 26.4451 20.1418 26.9113 20.608L27.1711 20.8678C27.8797 21.5764 28.234 21.9307 28.4265 22.3112C28.8092 23.0679 28.8092 23.9616 28.4265 24.7184C28.234 25.0989 27.8797 25.4532 27.1711 26.1617L26.9609 26.3719C26.2548 27.0781 25.9017 27.4312 25.4216 27.7008C24.889 28.0001 24.0616 28.2152 23.4507 28.2134C22.9001 28.2118 22.5238 28.1049 21.7712 27.8913C17.7267 26.7434 13.9102 24.5774 10.7262 21.3934L10.6663 21.3334M27.9995 4.00004L3.99948 28" 
            stroke="#464749" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="divider"></div>
      <div className="dndnode clientNode" onDragStart={(event) => onDragStart(event, ['sharedNode', 'clientNode', 'dropDown'])} draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M4 26.6667C7.11439 23.3634 11.3427 21.3333 16 21.3333C20.6573 21.3333 24.8856 23.3634 28 26.6667M22 10C22 13.3137 19.3137 16 16 16C12.6863 16 10 13.3137 10 10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10Z" 
              stroke="#464749" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
          </svg>
      </div>
      <div className="dndnode robotNode" onDragStart={(event) => onDragStart(event, ['sharedNode', 'robotNode', 'dropDown'])} draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M10.6667 4H10.4C8.15979 4 7.03969 4 6.18404 4.43597C5.43139 4.81947 4.81947 5.43139 4.43597 6.18404C4 7.03969 4 8.15979 4 10.4V10.6667M10.6667 28H10.4C8.15979 28 7.03969 28 6.18404 27.564C5.43139 27.1805 4.81947 26.5686 4.43597 25.816C4 24.9603 4 23.8402 4 21.6V21.3333M28 10.6667V10.4C28 8.15979 28 7.03969 27.564 6.18404C27.1805 5.43139 26.5686 4.81947 25.816 4.43597C24.9603 4 23.8402 4 21.6 4H21.3333M28 21.3333V21.6C28 23.8402 28 24.9603 27.564 25.816C27.1805 26.5686 26.5686 27.1805 25.816 27.564C24.9603 28 23.8402 28 21.6 28H21.3333M10 10.6667V12.6667M22 10.6667V12.6667M14.6667 16.8001C15.7333 16.8001 16.6667 15.8668 16.6667 14.8001V10.6667M20.2669 20.2666C17.8669 22.6666 14.0003 22.6666 11.6003 20.2666" 
              stroke="#464749" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
          </svg>
      </div>
    </aside>
  );
};
