function submitForm() {
    var selectedName = document.getElementById("selectName").value;
    if(selectedName.length === 0){
        return;
    }
    window.location.href = "person.html?name=" + encodeURIComponent(selectedName);
}

const people = [
    
]