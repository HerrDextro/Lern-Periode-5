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

