**Project Description**
This project is a React-based image search application integrated with the Pixabay API, allowing users to search for images by category, view the images, and add captions. The app is designed with a clean layout using Tailwind CSS for styling. Here’s a breakdown of its functionality and components:

**Main Features**
Image Search Functionality:

-The user can enter a category in the search bar (e.g., "nature", "city", "animals") and fetch related images from the Pixabay API.
The images are displayed in a grid, each showing a preview with a "Add Caption" button beneath it.
Image Display:

Once the user searches for a category, the app displays images from the API related to that category.
Each image is displayed with a preview, and users can click on the image to go to a new page where they can add a caption.
Adding Captions:

On clicking the "Add Caption" button below each image, the user is navigated to the Caption Page (a separate page where the user can add a caption to the selected image).
Routing:

-React Router is used for navigating between the pages (Home/Search Page and Add Caption Page).
Components
**MyContext and contextstore:**

This context API is used to manage the state of images fetched from the Pixabay API.
The fetchimages function retrieves images based on the search category, and the images state stores the fetched images.
Searchpage:

This page displays the search bar (using Navbar), fetches images based on user input, and displays them in a grid layout.
Each image has an "Add Caption" button that links to the Add Caption Page.
Navbar:

The Navbar includes a search input field where the user can type a category to search for images.
Upon submitting the search, the handleSearch function fetches the corresponding images using the fetchimages function from context.
Addcaptionpage:

This is a placeholder page for the user to add a caption to an image. Currently, it displays a simple message, but you can extend this to include form fields for adding captions.
How It Works
Fetching Images:

When the user types a category and submits the search form, the fetchimages function is called.
It sends a request to the Pixabay API with the entered category and retrieves a list of images.
Displaying Images:

The images are displayed in a grid, each containing an image preview and a button to add a caption.
Navigation to Add Caption Page:

Clicking the "Add Caption" button on an image redirects the user to a different page (/captionpage), where they can add a caption to the selected image.
Context Management:

The contextstore manages the global state of images, which can be accessed across multiple components, ensuring that images fetched on one page can be used across the app.
**Technologies Used:**
React: For building the UI and managing component states.
Tailwind CSS: For responsive, utility-first styling.
React Router: For managing the app's routes and enabling page navigation.
Pixabay API: For fetching images based on user-specified categories.
