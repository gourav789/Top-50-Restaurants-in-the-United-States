// ============================================
// TOP 50 RESTAURANTS - JAVASCRIPT
// ============================================

// Complete Restaurant Database
const restaurants = [
    {
        id: 1,
        name: "Smyth",
        city: "Chicago",
        state: "IL",
        region: "midwest",
        cuisine: "Progressive Farm-to-Table",
        ranking: 1,
        michelin: 3,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 1 in North America for 2026. Helmed by husband-and-wife team John Shields and Karen Urie Shields. Located at 177 North Ada St. in the West Loop. The $420 tasting menu features hyper-seasonal, umami-intensive compositions including striking venison with blood sausage, technical trout donut, and birch twig ice cream.",
        price: 420,
        notableDishes: "Venison with Blood Sausage, Trout Donut, Birch Twig Ice Cream"
    },
    {
        id: 2,
        name: "Dakar NOLA",
        city: "New Orleans",
        state: "LA",
        region: "south",
        cuisine: "Senegambian-Creole",
        ranking: 4,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Securing the No. 4 position and crowned The Best Restaurant in South USA. Co-owners Chef Serigne Mbaye and Dr. Afua 'Effie' Richardson. Seven-course pescatarian tasting menu priced at $175. Traces culinary lineage directly: Senegalese jollof as ancestral blueprint for Louisiana jambalaya.",
        price: 175,
        notableDishes: "Jollof Rice, Soupa Konja, Raw Royal Red Pepper Shrimp"
    },
    {
        id: 3,
        name: "Albi",
        city: "Washington",
        state: "DC",
        region: "northeast",
        cuisine: "Levantine / Palestinian",
        ranking: 6,
        michelin: 0,
        jamesBeard: true,
        na50Best: true,
        description: "Highest Climber of 2026 at No. 6. Named Best Restaurant in Northeast USA. Chef Michael Rafidi earned 2024 James Beard Award for Outstanding Chef. Located at 1346 4th Street SE. Open hearth serves as physical and culinary centerpiece. Five-course Sofra menu priced at $165.",
        price: 165,
        notableDishes: "Wood-Fired Lamb Sfeeha, Maryland Crab Hummus, Khubz+ Five-Dip Spread"
    },
    {
        id: 4,
        name: "Atomix",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Modern Korean",
        ranking: 7,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Holding No. 7 position in 2026 after reigning as No. 1 in 2025. Helmed by Ellia and Junghyun 'JP' Park. Refined 12-course tasting menu with immersive storytelling. Each course served on bespoke ceramics with explanatory cards.",
        price: 350,
        notableDishes: "Korean Fine Dining Multi-Course Tasting Menu"
    },
    {
        id: 5,
        name: "César",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Japanese-Influenced Seafood",
        ranking: 10,
        michelin: 2,
        jamesBeard: false,
        na50Best: true,
        description: "Debuting at No. 10 and instantly commanding two Michelin stars. Triumphant solo return of Chef César Ramirez. Located at 333 Hudson Street. Luxurious white oak chef's counter. Roughly 13-course tasting menu priced at $368 with extensive supplement suite.",
        price: 368,
        notableDishes: "Japanese-Influenced Seafood Tasting Menu, Caviar, Sea Urchin"
    },
    {
        id: 6,
        name: "Kalaya",
        city: "Philadelphia",
        state: "PA",
        region: "northeast",
        cuisine: "Southern Thai",
        ranking: 11,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Securing No. 11 position. Uncompromising tribute to Southern Thai cuisine. Rejects hybridized, sweetened Thai dishes. Kitchen utilizes potent, house-pounded curry pastes and imported spices. Vital anchor in Philadelphia's ascending culinary scene.",
        price: 85,
        notableDishes: "House-Pounded Curry Pastes, Traditional Thai Spice Blends"
    },
    {
        id: 7,
        name: "Le Veau d'Or",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Classical French Neo-Bistro",
        ranking: 12,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 12. Testament to enduring power of classical French gastronomy. Resurrected in 2024 by Chefs Riad Nasr and Lee Hanson. $135 prix fixe dinner menu. Menu reads like mid-century Escoffier index.",
        price: 135,
        notableDishes: "Tripes à La Mode, Frogs' Legs Persillade, Pâté en Croûte"
    },
    {
        id: 8,
        name: "Le Bernardin",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Fine Seafood",
        ranking: 13,
        michelin: 3,
        jamesBeard: false,
        na50Best: true,
        description: "Immutable force in global fine dining at No. 13. Consistently flawless seafood execution. Three Michelin stars for decades. Aldo Sohm won 2026 North America's Best Sommelier Award. Chef's Tasting Menu $350 ($530 with pairing).",
        price: 350,
        notableDishes: "Perfectly Prepared Oceanic Ingredients, Seafood Tasting Menu"
    },
    {
        id: 9,
        name: "Kabawa",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Bajan / Caribbean",
        ranking: 14,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Revolutionary entry at No. 14. Bold pivot for Momofuku group. Bajan-born Chef Paul Carmichael. Former Momofuku Ko space in East Village. Three-course prix fixe for communal sharing. High-energy hospitality.",
        price: 95,
        notableDishes: "Raw Royal Red Pepper Shrimp, Breadfruit Tostones with Octopus, Slow-Roasted Goat Shoulder"
    },
    {
        id: 10,
        name: "SingleThread",
        city: "Healdsburg",
        state: "CA",
        region: "west",
        cuisine: "Japanese / Californian",
        ranking: 16,
        michelin: 3,
        jamesBeard: false,
        na50Best: true,
        description: "Firmly entrenched at No. 16 with three Michelin stars. Intersection of Japanese omotenashi hospitality and Sonoma County agriculture. Farm-restaurant ecosystem allows micro-seasonal precision. Sought-after destination dining.",
        price: 385,
        notableDishes: "Farm-to-Table Japanese Tasting, Seasonal Ingredients"
    },
    {
        id: 11,
        name: "Jungsik",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "New Korean",
        ranking: 18,
        michelin: 3,
        jamesBeard: true,
        na50Best: true,
        description: "Holding No. 18 and maintaining three Michelin stars. Introduced New Korean fine dining to international audience. Chef Jungsik Yim won 2025 James Beard Award for Outstanding Chef. Balances traditional Korean fermentation with opulent ingredients.",
        price: 350,
        notableDishes: "Korean Fermentation Techniques, Opulent Ingredients"
    },
    {
        id: 12,
        name: "Penny",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Seafood Counter",
        ranking: 19,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 19. Seafood-focused counter delivering rapid-fire precision. Density of New York's excellence highlighted by this entry.",
        price: 75,
        notableDishes: "Fresh Seafood Counter Service, Rapid-Fire Precision"
    },
    {
        id: 13,
        name: "Emeril's",
        city: "New Orleans",
        state: "LA",
        region: "south",
        cuisine: "Elevated Creole",
        ranking: 20,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Landing at No. 20. Successful intergenerational transfer of power. EJ Lagasse leading kitchen. Flagship property underwent ambitious modernization. Received SevenRooms Icon Award for 2026.",
        price: 150,
        notableDishes: "Elevated Creole Tasting Menu"
    },
    {
        id: 14,
        name: "Chubby Fish",
        city: "Charleston",
        state: "SC",
        region: "south",
        cuisine: "Lowcountry Seafood",
        ranking: 21,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 21. Strict no-reservations policy with daily queues. Chef James London's hyper-local, daily-changing seafood menu. Roughly $60 per person. Signature crudos and indulgent innovations like Caviar Sammich.",
        price: 60,
        notableDishes: "Triggerfish Ceviche, Yellowfin Tuna, Caviar Sammich"
    },
    {
        id: 15,
        name: "Saison",
        city: "San Francisco",
        state: "CA",
        region: "west",
        cuisine: "Hearth-Fired Californian",
        ranking: 22,
        michelin: 2,
        jamesBeard: false,
        na50Best: true,
        description: "Earning No. 22. Continuing under Chef Richard Lee. Retains two Michelin stars. Stunning high-ceilinged brick space in China Basin. Primary $328 tasting menu plus $78 bar tasting menu.",
        price: 328,
        notableDishes: "Bluefin Tuna, Geoduck Caviar, Amberjack Collar"
    },
    {
        id: 16,
        name: "Aska",
        city: "Brooklyn",
        state: "NY",
        region: "northeast",
        cuisine: "Nordic / Northeastern",
        ranking: 23,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 23. Premier conduit for Nordic sensibilities. Severe, intellectually rigorous 12-14 course tasting menu at $375. Navigates landscapes and micro-seasons of American Northeast.",
        price: 375,
        notableDishes: "Fermentation-Heavy Nordic Tasting Menu, Minimalist Aesthetic"
    },
    {
        id: 17,
        name: "Moon Rabbit",
        city: "Washington",
        state: "DC",
        region: "northeast",
        cuisine: "Modern Vietnamese",
        ranking: 24,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Holding No. 24. Redefined modern Vietnamese dining in capital. Celebrated for pastry program by Susan Bae, 2025 North America's Best Pastry Chef Award winner. Blends Southeast Asian flavors with French precision.",
        price: 120,
        notableDishes: "Modern Vietnamese with French Pastry Mastery"
    },
    {
        id: 18,
        name: "Holbox",
        city: "Los Angeles",
        state: "CA",
        region: "west",
        cuisine: "Mexican Seafood",
        ranking: 26,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 26. Delivers impeccable Mexican seafood counter service in Los Angeles. Vital contribution to West Coast dining.",
        price: 85,
        notableDishes: "Mexican Seafood Counter Service"
    },
    {
        id: 19,
        name: "Avize",
        city: "Atlanta",
        state: "GA",
        region: "south",
        cuisine: "Modern Alpine / Southern",
        ranking: 29,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Dynamic new entry at No. 29. Chef Karl Gorline. Named after Grand Cru village in Northeastern France. Balances fine-dining elegance with buzzy atmosphere. Features taxidermic white mountain goat 'Truffles'. Hyper-seasonal menu.",
        price: 140,
        notableDishes: "Lemon-Pepper Wet Frog Legs, Fermented Carrot Tare, Elysian Fields Lamb"
    },
    {
        id: 20,
        name: "Acamaya",
        city: "New Orleans",
        state: "LA",
        region: "south",
        cuisine: "Mexican Mariscos",
        ranking: 30,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Entering top 50 at No. 30. Visionary project of sisters Ana and Lydia Castro. Located in Bywater at 3070 Dauphine St. Love letter to Mexican mariscos integrated with Gulf of Mexico bounty. Terracotta lattice walls, warm wood ceilings.",
        price: 110,
        notableDishes: "Arroz Negro, Gulf Shrimp Aguachile"
    },
    {
        id: 21,
        name: "Addison",
        city: "San Diego",
        state: "CA",
        region: "west",
        cuisine: "Contemporary Californian",
        ranking: 31,
        michelin: 3,
        jamesBeard: false,
        na50Best: true,
        description: "Ranking at No. 31. Southern California's premier three-Michelin-starred destination. Chef William Bradley's contemporary Californian cuisine. Uses French technique to elevate pristine regional ingredients.",
        price: 360,
        notableDishes: "Contemporary Californian Tasting Menu"
    },
    {
        id: 22,
        name: "Providence",
        city: "Los Angeles",
        state: "CA",
        region: "west",
        cuisine: "Sustainable Seafood",
        ranking: 32,
        michelin: 3,
        jamesBeard: false,
        na50Best: true,
        description: "Enduring pillar of LA fine dining at No. 32. Three Michelin stars. Unwavering commitment to sustainable, wild-caught seafood. Sets benchmark for environmental responsibility.",
        price: 340,
        notableDishes: "Wild-Caught Sustainable Seafood Tasting"
    },
    {
        id: 23,
        name: "Benu",
        city: "San Francisco",
        state: "CA",
        region: "west",
        cuisine: "Contemporary Asian",
        ranking: 33,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Holding No. 33. Masterclass in contemporary Asian fine dining. Chef Corey Lee awarded 2026 Estrella Damm Chefs' Choice Award. Honored by peers within Top 50.",
        price: 315,
        notableDishes: "Contemporary Asian Fine Dining"
    },
    {
        id: 24,
        name: "Corima",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Northern Mexican",
        ranking: 36,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 36. Bringing ambitious Northern Mexican techniques to New York. Density of New York's excellence.",
        price: 95,
        notableDishes: "Northern Mexican Fine Dining"
    },
    {
        id: 25,
        name: "Dōgon",
        city: "Washington",
        state: "DC",
        region: "northeast",
        cuisine: "Afro-Caribbean",
        ranking: 37,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Kwame Onwuachi's second entry at No. 37. Additionally recognized by NYT. Deep dive into Afro-Caribbean and West African traditions. Honors surveyor Benjamin Banneker. Bold spices with Mid-Atlantic seafood.",
        price: 115,
        notableDishes: "Afro-Caribbean and West African Cuisine"
    },
    {
        id: 26,
        name: "Torrisi",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Italian-American",
        ranking: 38,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 38. Glamorous revival of Italian-American luxury. Legendary status in New York dining.",
        price: 100,
        notableDishes: "Italian-American Fine Dining"
    },
    {
        id: 27,
        name: "Tatiana",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Afro-Caribbean / New York",
        ranking: 39,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Debuting at No. 39. Chef Kwame Onwuachi's Afro-Caribbean menu at Lincoln Center. Aggressive pricing with short rib pastrami at $120. Undeniable cultural magnetism.",
        price: 140,
        notableDishes: "Afro-Caribbean Short Rib Pastrami, Oxtails"
    },
    {
        id: 28,
        name: "Friday Saturday Sunday",
        city: "Philadelphia",
        state: "PA",
        region: "northeast",
        cuisine: "Modern American",
        ranking: 40,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 40. Transitioned from beloved neighborhood staple to national powerhouse. Upstairs tasting menu delivers polished Modern American narrative. World-class cocktail program.",
        price: 120,
        notableDishes: "Modern American Fine Dining, Exquisite Sauces"
    },
    {
        id: 29,
        name: "Semma",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Heritage Southern Indian",
        ranking: 41,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 41. Previously held No. 1 on NYT list. Incendiary, uncompromised heritage Southern Indian cuisine. Continues excellence.",
        price: 105,
        notableDishes: "Heritage Southern Indian Fine Dining"
    },
    {
        id: 30,
        name: "Pascual",
        city: "Washington",
        state: "DC",
        region: "northeast",
        cuisine: "Regional Mexican",
        ranking: 42,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 42. Regional Mexican excellence in Washington DC. Chef-driven authentic cuisine.",
        price: 95,
        notableDishes: "Regional Mexican Cuisine"
    },
    {
        id: 31,
        name: "Gramercy Tavern",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "New American",
        ranking: 43,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 43. Legendary establishment demonstrating unparalleled longevity. Danny Meyer's hospitality model. Continuous New American excellence.",
        price: 120,
        notableDishes: "New American Fine Dining"
    },
    {
        id: 32,
        name: "Atelier Crenn",
        city: "San Francisco",
        state: "CA",
        region: "west",
        cuisine: "French / Pescatarian",
        ranking: 44,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranking at No. 44. Dominique Crenn's pescatarian flagship. Rightfully awarded 2026 Sustainable Restaurant Award. Poetic multi-course menus pushing artistic boundaries. Rigorous environmental standards.",
        price: 320,
        notableDishes: "French Pescatarian Fine Dining, Artistic Plating"
    },
    {
        id: 33,
        name: "Sons & Daughters",
        city: "San Francisco",
        state: "CA",
        region: "west",
        cuisine: "New American",
        ranking: 45,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 45. Offering elegant New American tasting menus in San Francisco. Vital contribution to West Coast dining.",
        price: 280,
        notableDishes: "New American Tasting Menu"
    },
    {
        id: 34,
        name: "Somni",
        city: "Los Angeles",
        state: "CA",
        region: "west",
        cuisine: "Avant-Garde Spanish",
        ranking: 46,
        michelin: 3,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 46 with 3 Michelin stars. Avant-garde Spanish molecular revival. Cutting-edge culinary techniques.",
        price: 360,
        notableDishes: "Avant-Garde Spanish Molecular Gastronomy"
    },
    {
        id: 35,
        name: "Kato",
        city: "Los Angeles",
        state: "CA",
        region: "west",
        cuisine: "Taiwanese-American",
        ranking: 49,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Ranked No. 49. Continues to elevate Taiwanese-American cuisine in LA. Cultural bridge through food.",
        price: 105,
        notableDishes: "Taiwanese-American Fine Dining"
    },
    {
        id: 36,
        name: "Diane's Place",
        city: "Minneapolis",
        state: "MN",
        region: "midwest",
        cuisine: "Hmong-American",
        ranking: 50,
        michelin: 0,
        jamesBeard: false,
        na50Best: true,
        description: "Anchoring at No. 50. First solo venture from acclaimed pastry chef Diane Moua. Located in Food Building in Northeast Minneapolis. Deeply personal exploration of Hmong-American heritage. Interior features traditional Hmong cross-stitch patterns.",
        price: 95,
        notableDishes: "Coconut-Pandan Croissants, Nqaj Npua Tsawg (Slow-Cooked Pulled Pork), Laab-Flavored Beef Carpaccio"
    },
    {
        id: 37,
        name: "Bûcheron",
        city: "Minneapolis",
        state: "MN",
        region: "midwest",
        cuisine: "French / Midwestern",
        ranking: null,
        michelin: 0,
        jamesBeard: true,
        na50Best: false,
        description: "James Beard Best New Restaurant 2025. Cemented Minneapolis as premier culinary destination. Incredibly accessible price point around $105. Blends French technique with Midwestern bounty. Elegant pastas and precise proteins.",
        price: 105,
        notableDishes: "Vadouvan Curry Pappardelle with Rabbit Ragout, Wild Acres Spring Chicken"
    },
    {
        id: 38,
        name: "Frasca Food and Wine",
        city: "Boulder",
        state: "CO",
        region: "southwest",
        cuisine: "Friulian Italian",
        ranking: null,
        michelin: 0,
        jamesBeard: true,
        na50Best: false,
        description: "2025 James Beard Award for Outstanding Restaurant in America. Gold standard for Northern Italian hospitality. Uncompromising commitment to Friuli-Venezia Giulia cuisine. Primary tasting menu $230. Encyclopedic wine pairing program.",
        price: 230,
        notableDishes: "Friulian Italian Cuisine"
    },
    {
        id: 39,
        name: "Gift Horse",
        city: "Providence",
        state: "RI",
        region: "northeast",
        cuisine: "Korean / New England Raw",
        ranking: null,
        michelin: 0,
        jamesBeard: true,
        na50Best: false,
        description: "Chef Sky Haneul Kim won 2025 James Beard Award for Best Chef: Northeast. Provocative reinterpretation of classic New England raw bar. Applies Korean sensibilities to Rhode Island aquaculture. Features 'doughboys' with California caviar.",
        price: 110,
        notableDishes: "Korean-Style Doughboys with Caviar, Seafood Ssäm Platters"
    },
    {
        id: 40,
        name: "Peninsula",
        city: "Nashville",
        state: "TN",
        region: "south",
        cuisine: "Iberian-Influenced Southern",
        ranking: null,
        michelin: 0,
        jamesBeard: true,
        na50Best: false,
        description: "Chef Jake Howell earned 2025 James Beard Award for Best Chef: Southeast. Beacon of Iberian-influenced cooking in East Nashville. Operates just three nights weekly. Michelin Bib Gourmand. Vegetable-forward, regionally grounded dishes at $70-$120.",
        price: 95,
        notableDishes: "Iberian-Influenced Southern Cuisine"
    },
    {
        id: 41,
        name: "Lom Wong",
        city: "Phoenix",
        state: "AZ",
        region: "southwest",
        cuisine: "Regional Village Thai",
        ranking: null,
        michelin: 0,
        jamesBeard: true,
        na50Best: false,
        description: "Chef Yotaka 'Sunny' Martin. James Beard Award for Best Chef: Southwest. Masterclass in regional Thai authenticity. Focuses on specific village recipes from Chiang Rai and southern Moklen communities. Hand-pounded spice pastes.",
        price: 40,
        notableDishes: "Yam Mamuang Boran, Kaeng Phet Charinda"
    },
    {
        id: 42,
        name: "Belly of the Beast",
        city: "Spring",
        state: "TX",
        region: "south",
        cuisine: "Mexican / Global Counter",
        ranking: null,
        michelin: 0,
        jamesBeard: true,
        na50Best: false,
        description: "Chef Thomas Bille. James Beard Award for Best Chef: Texas. Bridges gap between casual dining and ambitious gastronomy. À la carte menu featuring Texas Redfish and Bluefin Tuna Tostadas. Chef's Counter at $85.",
        price: 85,
        notableDishes: "Texas Redfish with Mole Verde, Bluefin Tuna Tostadas"
    },
    {
        id: 43,
        name: "Owamni",
        city: "Minneapolis",
        state: "MN",
        region: "midwest",
        cuisine: "Decolonized Indigenous",
        ranking: null,
        michelin: 0,
        jamesBeard: true,
        na50Best: false,
        description: "Founded by 'The Sioux Chef' Sean Sherman. Culturally significant restaurant. Located at Owamniyomni (St. Anthony Falls). Strictly decolonized menu eliminating post-European contact ingredients. Relies on pre-colonial staples.",
        price: 100,
        notableDishes: "Decolonized Indigenous Cuisine, Bison, Elk, Wild Game"
    },
    {
        id: 44,
        name: "Kann",
        city: "Portland",
        state: "OR",
        region: "west",
        cuisine: "Haitian Live-Fire",
        ranking: null,
        michelin: 0,
        jamesBeard: true,
        na50Best: false,
        description: "Chef Gregory Gourdet. James Beard Award-winning chef. Live-fire celebration of Haitian cuisine and Pacific Northwest agriculture. Balances heat, acid, and smoke. Distinctive zero-proof cocktails. Entrées $22-$120.",
        price: 75,
        notableDishes: "Twice-Cooked Griyo Pork, Crispy Taro Root Fritters"
    },
    {
        id: 45,
        name: "Smithereens",
        city: "New York",
        state: "NY",
        region: "northeast",
        cuisine: "Neighborhood American",
        ranking: null,
        michelin: 0,
        jamesBeard: false,
        na50Best: false,
        description: "Topped 2025 NYT list. Represents New York's ability to pivot toward intimate, accessible neighborhood charm. Success of accessible dining model.",
        price: 65,
        notableDishes: "Neighborhood American Cuisine"
    },
    {
        id: 46,
        name: "P Thai's Khao Man Gai & Noodles",
        city: "Austin",
        state: "TX",
        region: "south",
        cuisine: "Thai Comfort",
        ranking: null,
        michelin: 0,
        jamesBeard: false,
        na50Best: false,
        description: "Soaring to No. 2 on 2025 NYT list. Epitomizes shift toward hyper-focused comfort foods. Immaculate execution of Hainanese-style chicken rice adapted to Texas palate.",
        price: 12,
        notableDishes: "Hainanese Chicken Rice"
    },
    {
        id: 47,
        name: "Pilgrim's Inn",
        city: "Deer Isle",
        state: "ME",
        region: "northeast",
        cuisine: "Coastal New England",
        ranking: null,
        michelin: 0,
        jamesBeard: false,
        na50Best: false,
        description: "Securing No. 3 on 2025 NYT list. Represents romantic ideal of coastal Maine dining. Focuses intently on local maritime sourcing and hyper-seasonal New England agriculture.",
        price: 95,
        notableDishes: "Local Maritime Seafood, New England Produce"
    },
    {
        id: 48,
        name: "Wildweed",
        city: "Cincinnati",
        state: "OH",
        region: "midwest",
        cuisine: "Seasonal Pasta / American",
        ranking: null,
        michelin: 0,
        jamesBeard: false,
        na50Best: false,
        description: "Earning prestigious NA 50 Best 'One To Watch Award' for 2026. Quietly transformed Cincinnati. Celebrated for hyper-seasonal approach and technical execution. Relies on Ohio River Valley micro-seasons.",
        price: 85,
        notableDishes: "Masterful Tuna Tartare, Hyper-Seasonal Pasta"
    },
    {
        id: 49,
        name: "Sanders BBQ Supply Co.",
        city: "Chicago",
        state: "IL",
        region: "midwest",
        cuisine: "Chicago Barbecue",
        ranking: null,
        michelin: 0,
        jamesBeard: false,
        na50Best: false,
        description: "Representing 2025 NYT pivot toward hyper-local, specialized excellence. Mastery of smoke, fat, and time. Elevates Chicago's localized barbecue traditions. Roughly $60 per person.",
        price: 60,
        notableDishes: "Chicago Barbecue, Smoked Meats"
    },
    {
        id: 50,
        name: "Yardy Rum Bar",
        city: "Eugene",
        state: "OR",
        region: "west",
        cuisine: "Caribbean / Pacific NW",
        ranking: null,
        michelin: 0,
        jamesBeard: false,
        na50Best: false,
        description: "Highlighted on NYT list. Caribbean-Pacific Northwest fusion dining. Vibrant cultural bridge restaurant.",
        price: 50,
        notableDishes: "Caribbean-Pacific Northwest Fusion"
    }
];

