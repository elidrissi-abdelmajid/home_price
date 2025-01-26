function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for (var i = 0; i < uiBathrooms.length; i++) {
        if (uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }
    return -1; // Invalid Value
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for (var i = 0; i < uiBHK.length; i++) {
        if (uiBHK[i].checked) {
            return parseInt(uiBHK[i].value);
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");

    var sqft = document.getElementById("uiSqft").value;
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations").value;
    var estPrice = document.getElementById("uiEstimatedPrice");

    var requestData = {
        total_sqft: parseFloat(sqft),
        bhk: bhk,
        bath: bathrooms,
        location: location
    };

    console.log("Request Data:", requestData);

    $.ajax({
        url: "http://127.0.0.1:8000/predict_price", // Backend endpoint
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(requestData),
        success: function (data) {
            console.log(data);
            estPrice.innerHTML = "<h5>Estimated Price is: " + data.estimated_price * 10000 * 0.0116 + " USD </h5>";
        },
        error: function (xhr, status, error) {
            console.error("Error fetching price:", xhr.responseText);
            estPrice.innerHTML = "<h2>Error while fetching price</h2>";
        }
    });
}
