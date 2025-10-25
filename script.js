// Destination data
const destinations = [
    {
        name: "Goa, India",
        price: 2000,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        desc: "Enjoy beaches, shacks, and sunsets starting at ₹2,000/day."
    },
    {
        name: "Bangkok, Thailand",
        price: 3000,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        desc: "Street food, temples, and nightlife under ₹3,000/day."
    },
    {
        name: "Kathmandu, Nepal",
        price: 1500,
        image: "https://images.unsplash.com/photo-1533050487297-09b450131914",
        desc: "Explore mountains and culture from ₹1,500/day."
    },
    {
        name: "Bali, Indonesia",
        price: 3500,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        desc: "Tropical paradise for ₹3,500/day."
    },
    {
        name: "Manali, India",
        price: 1800,
        image: "https://images.unsplash.com/photo-1618590916502-9a0cf09e633a",
        desc: "Snowy hills and adventure for ₹1,800/day."
    }
];

// Load all destinations
const destinationContainer = document.getElementById("destinationCards");
function loadDestinations(list) {
    destinationContainer.innerHTML = "";
    list.forEach(d => {
        destinationContainer.innerHTML += `
            <div class="card">
                <img src="${d.image}" alt="${d.name}">
                <h3>${d.name}</h3>
                <p>${d.desc}</p>
            </div>
        `;
    });
}
loadDestinations(destinations);

// Smooth scroll to destinations
function scrollToDestinations() {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}

// Budget filter
document.getElementById("budgetButton").addEventListener("click", () => {
    const amount = document.getElementById("budgetInput").value;
    const resultsDiv = document.getElementById("budgetResults");

    if (amount === "" || amount <= 0) {
        resultsDiv.innerHTML = "<p>Please enter a valid amount.</p>";
        return;
    }

    const matches = destinations.filter(d => d.price <= amount);
    if (matches.length > 0) {
        resultsDiv.innerHTML = matches.map(d => `
            <div class="card">
                <img src="${d.image}" alt="${d.name}">
                <h3>${d.name}</h3>
                <p>${d.desc}</p>
            </div>
        `).join("");
    } else {
        resultsDiv.innerHTML = "<p>No destinations found within your budget 😔</p>";
    }
});

// Simple contact form feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    this.reset();
});
