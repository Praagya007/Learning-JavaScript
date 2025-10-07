// js/api.js

// GitHub API base URL
const API_BASE_URL = 'https://api.github.com'; //We put the URL in a variable so that if Github changes the URL, we can just directly update here, instead of changing everywhere.

//Function to search for users.
export async function searchUsers(query,page,perPage=12){ //perPage=12 is a default parameter here to receive 10 datas per page.
  try{
  const response=await fetch(`${API_BASE_URL}/search/users?q=${query}&page=${page}&per_page=${perPage}`);
  if (!response.ok){
    throw new Error (`Github API returned status: ${response.status}`);
  }
  return await response.json(); //Return this value.
  }
  catch(error){
  throw error;
  }
}

//Function to get user Information. Used when view profile button is clicked.

export async function getUserDetails(username){
  try{
  const response=await fetch(`${API_BASE_URL}/users/${username}`);
  if (!response.ok) {
            throw new Error(`GitHub API returned status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
  }
