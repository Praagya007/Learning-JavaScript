# GitHub User Search Application

A modern, responsive web application that allows users to search for GitHub users, view their profiles, and navigate through search results with pagination.

## Features

- 🔍 **User Search**: Search for any GitHub user by username
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 📊 **Pagination**: Navigate through multiple pages of search results
- 🖼️ **User Profiles**: View detailed user information in a modal
- ⚡ **Loading States**: Visual feedback during data fetching
- ❌ **Error Handling**: Graceful error messages for API failures
- 🔄 **State Persistence**: Search results persist across page refreshes
- ✨ **YouTube-style Clear Button**: Clear search input with a single click

## Tech Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and transitions
- **JavaScript (ES6+)**: Vanilla JavaScript with modules
- **GitHub API**: RESTful API for fetching user data
- **localStorage**: Client-side storage for state persistence

## Project Structure

```
project/
├── index.html
├── styles.css
└── js/
    ├── main.js      # Entry point and app logic
    ├── api.js       # API integration
    └── ui.js        # UI manipulation functions
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/yourusername/github-user-search.git](https://github.com/Praagya007/Learning-JavaScript.git)
```

2. Navigate to the project directory:
```bash
cd github-user-search
```

3. Open `index.html` in your browser:
```bash
# For macOS
open index.html

# For Windows
start index.html

# For Linux
xdg-open index.html
```

## Usage

1. Enter a GitHub username or search term in the search box
2. Click "Search" or press Enter
3. Browse through the search results
4. Click "View Details" on any user card to see more information
5. Use pagination controls to navigate through multiple pages
6. Click the "✕" button to clear the search input
7. Press ESC to close the modal or click outside it

## Development Journey

### Step 1: Project Setup & DOM Selection

- **Initial Challenge**: Understanding the importance of selecting DOM elements before manipulation
- **Key Learning**: Always declare DOM elements at the top of your script for easy access
- **Implementation**: Created references to all necessary HTML elements

### Step 2: Event Listeners

- **Challenge**: Understanding event propagation and the difference between window and document event listeners
- **Key Question**: "Why use window.addEventListener instead of document?"
- **Solution**: Used window.addEventListener for modal closing to ensure events bubble up correctly

### Step 3: API Integration

- **Challenge**: Working with async/await and handling API responses
- **Key Question**: "Why use API_BASE_URL instead of hardcoding URLs?"
- **Solution**: Created a centralized API base URL for maintainability and easier debugging
- **Bug Fixed**: Changed `data.totalCount` to `data.total_count` (GitHub API property name)

### Step 4: Display Search Results

- **Challenge**: Creating dynamic HTML elements and attaching event listeners
- **Key Question**: "What is the data-username attribute for?"
- **Solution**: Used data-username to store user information for modal functionality
- **Implementation**: Created user cards with avatars, usernames, and "View Details" buttons

### Step 5: Modal Functionality

- **Challenge**: Understanding modal behavior and proper event handling
- **Key Question**: "Why does the modal close when I click inside it?"
- **Solution**: Clarified the difference between modal backdrop and modal content
- **Enhancement**: Added ESC key functionality for better user experience

### Step 6: Error Handling & Empty States

- **Challenge**: Providing user feedback for different application states
- **Solution**: Created functions to show/hide loading, error, and empty states
- **Implementation**: Added visual feedback for all possible scenarios

### Step 7: Pagination

- **Challenge**: Implementing pagination with proper state management
- **Key Question**: "What is the onPageChange parameter?"
- **Solution**: Used callback functions to handle page navigation
- **Bug Fixed**: Corrected parameter order in createPagination function
- **Enhancement**: Added page count display and button state management

### Step 8: Refinements & Enhancements

- **YouTube-style Clear Button**: Added a clear button that appears when text is in the search input
- **Smooth Transitions**: Implemented CSS transitions for better user experience
- **State Persistence**: Used localStorage to maintain search state across page refreshes

## Challenges & Solutions

### 1. NaN Pagination Issue

- **Problem**: Pagination displayed "Page 1 of NaN pages"
- **Solution**: Fixed property name from `data.totalCount` to `data.total_count` and corrected parameter order

### 2. Modal Closing Logic

- **Problem**: Modal would close when clicking inside the content
- **Solution**: Corrected event targeting to only close when clicking the modal backdrop

### 3. Event Listener Management

- **Problem**: "View Details" buttons didn't work after pagination
- **Solution**: Added `addDetailsButtonListeners()` after displaying new results

### 4. CSS Positioning

- **Problem**: Clear button wasn't positioned correctly inside search input
- **Solution**: Used absolute positioning within a relative parent wrapper

### 5. State Persistence

- **Problem**: Search results disappeared on page refresh
- **Solution**: Implemented localStorage to save and restore search state

## Key Learning Points

- **DOM Manipulation**: Understanding how to select, create, and modify DOM elements
- **Event Handling**: Mastering event listeners and event propagation
- **Async Programming**: Working with promises and async/await for API calls
- **State Management**: Managing application state and user interactions
- **CSS Positioning**: Using relative and absolute positioning for UI elements
- **Local Storage**: Persisting data across browser sessions
- **Error Handling**: Gracefully handling API failures and edge cases
- **User Experience**: Adding smooth transitions and intuitive interactions

## Future Enhancements

- **Debounced Search**: Implement debouncing to reduce API calls during typing
- **Recent Searches**: Display a list of recent searches for quick access
- **Advanced Filtering**: Add filters for location, repositories, followers, etc.
- **User Sorting**: Sort results by different criteria (followers, repositories, etc.)
- **Dark Mode**: Add a dark theme toggle
- **Accessibility**: Improve ARIA labels and keyboard navigation
- **Performance**: Implement virtual scrolling for large result sets
- **Testing**: Add unit tests for critical functionality

## Contributing

This project was developed as a learning exercise to understand modern web development concepts. Contributions are welcome! Please feel free to submit issues and enhancement requests.

## License

This project is open source and available under the MIT License.

---

Built with ❤️ using vanilla JavaScript, HTML5, and CSS3
