import {useState} from 'react'
import { useTodo } from '../context/TodoContext';

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [textMsg, setTextMsg] = useState(todo.text)

    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    //this are the local methods which calls the general method from context
    const edit = () => {
        updateTodo(todo.id, {...todo, text: textMsg})
        setIsTodoEditable(false)
    }

    const toggle = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed} //wiring
                onChange={toggle}   //calling the local method
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                //for the edit functionality
                value={textMsg}
                onChange={(e) => setTextMsg(e.target.value)}
                readOnly={!isTodoEditable}  //if not editable we only read
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        edit(); //it is called when we click the save button
                    } else setIsTodoEditable((prev) => !prev); //makes it editable
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
