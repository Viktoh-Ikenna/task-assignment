export interface Task {
     id: string;
     title: string;
     description: string;
     completed: boolean;
     column: string;
     tag?: string;
     tagColor?: string;
     progress?: number;
     views?: number;
     attachments?: number;
     dueDate?: string;
     createdAt?: string;
     updatedAt?: string;
     priority?: any;
     labels?: string[];
     checklist?: {name: string; completed: boolean}[];
     estimatedHours?: number;
     loggedHours?: number;
     isArchived?: boolean;
     isFlagged?: boolean;
     creator?: string;
     dependencies?: string[];
     watchers?: string[];
     subTasks?: string[];
     assignees?: {name: string; avatar: string; [key: string]: any}[];
     taskType?: 'Feature' | 'Bug' | 'Task';
     relatedLinks?: {label: string; url: string}[];
}

export interface Column {
     id: string;
     title: string;
     taskIds: string[];
     color: string;
}

export interface Project {
     id: string;
     name: string;
     createdAt: string;
     updatedAt: string;
     totalTime: number;
     members: User[];
     columns: Column[];
     tasks: Task[];
}

export interface User {
     id: string;
     name: string;
     email: string;
     avatar: string;
     role?: string;
     company: {companyId: any; name: string; role: string}[];
     passwword: any;
}

export interface Company {
     id: any;
     name: string;
     projects: Project[];
     teams: User[];
}

export interface AppState {
     currentUser: User | null;
     currentCompany: Company | null;
     theme: 'light' | 'dark';
}

export type AppAction =
     | {type: 'ADD_TASK'; payload: Task}
     | {type: 'EDIT_TASK'; payload: Task}
     | {type: 'DELETE_TASK'; payload: string}
     | {type: 'TOGGLE_COMPLETE'; payload: string}
     | {
            type: 'MOVE_TASK';
            payload: {
                 taskId: string;
                 sourceColumnId: string;
                 destColumnId: string;
                 index: number;
            };
       }
     | {type: 'TOGGLE_THEME'}
     | {type: 'ADD_MEMBERS_TO_PROJECT'; payload: User[]}
     | {type: 'REMOVE_MEMBER_FROM_PROJECT'; payload: string}
     | {type: 'UPDATE_MEMBER_DETAILS'; payload: User}
     | {type: 'LOGIN_USER'; payload: User}
     | {type: 'SET_CURRENT_USER'; payload: User}
     | {type: 'LOGOUT_USER'}
     | {type: 'SET_COMPANY_DETAILS'; payload: Company}
     | {type: 'ADD_PROJECT'; payload: Project}
     | {type: 'EDIT_PROJECT'; payload: Project}
     | {type: 'DELETE_PROJECT'; payload: string}
     | {type: 'ADD_COLUMN'; payload: {projectId: string; column: Column}}
     | {type: 'EDIT_COLUMN'; payload: {projectId: string; column: Column}}
     | {type: 'DELETE_COLUMN'; payload: {projectId: string; columnId: string}};
