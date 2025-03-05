// script.js
function toggleServiceInfo(serviceNumber) {
    const serviceInfo = document.getElementById(`service-info-${serviceNumber}`);
    if (serviceInfo.style.display === "none" || serviceInfo.style.display === "") {
        serviceInfo.style.display = "block"; // Show the info
    } else {
        serviceInfo.style.display = "none"; // Hide the info
    }
}
