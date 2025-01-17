import React, {createContext, useReducer, ReactNode, useState, useEffect} from 'react';
import {AppAction, AppState, Company} from '../types';
import {appReducer} from './Reducer';

const initialState: AppState = {
     currentUser: null,
     currentCompany: null,
     theme: 'light',
};

export const AppContext = createContext<{
     state: AppState;
     dispatch: React.Dispatch<AppAction>;
     handleToggleAddMemberModal: () => void;
     handleToggleAddTaskModal: () => void;
     isAddTaskModalOpen: boolean;
     isAddMemberModalOpen: boolean;
     selectedProjectId: string | null;
     setSelectedProjectId: React.Dispatch<React.SetStateAction<string | null>>;
}>({
     state: initialState,
     dispatch: () => null,
     isAddMemberModalOpen: false,
     handleToggleAddMemberModal: () => null,
     handleToggleAddTaskModal: () => null,
     isAddTaskModalOpen: false,
     selectedProjectId: null,
     setSelectedProjectId: () => null,
});

export const AppProvider = ({children}: {children: ReactNode}) => {
     const [state, dispatch] = useReducer(appReducer, initialState);
     const [isAddMemberModalOpen, setToggleAddMemberModal] = useState(false);
     const [isAddTaskModalOpen, setToggleTaskModal] = useState(false);
     const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

     const handleToggleAddTaskModal = () => {
          setToggleTaskModal(prev => !prev);
     };

     const handleToggleAddMemberModal = () => {
          setToggleAddMemberModal(prev => !prev);
     };

     return (
          <AppContext.Provider
               value={{
                    state,
                    dispatch,
                    handleToggleAddMemberModal,
                    handleToggleAddTaskModal,
                    isAddTaskModalOpen,
                    isAddMemberModalOpen,
                    selectedProjectId,
                    setSelectedProjectId,
               }}>
               {children}
          </AppContext.Provider>
     );
};
