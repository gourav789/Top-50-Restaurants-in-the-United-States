// ========================================
// TOP 50 RESTAURANTS - COMPLETE JAVASCRIPT
// ========================================

// COMPLETE DATABASE - ALL 50 RESTAURANTS
const restaurantsDatabase = [
    { id: 1, name: "Smyth", city: "Chicago", state: "IL", cuisine: "Progressive Farm-to-Table", region: "midwest", ranking: 1, michelin: 3, jamesBeard: false, na50Best: true, desc: "No. 1 in North America. Hyper-seasonal umami-intensive compositions. $420 tasting menu.", price: 420, dishes: "Venison with Blood Sausage, Trout Donut, Birch Twig Ice Cream" },
    { id: 2, name: "Dakar NOLA", city: "New Orleans", state: "LA", cuisine: "Senegambian-Creole", region: "south", ranking: 4, michelin: 0, jamesBeard: false, na50Best: true, desc: "Best Restaurant in South USA. Senegambian-Creole fusion. $175 seven-course tasting menu.", price: 175, dishes: "Jollof Rice, Soupa Konja, Raw Royal Red Pepper Shrimp" },
    { id: 3, name: "Albi", city: "Washington", state: "DC", cuisine: "Levantine / Palestinian", region: "northeast", ranking: 6, michelin: 0, jamesBeard: true, na50Best: true, desc: "Highest Climber 2026. Palestinian open hearth dining. $165 Sofra menu.", price: 165, dishes: "Wood-Fired Lamb Sfeeha, Maryland Crab Hummus" },
    { id: 4, name: "Atomix", city: "New York", state: "NY", cuisine: "Modern Korean", region: "northeast", ranking: 7, michelin: 0, jamesBeard: false, na50Best: true, desc: "Refined 12-course tasting with immersive storytelling. Bespoke ceramics.", price: 350, dishes: "Modern Korean Fine Dining Multi-Course" },
    { id: 5, name: "César", city: "New York", state: "NY", cuisine: "Japanese-Influenced Seafood", region: "northeast", ranking: 10, michelin: 2, jamesBeard: false, na50Best: true, desc: "13-course Japanese-influenced seafood. $368 with supplements. Two Michelin stars.", price: 368, dishes: "Caviar, Sea Urchin, Foie Gras Additions" },
    { id: 6, name: "Kalaya", city: "Philadelphia", state: "PA", cuisine: "Southern Thai", region: "northeast", ranking: 11, michelin: 0, jamesBeard: false, na50Best: true, desc: "Uncompromising Southern Thai. House-pounded curry pastes. Authentic spice.", price: 85, dishes: "House-Pounded Curry Pastes, Traditional Spice Blends" },
    { id: 7, name: "Le Veau d'Or", city: "New York", state: "NY", cuisine: "Classical French Neo-Bistro", region: "northeast", ranking: 12, michelin: 0, jamesBeard: false, na50Best: true, desc: "Resurrected 2024. Classical French technique with modern precision. $135 prix fixe.", price: 135, dishes: "Tripes à La Mode, Frogs' Legs Persillade, Pâté en Croûte" },
    { id: 8, name: "Le Bernardin", city: "New York", state: "NY", cuisine: "Fine Seafood", region: "northeast", ranking: 13, michelin: 3, jamesBeard: false, na50Best: true, desc: "Immutable fine dining institution. Three Michelin stars for decades. $350-$530.", price: 350, dishes: "Perfectly Prepared Oceanic Ingredients" },
    { id: 9, name: "Kabawa", city: "New York", state: "NY", cuisine: "Bajan / Caribbean", region: "northeast", ranking: 14, michelin: 0, jamesBeard: false, na50Best: true, desc: "Bold Caribbean celebration. Three-course communal dining. High-energy hospitality.", price: 95, dishes: "Raw Royal Red Pepper Shrimp, Breadfruit Tostones, Slow-Roasted Goat" },
    { id: 10, name: "SingleThread", city: "Healdsburg", state: "CA", cuisine: "Japanese / Californian", region: "west", ranking: 16, michelin: 3, jamesBeard: false, na50Best: true, desc: "Farm-to-table perfection. Japanese omotenashi hospitality. Micro-seasonal precision.", price: 385, dishes: "Farm-to-Table Japanese Tasting, Seasonal Ingredients" },
    { id: 11, name: "Jungsik", city: "New York", state: "NY", cuisine: "New Korean", region: "northeast", ranking: 18, michelin: 3, jamesBeard: true, na50Best: true, desc: "Introduced New Korean fine dining globally. Three Michelin stars. Chef James Beard Award.", price: 350, dishes: "Korean Fermentation, Opulent Ingredients" },
    { id: 12, name: "Penny", city: "New York", state: "NY", cuisine: "Seafood Counter", region: "northeast", ranking: 19, michelin: 0, jamesBeard: false, na50Best: true, desc: "Rapid-fire seafood precision counter service.", price: 75, dishes: "Fresh Seafood Counter Service" },
    { id: 13, name: "Emeril's", city: "New Orleans", state: "LA", cuisine: "Elevated Creole", region: "south", ranking: 20, michelin: 0, jamesBeard: false, na50Best: true, desc: "Modernized flagship. Intergenerational success. SevenRooms Icon Award 2026.", price: 150, dishes: "Elevated Creole Tasting Menu" },
    { id: 14, name: "Chubby Fish", city: "Charleston", state: "SC", cuisine: "Lowcountry Seafood", region: "south", ranking: 21, michelin: 0, jamesBeard: false, na50Best: true, desc: "No-reservations model. Daily changing hyper-local seafood. $60 per person.", price: 60, dishes: "Triggerfish Ceviche, Yellowfin Tuna, Caviar Sammich" },
    { id: 15, name: "Saison", city: "San Francisco", state: "CA", cuisine: "Hearth-Fired Californian", region: "west", ranking: 22, michelin: 2, jamesBeard: false, na50Best: true, desc: "Open-hearth California cuisine. Two Michelin stars. $328 main, $78 bar tasting.", price: 328, dishes: "Bluefin Tuna, Geoduck Caviar, Amberjack Collar" },
    { id: 16, name: "Aska", city: "Brooklyn", state: "NY", cuisine: "Nordic / Northeastern", region: "northeast", ranking: 23, michelin: 0, jamesBeard: false, na50Best: true, desc: "Nordic sensibilities in Northeast. Severe 12-14 course tasting. $375.", price: 375, dishes: "Fermentation-Heavy Nordic Tasting Menu" },
    { id: 17, name: "Moon Rabbit", city: "Washington", state: "DC", cuisine: "Modern Vietnamese", region: "northeast", ranking: 24, michelin: 0, jamesBeard: false, na50Best: true, desc: "Modern Vietnamese with Susan Bae pastry mastery. 2025 NA Best Pastry Chef.", price: 120, dishes: "Modern Vietnamese with French Pastry" },
    { id: 18, name: "Holbox", city: "Los Angeles", state: "CA", cuisine: "Mexican Seafood", region: "west", ranking: 26, michelin: 0, jamesBeard: false, na50Best: true, desc: "Impeccable Mexican seafood counter in Los Angeles.", price: 85, dishes: "Mexican Seafood Counter Service" },
    { id: 19, name: "Avize", city: "Atlanta", state: "GA", cuisine: "Modern Alpine / Southern", region: "south", ranking: 29, michelin: 0, jamesBeard: false, na50Best: true, desc: "Alpine cuisine through Southern lens. Fine-dining with buzzy atmosphere.", price: 140, dishes: "Lemon-Pepper Wet Frog Legs, Fermented Carrot Tare" },
    { id: 20, name: "Acamaya", city: "New Orleans", state: "LA", cuisine: "Mexican Mariscos", region: "south", ranking: 30, michelin: 0, jamesBeard: false, na50Best: true, desc: "Mexican seafood love letter. Gulf Coast bounty. Terracotta lattice design.", price: 110, dishes: "Arroz Negro, Gulf Shrimp Aguachile" },
    { id: 21, name: "Addison", city: "San Diego", state: "CA", cuisine: "Contemporary Californian", region: "west", ranking: 31, michelin: 3, jamesBeard: false, na50Best: true, desc: "Premier three-Michelin Southern California destination. William Bradley leadership.", price: 360, dishes: "Contemporary Californian Fine Dining" },
    { id: 22, name: "Providence", city: "Los Angeles", state: "CA", cuisine: "Sustainable Seafood", region: "west", ranking: 32, michelin: 3, jamesBeard: false, na50Best: true, desc: "Three Michelin stars. Wild-caught sustainable seafood benchmark.", price: 340, dishes: "Wild-Caught Sustainable Seafood" },
    { id: 23, name: "Benu", city: "San Francisco", state: "CA", cuisine: "Contemporary Asian", region: "west", ranking: 33, michelin: 0, jamesBeard: false, na50Best: true, desc: "Contemporary Asian mastery. Corey Lee 2026 Chefs' Choice Award.", price: 315, dishes: "Contemporary Asian Fine Dining" },
    { id: 24, name: "Corima", city: "New York", state: "NY", cuisine: "Northern Mexican", region: "northeast", ranking: 36, michelin: 0, jamesBeard: false, na50Best: true, desc: "Ambitious Northern Mexican techniques to New York.", price: 95, dishes: "Northern Mexican Fine Dining" },
    { id: 25, name: "Dōgon", city: "Washington", state: "DC", cuisine: "Afro-Caribbean", region: "northeast", ranking: 37, michelin: 0, jamesBeard: false, na50Best: true, desc: "Kwame Onwuachi's second venue. Afro-Caribbean and West African traditions.", price: 115, dishes: "Afro-Caribbean and West African Cuisine" },
    { id: 26, name: "Torrisi", city: "New York", state: "NY", cuisine: "Italian-American", region: "northeast", ranking: 38, michelin: 0, jamesBeard: false, na50Best: true, desc: "Glamorous Italian-American luxury revival. Legendary status.", price: 100, dishes: "Italian-American Fine Dining" },
    { id: 27, name: "Tatiana", city: "New York", state: "NY", cuisine: "Afro-Caribbean / New York", region: "northeast", ranking: 39, michelin: 0, jamesBeard: false, na50Best: true, desc: "Kwame Onwuachi at Lincoln Center. Afro-Caribbean menu. Cultural magnetism.", price: 140, dishes: "Afro-Caribbean Short Rib Pastrami, Oxtails" },
    { id: 28, name: "Friday Saturday Sunday", city: "Philadelphia", state: "PA", cuisine: "Modern American", region: "northeast", ranking: 40, michelin: 0, jamesBeard: false, na50Best: true, desc: "Neighborhood staple to national powerhouse. World-class cocktails.", price: 120, dishes: "Modern American with Exquisite Sauces" },
    { id: 29, name: "Semma", city: "New York", state: "NY", cuisine: "Heritage Southern Indian", region: "northeast", ranking: 41, michelin: 0, jamesBeard: false, na50Best: true, desc: "Previously #1 on NYT list. Incendiary heritage Southern Indian cuisine.", price: 105, dishes: "Heritage Southern Indian Fine Dining" },
    { id: 30, name: "Pascual", city: "Washington", state: "DC", cuisine: "Regional Mexican", region: "northeast", ranking: 42, michelin: 0, jamesBeard: false, na50Best: true, desc: "Regional Mexican excellence in Washington DC.", price: 95, dishes: "Regional Mexican Cuisine" },
    { id: 31, name: "Gramercy Tavern", city: "New York", state: "NY", cuisine: "New American", region: "northeast", ranking: 43, michelin: 0, jamesBeard: false, na50Best: true, desc: "Legendary establishment. Unparalleled Danny Meyer hospitality longevity.", price: 120, dishes: "New American Fine Dining" },
    { id: 32, name: "Atelier Crenn", city: "San Francisco", state: "CA", cuisine: "French / Pescatarian", region: "west", ranking: 44, michelin: 0, jamesBeard: false, na50Best: true, desc: "Dominique Crenn's pescatarian flagship. 2026 Sustainable Award. Poetic plating.", price: 320, dishes: "French Pescatarian Fine Dining" },
    { id: 33, name: "Sons & Daughters", city: "San Francisco", state: "CA", cuisine: "New American", region: "west", ranking: 45, michelin: 0, jamesBeard: false, na50Best: true, desc: "Elegant New American tasting menus in San Francisco.", price: 280, dishes: "New American Tasting Menu" },
    { id: 34, name: "Somni", city: "Los Angeles", state: "CA", cuisine: "Avant-Garde Spanish", region: "west", ranking: 46, michelin: 3, jamesBeard: false, na50Best: true, desc: "Avant-garde Spanish molecular revival. Three Michelin stars.", price: 360, dishes: "Avant-Garde Spanish Molecular Gastronomy" },
    { id: 35, name: "Kato", city: "Los Angeles", state: "CA", cuisine: "Taiwanese-American", region: "west", ranking: 49, michelin: 0, jamesBeard: false, na50Best: true, desc: "Elevating Taiwanese-American cuisine in Los Angeles.", price: 105, dishes: "Taiwanese-American Fine Dining" },
    { id: 36, name: "Diane's Place", city: "Minneapolis", state: "MN", cuisine: "Hmong-American", region: "midwest", ranking: 50, michelin: 0, jamesBeard: false, na50Best: true, desc: "Diane Moua's Hmong-American heritage exploration. Traditional cross-stitch interior.", price: 95, dishes: "Coconut-Pandan Croissants, Slow-Cooked Pulled Pork, Laab Beef Carpaccio" },
    { id: 37, name: "Bûcheron", city: "Minneapolis", state: "MN", cuisine: "French / Midwestern", region: "midwest", ranking: null, michelin: 0, jamesBeard: true, na50Best: false, desc: "2025 James Beard Best New Restaurant. French technique with Midwestern bounty. ~$105.", price: 105, dishes: "Vadouvan Curry Pappardelle, Wild Acres Spring Chicken" },
    { id: 38, name: "Frasca Food and Wine", city: "Boulder", state: "CO", cuisine: "Friulian Italian", region: "southwest", ranking: null, michelin: 0, jamesBeard: true, na50Best: false, desc: "2025 James Beard Outstanding Restaurant. Friuli-Venezia Giulia mastery. $230.", price: 230, dishes: "Friulian Italian Cuisine" },
    { id: 39, name: "Gift Horse", city: "Providence", state: "RI", cuisine: "Korean / New England Raw", region: "northeast", ranking: null, michelin: 0, jamesBeard: true, na50Best: false, desc: "Sky Haneul Kim, 2025 JB Best Chef: Northeast. Korean-sensibility raw bar. $110.", price: 110, dishes: "Korean-Style Doughboys with Caviar, Seafood Ssäm Platters" },
    { id: 40, name: "Peninsula", city: "Nashville", state: "TN", cuisine: "Iberian-Influenced Southern", region: "south", ranking: null, michelin: 0, jamesBeard: true, na50Best: false, desc: "Jake Howell, 2025 JB Best Chef: Southeast. Iberian-influenced. $70-$120 per person.", price: 95, dishes: "Iberian-Influenced Southern Cuisine" },
    { id: 41, name: "Lom Wong", city: "Phoenix", state: "AZ", cuisine: "Regional Village Thai", region: "southwest", ranking: null, michelin: 0, jamesBeard: true, na50Best: false, desc: "Yotaka Martin, 2025 JB Best Chef: Southwest. Village-specific Thai recipes. Hand-pounded pastes.", price: 40, dishes: "Yam Mamuang Boran, Kaeng Phet Charinda" },
    { id: 42, name: "Belly of the Beast", city: "Spring", state: "TX", cuisine: "Mexican / Global Counter", region: "south", ranking: null, michelin: 0, jamesBeard: true, na50Best: false, desc: "Thomas Bille, 2025 JB Best Chef: Texas. À la carte + $85 Chef's Counter. $22-$120.", price: 85, dishes: "Texas Redfish with Mole Verde, Bluefin Tuna Tostadas" },
    { id: 43, name: "Owamni", city: "Minneapolis", state: "MN", cuisine: "Decolonized Indigenous", region: "midwest", ranking: null, michelin: 0, jamesBeard: true, na50Best: false, desc: "'Sioux Chef' Sean Sherman. Strictly decolonized menu. Four-course prix fixe.", price: 100, dishes: "Decolonized Indigenous Cuisine, Bison, Elk, Wild Game" },
    { id: 44, name: "Kann", city: "Portland", state: "OR", cuisine: "Haitian Live-Fire", region: "west", ranking: null, michelin: 0, jamesBeard: true, na50Best: false, desc: "Gregory Gourdet. Haitian-Pacific Northwest. Live-fire. Zero-proof cocktails. $22-$120.", price: 75, dishes: "Twice-Cooked Griyo Pork, Crispy Taro Root Fritters" },
    { id: 45, name: "Smithereens", city: "New York", state: "NY", cuisine: "Neighborhood American", region: "northeast", ranking: null, michelin: 0, jamesBeard: false, na50Best: false, desc: "Topped 2025 NYT list. Intimate, accessible neighborhood charm.", price: 65, dishes: "Neighborhood American Cuisine" },
    { id: 46, name: "P Thai's Khao Man Gai", city: "Austin", state: "TX", cuisine: "Thai Comfort", region: "south", ranking: null, michelin: 0, jamesBeard: false, na50Best: false, desc: "No. 2 on 2025 NYT list. Hainanese chicken rice adapted to Texas. $12.", price: 12, dishes: "Hainanese Chicken Rice" },
    { id: 47, name: "Pilgrim's Inn", city: "Deer Isle", state: "ME", cuisine: "Coastal New England", region: "northeast", ranking: null, michelin: 0, jamesBeard: false, na50Best: false, desc: "No. 3 on 2025 NYT list. Local maritime sourcing. Hyper-seasonal New England.", price: 95, dishes: "Local Maritime Seafood, New England Produce" },
    { id: 48, name: "Wildweed", city: "Cincinnati", state: "OH", cuisine: "Seasonal Pasta / American", region: "midwest", ranking: null, michelin: 0, jamesBeard: false, na50Best: false, desc: "NA 50 Best 'One To Watch' 2026. Hyper-seasonal Ohio River Valley. Masterful tuna tartare.", price: 85, dishes: "Masterful Tuna Tartare, Hyper-Seasonal Pasta" },
    { id: 49, name: "Sanders BBQ Supply Co.", city: "Chicago", state: "IL", cuisine: "Chicago Barbecue", region: "midwest", ranking: null, michelin: 0, jamesBeard: false, na50Best: false, desc: "2025 NYT pivot toward hyper-local specialty. Chicago BBQ mastery. ~$60.", price: 60, dishes: "Chicago Barbecue, Smoked Meats" },
    { id: 50, name: "Yardy Rum Bar", city: "Eugene", state: "OR", cuisine: "Caribbean / Pacific NW", region: "west", ranking: null, michelin: 0, jamesBeard: false, na50Best: false, desc: "Caribbean-Pacific Northwest fusion. Vibrant cultural bridge.", price: 50, dishes: "Caribbean-Pacific Northwest Fusion" }
];

