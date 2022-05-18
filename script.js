// api url
const api_url = 'https://jsonplaceholder.typicode.com/posts';

// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let row = `<tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
      </tr>`;

    // Loop to access all rows
    for (let r of data) {
        row += `<tr>
	<td>${r.id} </td>
	<td>${r.title}</td>
	<td>${r.body}</td>
</tr>`;
    }

    // Setting innerHTML as tab variable
    document.getElementById('posts').innerHTML = row;
}
