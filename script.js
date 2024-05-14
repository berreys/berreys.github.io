function submitForm() {
    var selectedName = document.getElementById("selectName").value;
    window.location.href = "person.html?name=" + encodeURIComponent(selectedName);
}