// ========================================
// DOM ELEMENTS
// ========================================

const restaurantContainer = document.getElementById('restaurantContainer');
const searchBox = document.getElementById('searchBox');
const filterState = document.getElementById('filterState');
const filterCuisine = document.getElementById('filterCuisine');
const filterAward = document.getElementById('filterAward');
const sortBy = document.getElementById('sortBy');
const noResultsMsg = document.getElementById('noResultsMsg');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');
const regionTabs = document.querySelectorAll('.region-btn');
const regionContent = document.getElementById('regionContent');
const faqItems = document.querySelectorAll('.faq-item');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-links');

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded. Initializing...');
    
    initializeFilters();
    displayRestaurants(restaurantsDatabase);
    setupEventListeners();
    generateRegionalContent();
});

// ========================================
// POPULATE FILTER DROPDOWNS
// ========================================

function initializeFilters() {
    // Populate states
    const states = [...new Set(restaurantsDatabase.map(r => r.state))].sort();
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        filterState.appendChild(option);
    });

    // Populate cuisines
    const cuisines = [...new Set(restaurantsDatabase.map(r => r.cuisine))].sort();
    cuisines.forEach(cuisine => {
        const option = document.createElement('option');
        option.value = cuisine;
        option.textContent = cuisine;
        filterCuisine.appendChild(option);
    });
}

