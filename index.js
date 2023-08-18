const modalEl=document.getElementById("modal")
const modal_close_btn_El=document.getElementById("modal-close-btn")
const consent_form_El=document.getElementById("consent-form")
const modal_2_El=document.getElementById("modal_2")
const submit_El=document.getElementById("submit")

// make cookie window delay
setTimeout(function(){
    modalEl.style.display='inline'
}, 1500)

// click "X" close the window
modal_close_btn_El.addEventListener('click',function(){
    modalEl.style.display='none'
})

// input the <select> id and set the "selectedIndex" to 2, after submitting clear the input field and reset the location field
function reset(){
    $("#email").prop('selectedIndex', 2);
    $("#select").prop('selectedIndex', 2);
}

// press "submit", show submission success //then the text disappear
submit_El.addEventListener('click',function(){
    modal_2_El.style.display='inline'
    setTimeout(function(){
        modal_2_El.style.display='none'
    }, 1500)
})
