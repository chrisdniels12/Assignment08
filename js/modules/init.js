// Within the init.js file
// use async / await to load the JSON data 
//  return it back into the buildGrid() function.


async function fetchEmployees() {
    try {
        const response = await fetch('/data/employees.json');
        const users = await response.json();
        return users;
    } catch (error) {
        console.error(error.message);
    }
}

export { fetchEmployees };