// ========================================
// DISPLAY RESTAURANTS - MAIN FUNCTION
// ========================================

function displayRestaurants(restaurantsToShow) {
    console.log('Displaying', restaurantsToShow.length, 'restaurants');
    
    // Clear container
    restaurantContainer.innerHTML = '';
    
    // Show/hide no results message
    if (restaurantsToShow.length === 0) {
        noResultsMsg.style.display = 'block';
        return;
    } else {
        noResultsMsg.style.display = 'none';
    }

    // Create restaurant cards
    restaurantsToShow.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';

        // Build awards badges
        let awards = '';
        if (restaurant.michelin > 0) {
            awards += `<span class="award-badge michelin">★ ${restaurant.michelin} Michelin</span>`;
        }
        if (restaurant.jamesBeard) {
            awards += `<span class="award-badge">James Beard</span>`;
        }
        if (restaurant.na50Best) {
            awards += `<span class="award-badge">NA 50 Best</span>`;
        }

        // Build ranking display
        const rankingDisplay = restaurant.ranking ? `<span class="restaurant-rank">No. ${restaurant.ranking}</span>` : '';

        card.innerHTML = `
            <h3>${restaurant.name}</h3>
            ${rankingDisplay}
            <div class="restaurant-location">${restaurant.city}, ${restaurant.state}</div>
            <span class="restaurant-cuisine">${restaurant.cuisine}</span>
            <p class="restaurant-description">${restaurant.desc}</p>
            <div class="restaurant-awards">${awards}</div>
            <div class="restaurant-buttons">
                <button class="btn-detail" onclick="openModal(${restaurant.id})">View Details</button>
                <button class="btn-website">Website</button>
            </div>
        `;

        restaurantContainer.appendChild(card);
    });
}

