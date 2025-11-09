import { createContext, useContext, useEffect, useState } from 'react';

export const TodoContext = createContext<TodoType>({} as TodoType);

type Task = {
    id: number;
    title: string;
    text: string;
    isChecked: boolean;
}

type TodoType = {
    tasks: Task[];
    addTask: (title: string, text: string) => void;
    removeTask: (id: number) => void;

    isOpenPopUp: boolean;
    openPopUp: () => void;
    closePopUp: () => void;

    addLocalStorage: (newTask: Task) => void;
    TaskChecked: (id: number) => void
}

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {

    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    });
    const [isOpenPopUp, setOpenPopUp] = useState(false);


    const openPopUp = () => setOpenPopUp(true)

    const closePopUp = () => setOpenPopUp(false)

    const addTask = (title: string, text: string) => {
        const newTask = {
            id: Date.now(),
            title,
            text,
            isChecked: false
        }

        setTasks(prev => {
            const updated = [...prev, newTask];
            localStorage.setItem('tasks', JSON.stringify(updated));
            return updated;
        });
    }

    const removeTask = (id: number) => {
        setTasks(prev => {
            const updated = prev.filter(task => task.id !== id);

            localStorage.setItem('tasks', JSON.stringify(updated));

            return updated;
        });

    }
    const addLocalStorage = (newTask: Task) => {
        const savedTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
        savedTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(savedTasks))
    }

    const TaskChecked = (id: number) => {
        setTasks(prev =>
            prev.map(task => task.id === id ? { ...task, isChecked: !task.isChecked } : task)
        )
    }

    useEffect(() => {
        const savedRoot = localStorage.getItem('tasks')

        if (savedRoot) {
            setTasks(JSON.parse(savedRoot))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    return (
        <TodoContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                isOpenPopUp,
                openPopUp,
                closePopUp,
                addLocalStorage,
                TaskChecked
            }}>
            <>{children}</>
        </TodoContext.Provider>
    )
}
export function useTodo() {
    const context = useContext(TodoContext);

    if (!context) {
        console.error('useTodo deve ser usado dentro de <TodoProvider>')
    }

    return context
}

