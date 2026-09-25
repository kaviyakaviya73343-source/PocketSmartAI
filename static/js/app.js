const resultBox = document.getElementById("result");
const loading = document.getElementById("loading");


// ==========================================
// LOADING
// ==========================================

function showLoading() {
    loading.innerText = "🤖 Pocket SmartAI is thinking...";
    resultBox.innerText = "";
}


// ==========================================
// SHOW RESULT
// ==========================================

function showResult(data) {

    loading.innerText = "";

    if (data.success) {

        resultBox.innerText = data.result;

    } else {

        resultBox.innerText =
            "❌ Error: " + data.message;

    }
}


// ==========================================
// HOME PLANNER
// ==========================================

async function generateHome() {

    showLoading();

    const room =
        document.getElementById("room").value;

    const budget =
        document.getElementById("homeBudget").value;

    const quantity =
        document.getElementById("quantity").value;

    const style =
        document.getElementById("style").value;


    if (!room || !budget) {

        resultBox.innerText =
            "❌ Please enter room and budget.";

        loading.innerText = "";

        return;
    }


    try {

        const response = await fetch(
            "/generate-home",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    room: room,
                    budget: budget,
                    quantity: quantity,
                    style: style
                })
            }
        );


        const data =
            await response.json();

        showResult(data);


    } catch (error) {

        console.error(error);

        loading.innerText = "";

        resultBox.innerText =
            "❌ Connection error: " +
            error.message;
    }
}


// ==========================================
// PARTY PLANNER
// ==========================================

async function generateParty() {

    showLoading();

    const eventType =
        document.getElementById("eventType").value;

    const budget =
        document.getElementById("partyBudget").value;

    const guests =
        document.getElementById("guests").value;

    const location =
        document.getElementById("location").value;


    if (!eventType || !budget || !guests) {

        resultBox.innerText =
            "❌ Please enter event, budget and guests.";

        loading.innerText = "";

        return;
    }


    try {

        const response = await fetch(
            "/generate-party",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    event_type: eventType,
                    budget: budget,
                    guests: guests,
                    location: location
                })
            }
        );


        const data =
            await response.json();

        showResult(data);


    } catch (error) {

        console.error(error);

        loading.innerText = "";

        resultBox.innerText =
            "❌ Connection error: " +
            error.message;
    }
}


// ==========================================
// JEWELRY PLANNER
// ==========================================

async function generateJewelry() {

    showLoading();

    const budget =
        document.getElementById("jewelryBudget").value;

    const occasion =
        document.getElementById("occasion").value;

    const outfit =
        document.getElementById("outfit").value;

    const image =
        document.getElementById("outfitImage").files[0];


    if (!budget || !occasion) {

        resultBox.innerText =
            "❌ Please enter budget and occasion.";

        loading.innerText = "";

        return;
    }


    const formData = new FormData();

    formData.append(
        "budget",
        budget
    );

    formData.append(
        "occasion",
        occasion
    );

    formData.append(
        "outfit",
        outfit
    );


    if (image) {

        formData.append(
            "image",
            image
        );
    }


    try {

        const response = await fetch(
            "/generate-jewelry",
            {
                method: "POST",
                body: formData
            }
        );


        const data =
            await response.json();

        showResult(data);


    } catch (error) {

        console.error(error);

        loading.innerText = "";

        resultBox.innerText =
            "❌ Connection error: " +
            error.message;
    }
}