// ========================================
// FILTER & SEARCH FUNCTION
// ========================================

function filterAndDisplay() {
    const searchTerm = searchBox.value.toLowerCase();
    const selectedState = filterState.value;
    const selectedCuisine = filterCuisine.value;
    const selectedAward = filterAward.value;
    const sortOption = sortBy.value;

    // Filter restaurants
    let filtered = restaurantsDatabase.filter(restaurant => {
        // Search filter
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) ||
                            restaurant.cuisine.toLowerCase().includes(searchTerm) ||
                            restaurant.city.toLowerCase().includes(searchTerm);

        // State filter
        const matchesState = !selectedState || restaurant.state === selectedState;

        // Cuisine filter
        const matchesCuisine = !selectedCuisine || restaurant.cuisine === selectedCuisine;

        // Award filter
        let matchesAward = true;
        if (selectedAward === 'michelin') {
            matchesAward = restaurant.michelin > 0;
        } else if (selectedAward === 'jamesbeard') {
            matchesAward = restaurant.jamesBeard;
        } else if (selectedAward === 'na50best') {
            matchesAward = restaurant.na50Best;
        }

        return matchesSearch && matchesState && matchesCuisine && matchesAward;
    });

    // Sort restaurants
    if (sortOption === 'ranking') {
        filtered.sort((a, b) => (a.ranking || 999) - (b.ranking || 999));
    } else if (sortOption === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'state') {
        filtered.sort((a, b) => a.state.localeCompare(b.state));
    }

    // Display
    displayRestaurants(filtered);
}

