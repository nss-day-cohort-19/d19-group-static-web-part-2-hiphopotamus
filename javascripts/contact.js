// JAVASCRIPT FOR CONTACT
document.getElementById("show-form").addEventListener("click", unHide);
function unHide() {
    document.getElementById("contact-form").className = "un-hide";
    document.getElementById("show-form").className = "hide";
}
document.getElementById("clear-submit").addEventListener("click", hide);
function hide() {
    document.getElementById("contact-form").className = "hide"
}
