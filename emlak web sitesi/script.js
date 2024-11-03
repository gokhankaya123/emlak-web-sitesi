let properties = [];

function searchProperties() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const propertyList = document.getElementById("propertyList");
    propertyList.innerHTML = '';

    const filteredProperties = properties.filter(property => 
        property.location.toLowerCase().includes(searchInput)
    );

    filteredProperties.forEach(property => {
        const propertyDiv = document.createElement("div");
        propertyDiv.classList.add("property");
        propertyDiv.innerHTML = `
            <h3>${property.title}</h3>
            <p>${property.location}</p>
            <p>${property.description}</p>
        `;
        propertyList.appendChild(propertyDiv);
    });
}

function addProperty() {
    const title = document.getElementById("propertyTitle").value.trim();
    const location = document.getElementById("propertyLocation").value.trim();
    const description = document.getElementById("propertyDescription").value.trim();

    if (title === "" || location === "" || description === "") {
        alert("Tüm alanları doldurmalısınız.");
        return;
    }

    const property = { title, location, description };
    properties.push(property);

    document.getElementById("propertyTitle").value = "";
    document.getElementById("propertyLocation").value = "";
    document.getElementById("propertyDescription").value = "";

    searchProperties();
}
