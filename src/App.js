import './App.css';
import {useState} from "react";
import Header from "./components/Header/Header"
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
    const [allTodos, setAllTodos] = useState([])
    return (
        <div className="App">
            <Header title={"Todo App (react-testing-library)"}/>
            <TodoInput
                allTodos={allTodos}
                setAllTodos={setAllTodos}
            />
            <TodoList allTodos={allTodos} setAllTodos={setAllTodos}/>
        </div>
    );
}

export default App;
