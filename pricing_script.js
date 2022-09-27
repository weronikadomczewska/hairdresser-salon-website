function openTab(event, service) {
    const tabcontent = document.getElementsByClassName("table_content");
    let i;
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const pricing_tab_button = document.getElementsByClassName("pricing_tab_button");
    for (const pricing_tab_button_elem of pricing_tab_button){
        pricing_tab_button_elem.classList.remove("active");
    }

    for (const tabcontent_elem of tabcontent){
        tabcontent_elem.style.display = "none";
    }


    document.getElementById(service).style.display = "block";
    event.currentTarget.className += " active";
}

document.getElementById("haircut_button").click();