// ========================================
// MODAL FUNCTIONS
// ========================================

function openModal(restaurantId) {
    const restaurant = restaurantsDatabase.find(r => r.id === restaurantId);
    
    if (!restaurant) return;

    const modalBody = document.getElementById('modalBody');
    
    let awardsList = '<strong>Awards:</strong><br>';
    if (restaurant.michelin > 0) {
        awardsList += `★ ${restaurant.michelin} Michelin Stars<br>`;
    }
    if (restaurant.jamesBeard) {
        awardsList += `James Beard Award Winner<br>`;
    }
    if (restaurant.na50Best) {
        awardsList += `North America's 50 Best<br>`;
    }

    modalBody.innerHTML = `
        <h2>${restaurant.name}</h2>
        <div class="modal-info">
            <div>
                <p><strong>Location:</strong> ${restaurant.city}, ${restaurant.state}</p>
                <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
                <p><strong>Region:</strong> ${restaurant.region.charAt(0).toUpperCase() + restaurant.region.slice(1)}</p>
            </div>
            <div>
                <p><strong>Price Range:</strong> $${restaurant.price}</p>
                ${restaurant.ranking ? `<p><strong>Ranking:</strong> No. ${restaurant.ranking}</p>` : ''}
            </div>
        </div>
        <div class="modal-description">
            <p><strong>About:</strong><br>${restaurant.desc}</p>
        </div>
        <div class="modal-description">
            <p>${awardsList}</p>
        </div>
        <div class="modal-description">
            <p><strong>Notable Dishes:</strong><br>${restaurant.dishes}</p>
        </div>
    `;

    modal.classList.add('open');
}

