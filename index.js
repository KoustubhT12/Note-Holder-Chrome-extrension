document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("notesTextarea");
    const clearButton = document.getElementById("clearAll");

   
    chrome.storage.local.get(["savedText"], (result) => {
        if (result.savedText) {
            textarea.value = result.savedText;
        }
    });

    textarea.addEventListener("input", () => {
        chrome.storage.local.set({savedText: textarea.value});
    });

    
    clearButton.addEventListener("click",()=>{
        textarea.value="";
        chrome.storage.local.remove("savedText")
    })


});
