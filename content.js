function removeJobsAlreadyApplied() {
    // Select all li elements with the class 'ember-view'
    const listItems = document.querySelectorAll('li.ember-view');

    listItems.forEach((listItem) => {
        // Check for nested ul with class 'job-card-list__footer-wrapper' containing 'Applied'
        const footer = listItem.querySelector('ul.job-card-list__footer-wrapper');
        if (footer && footer.innerText.includes('Applied')) {
            // Remove the li element
            console.log(listItem);
        }
    });
}

removeJobsAlreadyApplied(); // Run at initial load

let scrollTimer = -1; // init
function bodyScroll(){
    if(scrollTimer != -1){
        window.clearTimeout(scrollTimer); // https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout
    }
    // run function after 500 ms
    scrollTimer = window.setTimeout(removeJobsAlreadyApplied, 500);
}

document.addEventListener("wheel", bodyScroll);