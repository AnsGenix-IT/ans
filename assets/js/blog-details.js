$(document).ready(function() {
    const blogId = window.location.search.substring(1); // Get the blog ID from the query string

   
  
    // Fetch blog data from JSON file (you might need to use an HTTP server due to CORS restrictions)
    $.getJSON("blogs.json", function(data) {

    
   
      const blog = data[blogId - 1]; // JSON arrays are 0-indexed, while blog IDs start from 1
  
      if (blog) {
        $("#blogTitle").text(blog.title);
        $("#blogContent").html(blog.content);
  
        if (blog.image) {
          const blogImage = `<img src="${blog.image}" class="img-fluid" alt="Blog Image">`;
          $("#blogImage").html(blogImage);
        }
      } else {
        $("#blogTitle").text("Blog Not Found");
        $("#blogContent").text("The requested blog was not found.");
      }
    });
  });
  