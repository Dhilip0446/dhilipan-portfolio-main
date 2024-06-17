function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function downloadFile(filePath, fileName) {
    // Create a new anchor element
    const link = document.createElement('a');
  
    // Set the href to the file path
    link.href = filePath;
  
    // Set the download attribute with the desired file name
    link.download = fileName;
  
    // Append the link to the body (or any other suitable location)
    document.body.appendChild(link);
  
    // Trigger the click event on the link to initiate the download
    link.click();
  
    // Clean up by removing the temporary link element
    document.body.removeChild(link);
  }