// ============================================
// DOM Elements
// ============================================

const restaurantGrid = document.getElementById('restaurantGrid');
const searchInput = document.getElementById('searchInput');
const stateFilter = document.getElementById('stateFilter');
const cuisineFilter = document.getElementById('cuisineFilter');
const awardFilter = document.getElementById('awardFilter');
const sortSelect = document.getElementById('sortSelect');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('detailModal');
const modalClose = document.querySelector('.modal-close');
const faqItems = document.querySelectorAll('.faq-item');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const regionTabs = document.querySelectorAll('.region-tab');
const regionContent = document.getElementById('regionContent');
const detailModal = document.getElementById('detailModal');

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    displayRestaurants(restaurants);
    setupEventListeners();
    animateCounters();
    generateRegionalAnalysis();
    updateStatistics();
    setupFAQ();
    setupScroll();
});

// ============================================
// Filter Initialization
// ============================================

function initializeFilters() {
    // Populate state filter
    const states = [...new Set(restaurants.map(r => r.state))].sort();
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateFilter.appendChild(option);
    });

    // Populate cuisine filter
    const cuisines = [...new Set(restaurants.map(r => r.cuisine))].sort();
    cuisines.forEach(cuisine => {
        const option = document.createElement('option');
        option.value = cuisine;
        option.textContent = cuisine;
        cuisineFilter.appendChild(option);
    });
}

