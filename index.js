// Add your code here

function submitData(name, email) {
    // Create an object with user data
    const userData = {
        name: name,
        email: email
    };

    // Configuration object for the fetch request
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    // Send the fetch request
    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            // Append the new id to the DOM
            const body = document.querySelector("body");
            const newIdElement = document.createElement("p");
            newIdElement.textContent = `New user ID: ${data.id}`;
            body.appendChild(newIdElement);
        })
        .catch(error => {
            // Handle errors and display message on the DOM
            const body = document.querySelector("body");
            const errorElement = document.createElement("p");
            errorElement.textContent = `Error: ${error.message}`;
            body.appendChild(errorElement);
        });
}
