//topic selection clicking redirect function
  function navigateToTopic(topicId) {
    // Construct the URL based on the topicId
    var url = '';
  
    switch (topicId) {
      case 'topic1':
        url = 'creating OGF files .html'; 
        break;
      case 'topic2':
        url = 'Installing modpacks.html'; 
        break;
        case 'topic3':
        url = 'statsediting.html'; 
        break;
        case 'topic4':
        url = 'npcbehaviorai.html'; 
        break;
        case 'topic5':
        url = 'gamemechbalancing.html'; 
        break;
        case 'topic6':
        url = 'editinggamefiles.html'; 
        break;
        case 'topic7':
        url = 'modpackmakingoverwrite.html'; 
        break;
        case 'topic8':
        url = 'INSERT'; 
        break;
        case 'topic9':
        url = 'STALKERinfos.html'; 
        break;
      default:
        url = 'defaultPage.html'; // Fallback URL if topicId is not recognized
        break;
    }
  
    // Navigate to the constructed URL
    window.location.href = url;
}

//search bar function
function performSearch() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const guides = document.querySelectorAll('.guide');

  guides.forEach(guide => {
      const title = guide.querySelector('h3').textContent.toLowerCase();
      const description = guide.querySelector('.overlay p').textContent.toLowerCase();
      
      if (title.includes(query) || description.includes(query)) {
          guide.style.display = 'block';
      } else {
          guide.style.display = 'none';
      }
  });
}

//login and signup windows js script
//ignore for now
// Get the modal
var modal = document.querySelector('.login-modal');

// Get the close button
var closeButton = document.querySelector('.close');

// Get the login link
var signupLink = document.querySelector('.signup-link');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Close the modal when clicking on the close button
closeButton.addEventListener('click', closeModal);

// Open the modal when clicking on the signup link
signupLink.addEventListener('click', openModal);

// Close the modal when clicking anywhere outside of it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

