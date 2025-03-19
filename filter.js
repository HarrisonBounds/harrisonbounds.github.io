// Get all dropdown links
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

// Add click event listeners to dropdown links
dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    const filter = link.getAttribute('data-filter'); // Get the filter value
    filterProjects(filter); // Filter projects
  });
});

// Function to filter projects
function filterProjects(filter) {
  const projects = document.querySelectorAll('.project-main'); // Use the correct class name

  projects.forEach(project => {
    const categories = project.getAttribute('data-filter').split(' '); // Get project categories as an array

    // Show or hide projects based on the filter
    if (filter === 'all' || categories.includes(filter)) {
      project.style.display = 'block'; // Show project
    } else {
      project.style.display = 'none'; // Hide project
    }
  });
}