function closeModal() {
    modal.classList.remove('open');
}

// ========================================
// REGIONAL ANALYSIS
// ========================================

function generateRegionalContent() {
    const regions = {
        midwest: restaurantsDatabase.filter(r => r.region === 'midwest'),
        northeast: restaurantsDatabase.filter(r => r.region === 'northeast'),
        south: restaurantsDatabase.filter(r => r.region === 'south'),
        west: restaurantsDatabase.filter(r => r.region === 'west'),
        southwest: restaurantsDatabase.filter(r => r.region === 'southwest')
    };

    window.regionData = regions;
    displayRegionalContent('all');
}

function displayRegionalContent(region) {
    let html = '';

    if (region === 'all') {
        const allRegions = ['midwest', 'northeast', 'south', 'west', 'southwest'];
        allRegions.forEach(key => {
            const restaurants = window.regionData[key];
            if (restaurants.length > 0) {
                const regionName = key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' ');
                html += `<h3 style="color: var(--gold); margin-top: 40px; margin-bottom: 20px; font-size: 1.8rem;">${regionName} (${restaurants.length} restaurants)</h3>`;
                html += `<div class="region-grid">`;
                restaurants.forEach(r => {
                    html += `<div class="region-item">
                        <h4>${r.name}</h4>
                        <p><strong>${r.city}, ${r.state}</strong></p>
                        <p style="color: var(--gold); font-size: 0.85rem; margin-top: 5px;">${r.cuisine}</p>
                        <p style="color: var(--muted-text); margin-top: 8px; font-size: 0.9rem;">${r.desc}</p>
                    </div>`;
                });
                html += `</div>`;
            }
        });
    } else {
        const restaurants = window.regionData[region];
        const regionName = region.charAt(0).toUpperCase() + region.slice(1).replace('-', ' ');
        
        if (restaurants && restaurants.length > 0) {
            html = `<div class="region-grid">`;
            restaurants.forEach(r => {
                html += `<div class="region-item">
                    <h4>${r.name}</h4>
                    <p><strong>${r.city}, ${r.state}</strong></p>
                    <p style="color: var(--gold); font-size: 0.85rem; margin-top: 5px;">${r.cuisine}</p>
                    <p style="color: var(--muted-text); margin-top: 8px; font-size: 0.9rem;">${r.desc}</p>
                </div>`;
            });
            html += `</div>`;
        }
    }

    regionContent.innerHTML = html;
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Search and filter
    searchBox.addEventListener('input', filterAndDisplay);
    filterState.addEventListener('change', filterAndDisplay);
    filterCuisine.addEventListener('change', filterAndDisplay);
    filterAward.addEventListener('change', filterAndDisplay);
    sortBy.addEventListener('change', filterAndDisplay);

    // Modal
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Region tabs
    regionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            regionTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            displayRegionalContent(tab.getAttribute('data-region'));
        });
    });

    // FAQ
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
            item.classList.toggle('open');
        });
    });

    // Mobile menu
    hamburger.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

console.log('Script loaded successfully');