// ============================================
// Display Restaurants
// ============================================

function displayRestaurants(restaurantsToDisplay) {
    restaurantGrid.innerHTML = '';
    noResults.style.display = 'none';

    if (restaurantsToDisplay.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    restaurantsToDisplay.forEach((restaurant, index) => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s both`;

        let awardBadges = '';
        if (restaurant.michelin > 0) {
            awardBadges += `<span class="award-badge michelin">★ ${restaurant.michelin} Michelin</span>`;
        }
        if (restaurant.jamesBeard) {
            awardBadges += `<span class="award-badge">James Beard</span>`;
        }
        if (restaurant.na50Best) {
            awardBadges += `<span class="award-badge">NA 50 Best</span>`;
        }

        const rankingDisplay = restaurant.ranking ? `<span class="restaurant-rank">No. ${restaurant.ranking}</span>` : '';

        card.innerHTML = `
            <h3>${restaurant.name}</h3>
            <div class="restaurant-meta">
                ${rankingDisplay}
                <span>${restaurant.city}, ${restaurant.state}</span>
            </div>
            <span class="restaurant-cuisine">${restaurant.cuisine}</span>
            <p class="restaurant-description">${restaurant.description.substring(0, 120)}...</p>
            <div class="restaurant-awards">${awardBadges}</div>
            <div class="restaurant-buttons">
                <button class="btn-details" data-id="${restaurant.id}">View Details</button>
                <button class="btn-website">Website</button>
            </div>
        `;

        card.querySelector('.btn-details').addEventListener('click', () => openModal(restaurant));
        restaurantGrid.appendChild(card);
    });
}

// ============================================
// Filter & Search
// ============================================

function filterRestaurants() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedState = stateFilter.value;
    const selectedCuisine = cuisineFilter.value;
    const selectedAward = awardFilter.value;
    const sortBy = sortSelect.value;

    let filtered = restaurants.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) ||
                            restaurant.cuisine.toLowerCase().includes(searchTerm) ||
                            restaurant.city.toLowerCase().includes(searchTerm);

        const matchesState = !selectedState || restaurant.state === selectedState;

        const matchesCuisine = !selectedCuisine || restaurant.cuisine === selectedCuisine;

        let matchesAward = true;
        if (selectedAward === 'michelin') {
            matchesAward = restaurant.michelin > 0;
        } else if (selectedAward === 'james-beard') {
            matchesAward = restaurant.jamesBeard;
        } else if (selectedAward === 'na50') {
            matchesAward = restaurant.na50Best;
        }

        return matchesSearch && matchesState && matchesCuisine && matchesAward;
    });

    // Sort
    if (sortBy === 'ranking') {
        filtered.sort((a, b) => (a.ranking || 999) - (b.ranking || 999));
    } else if (sortBy === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'city') {
        filtered.sort((a, b) => a.city.localeCompare(b.city));
    }

    displayRestaurants(filtered);
}

// ============================================
// Modal Functions
// ============================================

function openModal(restaurant) {
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
                <p><strong>City:</strong> ${restaurant.city}, ${restaurant.state}</p>
                <p><strong>Region:</strong> ${restaurant.region.charAt(0).toUpperCase() + restaurant.region.slice(1)}</p>
                <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
            </div>
            <div>
                <p><strong>Price Range:</strong> $${restaurant.price}</p>
                ${restaurant.ranking ? `<p><strong>Ranking:</strong> No. ${restaurant.ranking}</p>` : ''}
            </div>
        </div>
        <div class="modal-description">
            ${awardsList}
        </div>
        <div class="modal-description">
            <p><strong>Description:</strong><br>${restaurant.description}</p>
        </div>
        <div class="modal-description">
            <p><strong>Notable Dishes:</strong><br>${restaurant.notableDishes}</p>
        </div>
    `;

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

// ============================================
// Regional Analysis
// ============================================

function generateRegionalAnalysis() {
    const regions = {
        midwest: {
            name: 'Midwest',
            restaurants: restaurants.filter(r => r.region === 'midwest')
        },
        northeast: {
            name: 'Northeast',
            restaurants: restaurants.filter(r => r.region === 'northeast')
        },
        south: {
            name: 'South',
            restaurants: restaurants.filter(r => r.region === 'south')
        },
        west: {
            name: 'West Coast',
            restaurants: restaurants.filter(r => r.region === 'west')
        },
        southwest: {
            name: 'Southwest',
            restaurants: restaurants.filter(r => r.region === 'southwest')
        }
    };

    window.regionData = regions;
    displayRegion('all');
}

function displayRegion(regionKey) {
    let html = '';

    if (regionKey === 'all') {
        const regions = ['midwest', 'northeast', 'south', 'west', 'southwest'];
        regions.forEach(key => {
            if (window.regionData[key].restaurants.length > 0) {
                html += `<h3 style="color: var(--accent-gold); margin-top: 2rem; margin-bottom: 1rem;">${window.regionData[key].name}</h3>`;
                html += `<div class="region-grid">`;
                window.regionData[key].restaurants.forEach(r => {
                    html += `<div class="region-card">
                        <h4>${r.name}</h4>
                        <p>${r.city}, ${r.state}</p>
                        <p style="color: var(--accent-gold); font-size: 0.85rem;">${r.cuisine}</p>
                        <p style="color: var(--text-muted); margin-top: 0.5rem;">${r.description.substring(0, 80)}...</p>
                    </div>`;
                });
                html += `</div>`;
            }
        });
    } else {
        const region = window.regionData[regionKey];
        html += `<div class="region-grid">`;
        region.restaurants.forEach(r => {
            html += `<div class="region-card">
                <h4>${r.name}</h4>
                <p>${r.city}, ${r.state}</p>
                <p style="color: var(--accent-gold); font-size: 0.85rem;">${r.cuisine}</p>
                <p style="color: var(--text-muted); margin-top: 0.5rem;">${r.description.substring(0, 100)}...</p>
            </div>`;
        });
        html += `</div>`;
    }

    regionContent.innerHTML = html;
}

// ============================================
// Statistics
// ============================================

function updateStatistics() {
    const michelinStarred = restaurants.filter(r => r.michelin > 0).length;
    const jamesBeardWinners = restaurants.filter(r => r.jamesBeard).length;
    const citiesCount = new Set(restaurants.map(r => r.city)).size;
    const statesCount = new Set(restaurants.map(r => r.state)).size;

    // Update stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
        const statValue = card.querySelector('.stat-value');
        if (statValue) {
            const target = parseInt(statValue.getAttribute('data-stat'));
            animateStatNumber(statValue, target);
        }
    });

    // Create charts
    createMichelinChart(michelinStarred);
    createAwardChart(jamesBeardWinners);
    createCuisineChart();
}

function animateStatNumber(element, target) {
    let current = 0;
    const increment = target / 30;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

function createMichelinChart(count) {
    const chart = document.getElementById('michelinChart');
    const oneStarCount = restaurants.filter(r => r.michelin === 1).length;
    const twoStarCount = restaurants.filter(r => r.michelin === 2).length;
    const threeStarCount = restaurants.filter(r => r.michelin === 3).length;

    chart.innerHTML = `
        <div style="display: flex; gap: 0.5rem; align-items: flex-end; height: 150px;">
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                <div class="chart-bar" style="height: ${threeStarCount * 20}%; background: linear-gradient(to top, var(--accent-gold), var(--accent-burgundy));"></div>
                <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">3-Star (${threeStarCount})</p>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                <div class="chart-bar" style="height: ${twoStarCount * 20}%; background: linear-gradient(to top, var(--accent-gold), var(--accent-burgundy));"></div>
                <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">2-Star (${twoStarCount})</p>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                <div class="chart-bar" style="height: ${oneStarCount * 20}%; background: linear-gradient(to top, var(--accent-gold), var(--accent-burgundy));"></div>
                <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">1-Star (${oneStarCount})</p>
            </div>
        </div>
    `;
}

function createAwardChart(jbCount) {
    const chart = document.getElementById('awardChart');
    const na50Count = restaurants.filter(r => r.na50Best).length;
    const michelinCount = restaurants.filter(r => r.michelin > 0).length;

    chart.innerHTML = `
        <div style="display: flex; gap: 0.5rem; align-items: flex-end; height: 150px;">
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                <div class="chart-bar" style="height: ${na50Count * 3}%; background: linear-gradient(to top, var(--accent-gold), var(--accent-burgundy));"></div>
                <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">NA 50 Best (${na50Count})</p>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                <div class="chart-bar" style="height: ${michelinCount * 3}%; background: linear-gradient(to top, var(--accent-gold), var(--accent-burgundy));"></div>
                <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">Michelin (${michelinCount})</p>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                <div class="chart-bar" style="height: ${jbCount * 3}%; background: linear-gradient(to top, var(--accent-gold), var(--accent-burgundy));"></div>
                <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">James Beard (${jbCount})</p>
            </div>
        </div>
    `;
}

function createCuisineChart() {
    const chart = document.getElementById('cuisineChart');
    const cuisineCounts = {};
    restaurants.forEach(r => {
        cuisineCounts[r.cuisine] = (cuisineCounts[r.cuisine] || 0) + 1;
    });

    const topCuisines = Object.entries(cuisineCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    const maxCount = Math.max(...topCuisines.map(c => c[1]));

    let html = '<div style="display: flex; gap: 0.5rem; align-items: flex-end; height: 150px;">';
    topCuisines.forEach(([cuisine, count]) => {
        const percentage = (count / maxCount) * 100;
        html += `
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                <div class="chart-bar" style="height: ${percentage}%; background: linear-gradient(to top, var(--accent-gold), var(--accent-burgundy));"></div>
                <p style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted); word-break: break-word;">${cuisine.substring(0, 8)}... (${count})</p>
            </div>
        `;
    });
    html += '</div>';

    chart.innerHTML = html;
}

// ============================================
// Animated Counters
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('[data-target]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 30;
        let current = 0;

        const animate = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(animate);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 50);
    });
}

// ============================================
// FAQ
// ============================================

function setupFAQ() {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
}

// ============================================
// Event Listeners
// ============================================

function setupEventListeners() {
    searchInput.addEventListener('input', filterRestaurants);
    stateFilter.addEventListener('change', filterRestaurants);
    cuisineFilter.addEventListener('change', filterRestaurants);
    awardFilter.addEventListener('change', filterRestaurants);
    sortSelect.addEventListener('change', filterRestaurants);

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Region tabs
    regionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            regionTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const region = tab.getAttribute('data-region');
            displayRegion(region);
        });
    });

    // Mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// Scroll Progress & Smooth Scroll
// ============================================

function setupScroll() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// Intersection Observer for Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});
