import { createContext } from 'react'

interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    //Methods
    openSideMenu(): void
    closeSideMenu(): void

    setIsAddingEntry: (isAdding: boolean) => void

    startDragging: () => void
    endDragging: () => void
}

const UIContext = createContext({} as ContextProps);

export default UIContext;