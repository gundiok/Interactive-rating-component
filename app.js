const completedState = document.querySelector(".completed-state");
const initialState = document.querySelector(".initial-state");
const submitButton = document.getElementById("submit-btn");
const ratingValue = document.getElementById("final-rating");
const selectedRating1 = document.querySelector(".rating-value1");
const selectedRating2 = document.querySelector(".rating-value2");
const selectedRating3 = document.querySelector(".rating-value3");
const selectedRating4 = document.querySelector(".rating-value4");
const selectedRating5 = document.querySelector(".rating-value5");

initialState.style.display = "flex";
completedState.style.display = "none";


selectedRating1.addEventListener("click", function() {
    selectedRating1.classList.add("selected");
    selectedRating1.classList.remove("rating-value1");
    submitButton.addEventListener("click", function(){
        initialState.style.display = "none";
        completedState.style.display = "flex";
        ratingValue.textContent = selectedRating1.textContent;
    })})



selectedRating2.addEventListener("click", function() {
    selectedRating2.classList.add("selected");
    selectedRating2.classList.remove("rating-value2");
    submitButton.addEventListener("click", function(){
        initialState.style.display = "none";
        completedState.style.display = "flex";
        ratingValue.textContent = selectedRating2.textContent;
    })
    
})
selectedRating3.addEventListener("click", function() {
    selectedRating3.classList.add("selected");
    selectedRating3.classList.remove("rating-value3");
    submitButton.addEventListener("click", function(){
        initialState.style.display = "none";
        completedState.style.display = "flex";
        ratingValue.textContent = selectedRating3.textContent;
    })
})
selectedRating4.addEventListener("click", function() {
    selectedRating4.classList.add("selected");
    selectedRating4.classList.remove("rating-value4");
    submitButton.addEventListener("click", function(){
        initialState.style.display = "none";
        completedState.style.display = "flex";
        ratingValue.textContent = selectedRating4.textContent;
    })
})

selectedRating5.addEventListener("click", function() {
    selectedRating5.classList.add("selected");
    selectedRating5.classList.remove("rating-value5");
    submitButton.addEventListener("click", function(){
        initialState.style.display = "none";
        completedState.style.display = "flex";
        ratingValue.textContent = selectedRating5.textContent;
    })
})




