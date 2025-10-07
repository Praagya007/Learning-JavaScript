// js/main.js


// Step 3: Import API functions
import { searchUsers, getUserDetails } from './api.js';

// Step 4: Import UI functions
import { 
    displayUsers, 
    showUserModal, 
    hideError, 
    showError, 
    hideEmpty, 
    showEmpty, 
    hideLoading, 
    showLoading, 
    createPagination, 
    removePagination,
    clearInput 
} from './ui.js';


// Step 1: Setup and DOM Element Selection

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('resultsContainer');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const emptyElement = document.getElementById('empty');
const userModal = document.getElementById('userModal');
const modalBody = document.getElementById('modalBody');
const closeModalButton = document.querySelector('.close');

// State variables
let currentPage = 1; //currentPage for toggling pages.
let searchQuery = ''; //searchQuery for searching username.


// js/main.js

// Step 2: Basic Event Listeners

// Event Listeners
searchButton.addEventListener('click',handleSearch); //,handleSearch is same as writing ()=>{handleSearch()};

searchInput.addEventListener('keydown',(event)=>{
  if (event.key==="Enter")
    {
  handleSearch();
}});

closeModalButton.addEventListener('click',()=>{
  userModal.style.display="none";
});

window.addEventListener("click",(e)=>{ //When clicking on window, if any portion is clicked outside of modal-content, it is turned off. The userModal is a div that has no styling, so it stays as the blank and entire window.
  if (e.target===userModal)
    userModal.style.display="none";
})

// UPDATE YOUR handleSearch FUNCTION
 function handleSearch() {
    const newSearchQuery = searchInput.value.trim();
    
    if (newSearchQuery === '') {
        showError(errorElement, 'Please enter a search term'); //Pass the errorElement and errorMessage to showError function.
        return;
    }
    
        
    // If this is a different search, clear saved state
    if (newSearchQuery !== searchQuery) {
        localStorage.removeItem('githubSearchResults');
        localStorage.removeItem('githubSearchPage');
    }
    
   searchQuery=newSearchQuery; //Imp step as it removes the previous searchQuery value.
    // Reset to page 1 and fetch
    fetchAndDisplayPage(1); //Once the handleSearch function is called, it is important to fetch the results from the first page, like the ones we see across websites, so we need to pass (1) as the argument, so that it is the first page.
}


//Step 7, create the fetchAndDisplayPage function here, 
async function fetchAndDisplayPage(page) {
  currentPage=page; 
  showLoading(loadingElement);
  hideEmpty(emptyElement);
  hideError(errorElement);
  removePagination();
  try{
    const data=await searchUsers(searchQuery,currentPage);
    if (data.items.length===0){
      showEmpty(emptyElement);
      
    }
    else{
      //Display the results
      displayUsers(resultsContainer,data.items)
      addDetailsButtons();

             
            // Save to localStorage
            localStorage.setItem('githubSearchQuery', searchQuery);
            localStorage.setItem('githubSearchResults', JSON.stringify(data.items)); //Local Storage only reads strings.
            localStorage.setItem('githubSearchPage', currentPage);

      //Calculate total pages, here.
      const totalCount=data.total_count; //From the total_count key of data.
      const totalPages = Math.min(Math.ceil(totalCount / 10), 100); //Maximum upto 100 and math.ceil rounds up the data to the nearest num i.e value increases.

     const pagination=createPagination(currentPage,totalPages,fetchAndDisplayPage); //pass the fetchAndDisplay function as a reference. It could be confusing but its just like in an event listener('event',... the function reference)
     // Add pagination to the DOM: 
// 1. Get the parent element of the results container (which is the <main> element)
// 2. Append the pagination element as the last child of <main>
// This places the pagination controls right after the search results in the DOM
resultsContainer.parentNode.appendChild(pagination);

    }
  }
catch(error){
  showError(errorElement,error.message);
}
  finally{
    hideLoading(loadingElement);
    
  }
}


//Step 3: Create and import API functions from api.js file.

//At the top of the file.

//Update the handleSearch() function with async, add the try catch block to get the data from searchUsers function. 


//Step 4: Create and import the UI functions: for now displayUsers only
//At the top of the file

//Update the function of handleSearch() with displayUsers function. 

//Step 5: Create and import showUserModal function from ui.js

//Function to show data in modal for users.
async function showUserDetails(username){ 
  const userDetails=await getUserDetails(username); //showUserDetails funciton fetches the user data here.
try{
  if (userDetails){
    showUserModal(modalBody,userDetails);
    userModal.style.display="block";
  }
}
catch(error){
  showError(errorElement,error.message);
  console.log("Error fetching data", error);
}
}

// Add event listener to view details button.
function addDetailsButtons(){
const detailsButtons=document.querySelectorAll('.view-details');
detailsButtons.forEach(button=>{
  button.addEventListener('click',async()=>{
  const username=button.dataset.username; //It is like adding data-username in HTML to a button.
  await showUserDetails(username);
  })
})
}

/*Step 6: Update the import section from ui.js.
Similarly, update the handleSearch() function. */


/*Step 7: Import pagination from ui.js i.e createPagination() function., 
Update the handleSearch function and create the fetchAndDisplayPage function there.

*/


//Step 8: refinements: esc to close modal, add a cross button in search bar and update localStorage.

//Whenever the user presses the escape button, the userModal that is on display will be closed.
window.addEventListener('keydown',(event)=>{
  if (event.key==="Escape"){
    userModal.style.display="none";
  }
})

//Adding a clear button to the searchInput section, ala Youtube.
clearInput(searchInput); //Import clearInput from ui.js and this declared here to pass the searchInput variable as argument.


//Now, we add local storage so that our website retains the last data, even when turned off/reloaded.

//We update the fetchAndDisplayPage function first, setting the search username, results and page and save them there.
function restoreSearchState(){
  const savedQuery=localStorage.getItem('githubSearchQuery'); //saved search query
  const savedResults=JSON.parse(localStorage.getItem('githubSearchResults')); //results after searching a username up!
  const savedPage=Number(localStorage.getItem('githubSearchPage')); //which page those results were of, convert to number!.

 if (savedQuery && savedResults){ //if saved Query and results exist.
  searchInput.value=savedQuery; //update the searchInput.
  searchQuery=savedQuery; //pass the savedQuery value to searchQuery.

  const results=savedResults; 
  displayUsers(resultsContainer,results);

  currentPage=savedPage || 1;
  

        // If we have results, show pagination
        const totalCount = results.length; // This is approximate
        const totalPages = Math.min(Math.ceil(totalCount / 10), 100);
        
        if (totalPages > 1) {
            const pagination = createPagination(totalPages, currentPage, fetchAndDisplayPage);
            resultsContainer.parentNode.appendChild(pagination);
        }
    }
}

window.addEventListener('DOMContentLoaded',restoreSearchState);




 



