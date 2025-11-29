import { useState } from "react";

const CreateTodo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescrioton] = useState("");
return <div>
    <input type="text" placeholder="title" onChange={(e) => {
        const value = e.target.value;
        setTitle(e.target.value);
    }} />
    <br />
    <input type="text" placeholder="description" 
    onChange={(e) => {
        const value = e.target.value;
        setDescrioton(e.target.value);
    }} /> <br />
    <button onClick={() => {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
              "Content-type": "application/json"  
            }
        })
        .then(async function(res) {
            const json = await res.json();
            alert("Todos added")
        })
    }}>Add todo</button>
</div>
}

export default CreateTodo;