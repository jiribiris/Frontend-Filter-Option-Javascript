const filterButtons = document.querySelectorAll(".filter-buttons .catogery-button");
const filterableCards = document.querySelectorAll(".card-container .card-item");

//Define the diltercards function
const filterCards = (e) =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // console.log(e.target);
    
    //Iterate over each filterable card
    filterableCards.forEach(card =>{
        //Add "hide" class to hide the card initially
        card.classList.add("hide");
        //filter card
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
}
//add click event listner to each filter button
filterButtons.forEach(button =>button.addEventListener("click", filterCards));
