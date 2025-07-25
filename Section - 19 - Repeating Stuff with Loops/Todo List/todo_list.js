console.log("This is Todo List!!")
user_input = prompt("What would you like to do?").toLowerCase()
const my_todos = [];

while(user_input !== "quit" && user_input !==    "q" ) {
    if (user_input === "new" ) {
        const new_todo = prompt("Enter the new todo!");
        my_todos.push(new_todo);
        console.log(`${new_todo} has been added to list!!`)
    } else if (user_input === "list") {
        console.log("***********")
        for (let i=0; i < my_todos.length ; i++) {
            console.log(`${i}: ${my_todos[i]}`);
        }
        console.log("***********")
    } else if (user_input === "delete") {
        const delete_index = parseInt(prompt("Enter the index to delete:"));
        if(!Number.isNaN(delete_index)) {
            const deleted = my_todos.splice(delete_index, 1);
            console.log(`OK!! Deleted ${deleted}`);
        } else {
            console.log("Unknown Index!")
        }
    }
    user_input = prompt("What would you like to do?").toLowerCase()
}

console.log("You have Quit the APP!")