function openTab(event, service) {
    // Declare all variables
    let i, tabcontent, pricing_tab_button;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="pricing_tab_button" and remove the class "active"
    pricing_tab_button = document.getElementsByClassName("pricing_tab_button");
    for (i = 0; i < pricing_tab_button.length; i++) {
        pricing_tab_button[i].className = pricing_tab_button[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(service).style.display = "block";
    event.currentTarget.className += " active";
}