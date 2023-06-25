// Fetch JSON data from the provided URL
fetch('https://backend-hzm1.onrender.com/api/v1/all-foods-item/all')
.then(response => response.json()) // Parse the response as JSON
.then(data => {
  // Extract relevant information from the JSON data
/*   const { title, description } = data;
 */
    console.log(data);
  // Update HTML content with the extracted data
  //document.getElementById('title').textContent = title;
  //document.getElementById('description').textContent = description;
})
.catch(error => console.error(error)); // Handle any errors
