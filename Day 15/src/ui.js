
//Display users function.
export function displayUsers(resultsContainer,users){
  resultsContainer.innerHTML="";
  
  users.forEach(user => {
    const userCard=createUserCard(user);
    resultsContainer.appendChild(userCard);
  });
}

function createUserCard(user){
  const card=document.createElement("div");
  card.className="user-card"

  card.innerHTML=`
  <img src=${user.avatar_url} alt="${user.login}" />
  <h3>${user.login}</h3>
  <a href="${user.html_url}" target="_blank">View Profile</a>
  <button class="view-details" data-username="${user.login}">View Details</button>
  `
  return card;
}

//Part of Step 5: Create the showModal function.
// js/ui.js

// Function to show user details in modal
export function showUserModal(modalBody, userDetails) {
    modalBody.innerHTML = `
        <div class="user-details">
            <img src="${userDetails.avatar_url}" alt="${userDetails.login}" />
            <h2>${userDetails.name || userDetails.login}</h2>
            <p>${userDetails.bio || 'No bio available'}</p>
            
            <div class="stats">
                <div>
                    <strong>${userDetails.public_repos}</strong>
                    <span>Repositories</span>
                </div>
                <div>
                    <strong>${userDetails.followers}</strong>
                    <span>Followers</span>
                </div>
                <div>
                    <strong>${userDetails.following}</strong>
                    <span>Following</span>
                </div>
            </div>
            
            <div class="links">
                ${userDetails.blog ? `<a href="${userDetails.blog}" target="_blank">Blog</a>` : ''}
                ${userDetails.twitter_username ? `<a href="https://twitter.com/${userDetails.twitter_username}" target="_blank">Twitter</a>` : ''}
                <a href="${userDetails.html_url}" target="_blank">GitHub Profile</a>
            </div>
        </div>
    `;
}

//Step 6: Functions to handle loading, empty and error states.
export function showLoading(loadingElement){
 loadingElement.style.display="block";
}
export function hideLoading(loadingElement){
loadingElement.style.display="none";
}
export function showError(errorElement,message){
const errorParagraph=errorElement.querySelector("p");
errorParagraph.textContent=message;
errorElement.style.display="block";
}
export function hideError(errorElement){
errorElement.style.display="none";
}
export function showEmpty(emptyElement){
emptyElement.style.display="block";
}
export function hideEmpty(emptyElement){
  emptyElement.style.display="none";
}

//Step 7: create and export pagination i.e createPagination function.
export function createPagination(currentPage,totalPages,onPageChange){
 const paginationContainer=document.createElement("div");
 paginationContainer.className="pagination";


 //Previous button
 const previousButton=document.createElement("button");
 previousButton.textContent="Previous";
 previousButton.disabled=currentPage===1;
 previousButton.addEventListener('click',()=>{
  if (currentPage>1){
    onPageChange(currentPage-1);
  }
 })

//Next button
const nextButton=document.createElement("button");
nextButton.textContent="Next"
nextButton.disabled=currentPage===totalPages;
nextButton.addEventListener('click',()=>{
  onPageChange(currentPage+1);
})

//Page info
const pageInfo=document.createElement("span");
pageInfo.textContent=`Page ${currentPage} of ${totalPages} pages.`
pageInfo.style.margin='0 10px';
pageInfo.style.alignSelf="center";

 
    paginationContainer.appendChild(previousButton);
    paginationContainer.appendChild(pageInfo);
    paginationContainer.appendChild(nextButton);
    
return paginationContainer;
}
//Function to remove existing pagination
export function removePagination() {
    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) {
        existingPagination.remove();
    }
}

//This was from step 8: UI function to clear search, like youtube.
export function clearInput(input) {
    const clearButton = document.querySelector('.clear-button');

    // Show or hide the clear button based on input content
    function toggleClearButton() {
        if (input.value.trim() !== "") {
            clearButton.classList.add("visible"); //Add the visibel class here.
            
        } else {
            clearButton.classList.remove("visible"); //Remove the visible class here.
        }
    }

    // Run initially in case input has a default value
    toggleClearButton();

    // Listen to input events (typing, deleting, etc. so we use the input event listener.)
    input.addEventListener('input', toggleClearButton); 

    // Clear the input and hide the clear button when clicked
    clearButton.addEventListener('click', () => {
        input.value = "";
        toggleClearButton(); // Hide the clear button
        input.focus(); // Refocus the input, imp for UX.
    });
}

