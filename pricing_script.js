function openTab(event, service) {
    let i, tabcontent, pricing_tab_button;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    pricing_tab_button = document.getElementsByClassName("pricing_tab_button");
    for (i = 0; i < pricing_tab_button.length; i++) {
        pricing_tab_button[i].className = pricing_tab_button[i].className.replace(" active", "");
    }

    document.getElementById(service).style.display = "block";
    event.currentTarget.className += " active";
}