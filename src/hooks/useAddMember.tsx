import {useState, useContext, useRef} from 'react';
import {AppContext} from '../context/AppContext';
import {User} from '../types';

export const useAddMember = (onClose: () => void) => {
     const {state, dispatch} = useContext(AppContext);
     const dropdownRef = useRef<HTMLDivElement>(null);

     const [searchQuery, setSearchQuery] = useState('');
     const [selectedMembers, setSelectedMembers] = useState<{id: string; name: string}[]>([]);
     const [isDropdownVisible, setDropdownVisible] = useState(false);

     const members = state.currentCompany?.teams || [];

     const filteredUsers =
          searchQuery.trim() === ''
               ? members.slice(0, 6)
               : members.filter(
                      member =>
                           member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           member.email.toLowerCase().includes(searchQuery.toLowerCase()),
                 );

     const handleAddMember = () => {
          if (selectedMembers.length === 0) return;

          const addedMembers = selectedMembers
               .map(member => members.find(user => user.id === member.id))
               .filter(user => user !== undefined);

          dispatch({
               type: 'ADD_MEMBERS_TO_PROJECT',
               payload: addedMembers as User[],
          });

          onClose();
     };

     const handleFocus = () => setDropdownVisible(true);

     const handleSelectMember = (userId: string, userName: string) => {
          if (!selectedMembers.some(member => member.id === userId)) {
               setSelectedMembers([...selectedMembers, {id: userId, name: userName}]);
          }
          setDropdownVisible(false);
          setSearchQuery('');
     };

     const handleRemoveMember = (userId: string) => {
          setSelectedMembers(selectedMembers.filter(member => member.id !== userId));
     };

     return {
          searchQuery,
          setSearchQuery,
          filteredUsers,
          selectedMembers,
          handleAddMember,
          handleSelectMember,
          handleRemoveMember,
          isDropdownVisible,
          handleFocus,
     };
};
