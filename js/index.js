var siteNameInput = document.getElementById('siteName')
var siteUrlInput = document.getElementById('siteUrl')
var resultContainer = [];
if (localStorage.getItem('inputs') !== null) {

    resultContainer = JSON.parse(localStorage.getItem('inputs'));
    displayBookmark()

}

// Add Function

function addBookmark() {
    if (validationName() && validationUrl()) {
        var result = {
            bookmarkName: siteNameInput.value,
            url: siteUrlInput.value,

        }
        resultContainer.push(result)
        localStorage.setItem("inputs", JSON.stringify(resultContainer))
        // console.log(resultContainer)
        clearForm()
        displayBookmark()
    }
    else {
       
        
        document.getElementById("alert-box").classList.remove("d-none")
    document.getElementById("box-info").classList.add("bg-box")

    }
}





// Clear Function
function clearForm() {
    siteNameInput.value = null
    siteUrlInput.value = null

}

// Display Function
function displayBookmark() {
    var cartonta = ``

    for (var i = 0; i < resultContainer.length; i++) {
        cartonta += `
         <tr>
                    <td>${i + 1}</td>
                    <td>${resultContainer[i].bookmarkName}</td>
                    <td><button class="btn btn-visit py-1"  onclick=" visitedElement(${i}) "> <i class="fa-solid fa-eye"></i> Visit</button></td>
                    <td><button class="btn btn-delete  py-1" onclick="deletedElement(${i})"> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
                </tr>
        `


    }
    document.getElementById('cartonaData').innerHTML = cartonta
}
// Visit Function
function visitedElement(e) {

    console.log(e)
    window.open(resultContainer[e].url, '_blank')




}
// Delete Function
function deletedElement(deletedIndex) {
    resultContainer.splice(deletedIndex, 1)
    displayBookmark()
    localStorage.setItem("inputs", JSON.stringify(resultContainer))
    console.log(resultContainer)

}


// ++++++++++++++++++++++++++++ validation +++++++++++++++++++++++++++++++
// name validation

function validationName() {
    var nameRegex = /^\w{3,}(\s+\w+)*$/;
    var textName = siteNameInput.value; // input text

    if (nameRegex.test(textName)) {
        
        siteNameInput.classList.add("is-valid")
        siteNameInput.classList.remove("is-invalid")
        return true;


    } else {


        siteNameInput.classList.add("is-invalid")
        siteNameInput.classList.remove("is-valid")
        return false;
    }

}


// url validation
function validationUrl() {
    var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    var textUrl = siteUrlInput.value; //  input url

    if (urlRegex.test(textUrl)) {

        siteUrlInput.classList.add("is-valid")
        siteUrlInput.classList.remove("is-invalid")
        return true;


    } else {



        siteUrlInput.classList.add("is-invalid")
        siteUrlInput.classList.remove("is-valid")
        return false;
    }

}

// CloseAlert Function
function closeAlert(){
    
    document.getElementById("alert-box").classList.add("d-none")
    document.getElementById("box-info").classList.remove("bg-box")


}

