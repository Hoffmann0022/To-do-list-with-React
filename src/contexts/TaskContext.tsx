import { createContext, useState } from 'react';


const TaskContext = createContext({});

const TaskProvider = ({children}:{children: React.ReactNode}) =>{



    return(
        <TaskContext.Provider 
        value={{
            
        }}>
            <>{children}</>
        </TaskContext.Provider>
    )
}

export default {TaskContext, TaskProvider}; 