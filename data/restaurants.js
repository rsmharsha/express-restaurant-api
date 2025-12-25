export const restaurants = [
    {
        id: 0,
        name: "Spice Route Kitchen",
        cuisine_type: "North Indian",
        established: 2016,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "45 Food Street",
            area: "Indiranagar",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Rajiv Malhotra",
                role: "Founder & Head Chef",
            },
            {
                name: "Ananya Malhotra",
                role: "Operations Manager",
            },
        ],
        staff_count: 28,
        website: "https://www.spiceroutekitchen.in",
        mission_statement:
            "Deliver authentic North Indian flavors using traditional recipes and modern hygiene standards.",
        description:
            "Spice Route Kitchen is known for its rich gravies, hand-ground spices, and a menu inspired by Punjab and Delhi street food culture.",
        avg_price_for_two: 600,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 1,
        name: "Green Leaf Cafe",
        cuisine_type: "South Indian",
        established: 2019,
        country: "India",
        city: "Chennai",
        continent: "Asia",
        restaurant_address: {
            street: "12 Temple Road",
            area: "Mylapore",
            state: "Tamil Nadu",
        },
        owners: [
            {
                name: "Srinivasan Iyer",
                role: "Founder",
            },
        ],
        staff_count: 15,
        website: "https://www.greenleafcafe.in",
        mission_statement:
            "Serve pure vegetarian South Indian food rooted in tradition and simplicity.",
        description:
            "Green Leaf Cafe focuses on dosa, idli, and filter coffee, prepared fresh daily using locally sourced ingredients.",
        avg_price_for_two: 350,
        veg_only: true,
        is_open: true,
        offers_delivery: false,
    },

    {
        id: 2,
        name: "Urban Tandoor",
        cuisine_type: "Mughlai",
        established: 2014,
        country: "India",
        city: "Delhi",
        continent: "Asia",
        restaurant_address: {
            street: "88 Central Avenue",
            area: "Connaught Place",
            state: "Delhi",
        },
        owners: [
            {
                name: "Farhan Qureshi",
                role: "Managing Director",
            },
        ],
        staff_count: 40,
        website: "https://www.urbantandoor.in",
        mission_statement:
            "Blend royal Mughlai cuisine with a modern urban dining experience.",
        description:
            "Urban Tandoor is famous for its charcoal-grilled kebabs, rich curries, and heritage-inspired interiors.",
        avg_price_for_two: 900,
        veg_only: false,
        is_open: false,
        offers_delivery: true,
    },

    {
        id: 3,
        name: "Pasta Street",
        cuisine_type: "Italian",
        established: 2020,
        country: "India",
        city: "Mumbai",
        continent: "Asia",
        restaurant_address: {
            street: "21 Ocean View Road",
            area: "Bandra West",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Marco Rossi",
                role: "Co-Founder & Chef",
            },
            {
                name: "Neha Kapoor",
                role: "Business Partner",
            },
        ],
        staff_count: 22,
        website: "https://www.pastastreet.in",
        mission_statement:
            "Introduce authentic Italian comfort food to Indian diners.",
        description:
            "Pasta Street serves handmade pasta, wood-fired pizzas, and classic Italian desserts inspired by Roman trattorias.",
        avg_price_for_two: 800,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },
    {
        id: 4,
        name: "Wok & Roll",
        cuisine_type: "Chinese",
        established: 2017,
        country: "India",
        city: "Kolkata",
        continent: "Asia",
        restaurant_address: {
            street: "67 Dragon Lane",
            area: "Park Street",
            state: "West Bengal",
        },
        owners: [
            {
                name: "Liang Chen",
                role: "Founder & Executive Chef",
            },
        ],
        staff_count: 26,
        website: "https://www.wokandroll.in",
        mission_statement:
            "Serve authentic Indo-Chinese cuisine inspired by traditional street food recipes.",
        description:
            "Wok & Roll is popular for its bold flavors, quick service, and a menu influenced by Chinese street-style cooking adapted for Indian tastes.",
        avg_price_for_two: 550,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 5,
        name: "Pure Bliss",
        cuisine_type: "Healthy",
        established: 2021,
        country: "India",
        city: "Pune",
        continent: "Asia",
        restaurant_address: {
            street: "14 Green Valley Road",
            area: "Baner",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Meera Joshi",
                role: "Founder & Nutrition Consultant",
            },
        ],
        staff_count: 12,
        website: "https://www.pureblissfoods.in",
        mission_statement:
            "Promote healthy eating without compromising on taste or quality.",
        description:
            "Pure Bliss specializes in salads, protein bowls, and low-calorie meals designed for fitness-conscious customers.",
        avg_price_for_two: 500,
        veg_only: true,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 6,
        name: "BBQ Junction",
        cuisine_type: "Barbecue",
        established: 2015,
        country: "India",
        city: "Hyderabad",
        continent: "Asia",
        restaurant_address: {
            street: "101 Flame Street",
            area: "Hitech City",
            state: "Telangana",
        },
        owners: [
            {
                name: "Arjun Reddy",
                role: "Founder",
            },
            {
                name: "Sameer Khan",
                role: "Operations Head",
            },
        ],
        staff_count: 35,
        website: "https://www.bbqjunction.in",
        mission_statement:
            "Create a premium barbecue dining experience with a focus on live grills.",
        description:
            "BBQ Junction is known for its live grill tables, marinated meats, and extensive buffet-style offerings.",
        avg_price_for_two: 1100,
        veg_only: false,
        is_open: true,
        offers_delivery: false,
    },

    {
        id: 7,
        name: "Street Chaat Hub",
        cuisine_type: "Street Food",
        established: 2018,
        country: "India",
        city: "Jaipur",
        continent: "Asia",
        restaurant_address: {
            street: "9 Bazaar Marg",
            area: "Pink City",
            state: "Rajasthan",
        },
        owners: [
            {
                name: "Rakesh Sharma",
                role: "Founder",
            },
        ],
        staff_count: 18,
        website: "https://www.streetchaathub.in",
        mission_statement:
            "Bring authentic Indian street food into a clean and hygienic dining space.",
        description:
            "Street Chaat Hub offers traditional chaat, golgappa, and regional snacks inspired by North Indian street markets.",
        avg_price_for_two: 300,
        veg_only: true,
        is_open: false,
        offers_delivery: true,
    },

    {
        id: 8,
        name: "Sushi Zen",
        cuisine_type: "Japanese",
        established: 2019,
        country: "India",
        city: "Mumbai",
        continent: "Asia",
        restaurant_address: {
            street: "56 Sea Breeze Road",
            area: "Lower Parel",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Hiroshi Tanaka",
                role: "Co-Founder & Head Chef",
            },
            {
                name: "Amit Verma",
                role: "Business Director",
            },
        ],
        staff_count: 20,
        website: "https://www.sushizen.in",
        mission_statement:
            "Introduce authentic Japanese dining culture with a focus on precision and freshness.",
        description:
            "Sushi Zen specializes in handcrafted sushi, sashimi, and Japanese rice bowls prepared using premium ingredients.",
        avg_price_for_two: 1500,
        veg_only: false,
        is_open: true,
        offers_delivery: false,
    },
    {
        id: 9,
        name: "Midnight Biryani",
        cuisine_type: "Biryani",
        established: 2013,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "22 Night Owl Road",
            area: "BTM Layout",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Mohammed Faizal",
                role: "Founder & Head Cook",
            },
        ],
        staff_count: 30,
        website: "https://www.midnightbiryani.in",
        mission_statement:
            "Serve flavorful biryani late into the night for true food lovers.",
        description:
            "Midnight Biryani is known for its slow-cooked dum biryani, generous portions, and late-night service hours.",
        avg_price_for_two: 450,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 10,
        name: "Coastal Curry House",
        cuisine_type: "Seafood",
        established: 2015,
        country: "India",
        city: "Kochi",
        continent: "Asia",
        restaurant_address: {
            street: "8 Harbor View",
            area: "Fort Kochi",
            state: "Kerala",
        },
        owners: [
            {
                name: "Antony D'Souza",
                role: "Founder",
            },
        ],
        staff_count: 24,
        website: "https://www.coastalcurryhouse.in",
        mission_statement:
            "Celebrate coastal flavors with fresh seafood and traditional recipes.",
        description:
            "Coastal Curry House serves Kerala-style seafood dishes prepared using fresh catch and aromatic local spices.",
        avg_price_for_two: 850,
        veg_only: false,
        is_open: true,
        offers_delivery: false,
    },

    {
        id: 11,
        name: "The Breakfast Club",
        cuisine_type: "Cafe",
        established: 2022,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "90 Morning Lane",
            area: "Whitefield",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Sneha Rao",
                role: "Founder",
            },
            {
                name: "Kunal Mehta",
                role: "Operations Lead",
            },
        ],
        staff_count: 14,
        website: "https://www.thebreakfastclub.in",
        mission_statement:
            "Create a cozy space dedicated entirely to breakfast and brunch.",
        description:
            "The Breakfast Club focuses on pancakes, eggs, smoothies, and specialty coffee for early risers and brunch lovers.",
        avg_price_for_two: 600,
        veg_only: false,
        is_open: false,
        offers_delivery: true,
    },

    {
        id: 12,
        name: "Royal Rajasthani Rasoi",
        cuisine_type: "Rajasthani",
        established: 2011,
        country: "India",
        city: "Udaipur",
        continent: "Asia",
        restaurant_address: {
            street: "3 Palace Road",
            area: "Old City",
            state: "Rajasthan",
        },
        owners: [
            {
                name: "Vikram Singh",
                role: "Founder & Culinary Director",
            },
        ],
        staff_count: 20,
        website: "https://www.royalrasoi.in",
        mission_statement:
            "Preserve and present traditional Rajasthani cuisine in its authentic form.",
        description:
            "Royal Rajasthani Rasoi offers heritage recipes, thalis, and slow-cooked dishes inspired by royal kitchens.",
        avg_price_for_two: 700,
        veg_only: true,
        is_open: true,
        offers_delivery: false,
    },
    {
        id: 13,
        name: "Tandoori Trails",
        cuisine_type: "North Indian",
        established: 2012,
        country: "India",
        city: "Amritsar",
        continent: "Asia",
        restaurant_address: {
            street: "18 Heritage Road",
            area: "Ranjit Avenue",
            state: "Punjab",
        },
        owners: [
            {
                name: "Gurpreet Singh",
                role: "Founder & Master Chef",
            },
        ],
        staff_count: 25,
        website: "https://www.tandooritrails.in",
        mission_statement:
            "Preserve the authentic tandoor-based cooking traditions of Punjab.",
        description:
            "Tandoori Trails is known for its clay-oven breads, smoky kebabs, and rich Punjabi gravies made using age-old techniques.",
        avg_price_for_two: 750,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 14,
        name: "Bean & Brew",
        cuisine_type: "Cafe",
        established: 2018,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "41 Coffee Lane",
            area: "Koramangala",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Aditya Nair",
                role: "Co-Founder",
            },
            {
                name: "Rhea D'Souza",
                role: "Co-Founder",
            },
        ],
        staff_count: 16,
        website: "https://www.beanandbrew.in",
        mission_statement:
            "Create a relaxed café culture centered around quality coffee and conversation.",
        description:
            "Bean & Brew offers specialty coffee, light meals, and desserts, attracting freelancers and students alike.",
        avg_price_for_two: 550,
        veg_only: true,
        is_open: true,
        offers_delivery: false,
    },

    {
        id: 15,
        name: "Firewood Pizza Co.",
        cuisine_type: "Italian",
        established: 2016,
        country: "India",
        city: "Goa",
        continent: "Asia",
        restaurant_address: {
            street: "7 Beachside Road",
            area: "Anjuna",
            state: "Goa",
        },
        owners: [
            {
                name: "Luca Moretti",
                role: "Founder & Pizza Chef",
            },
        ],
        staff_count: 18,
        website: "https://www.firewoodpizza.in",
        mission_statement:
            "Serve authentic wood-fired pizzas using traditional Italian methods.",
        description:
            "Firewood Pizza Co. specializes in thin-crust pizzas baked in a wood-fired oven, using fresh dough and imported cheeses.",
        avg_price_for_two: 900,
        veg_only: false,
        is_open: true,
        offers_delivery: false,
    },

    {
        id: 16,
        name: "Bowl Theory",
        cuisine_type: "Fusion",
        established: 2020,
        country: "India",
        city: "Gurgaon",
        continent: "Asia",
        restaurant_address: {
            street: "55 Startup Street",
            area: "Sector 29",
            state: "Haryana",
        },
        owners: [
            {
                name: "Nikhil Arora",
                role: "Founder",
            },
        ],
        staff_count: 14,
        website: "https://www.bowltheory.in",
        mission_statement:
            "Reimagine comfort food through creative fusion bowls.",
        description:
            "Bowl Theory combines global flavors into customizable bowls, popular among young professionals and office crowds.",
        avg_price_for_two: 650,
        veg_only: false,
        is_open: false,
        offers_delivery: true,
    },

    {
        id: 17,
        name: "Dakshin Delights",
        cuisine_type: "South Indian",
        established: 2009,
        country: "India",
        city: "Madurai",
        continent: "Asia",
        restaurant_address: {
            street: "29 Temple Street",
            area: "Meenakshi Nagar",
            state: "Tamil Nadu",
        },
        owners: [
            {
                name: "R. Subramanian",
                role: "Founder",
            },
        ],
        staff_count: 22,
        website: "https://www.dakshindelights.in",
        mission_statement:
            "Serve traditional South Indian meals with uncompromised authenticity.",
        description:
            "Dakshin Delights is known for its banana-leaf meals, filter coffee, and recipes passed down through generations.",
        avg_price_for_two: 400,
        veg_only: true,
        is_open: true,
        offers_delivery: true,
    },
    {
        id: 18,
        name: "Masala Manor",
        cuisine_type: "Indian",
        established: 2010,
        country: "India",
        city: "Nagpur",
        continent: "Asia",
        restaurant_address: {
            street: "11 Spice Market Road",
            area: "Dharampeth",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Suresh Kulkarni",
                role: "Founder & Executive Chef",
            },
        ],
        staff_count: 21,
        website: "https://www.masalamanor.in",
        mission_statement:
            "Bring regional Indian spices together under one carefully crafted menu.",
        description:
            "Masala Manor focuses on balanced flavors, traditional cooking methods, and a rotating seasonal menu inspired by Indian households.",
        avg_price_for_two: 650,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 19,
        name: "Olive & Thyme",
        cuisine_type: "Mediterranean",
        established: 2017,
        country: "India",
        city: "Mumbai",
        continent: "Asia",
        restaurant_address: {
            street: "73 Harbor Walk",
            area: "Colaba",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Elena Papadopoulos",
                role: "Co-Founder & Culinary Lead",
            },
            {
                name: "Rohit Mehra",
                role: "Co-Founder",
            },
        ],
        staff_count: 19,
        website: "https://www.oliveandthyme.in",
        mission_statement:
            "Introduce fresh Mediterranean flavors using high-quality ingredients.",
        description:
            "Olive & Thyme offers Greek- and Levant-inspired dishes, olive-oil-based cooking, and a minimalist dining experience.",
        avg_price_for_two: 1200,
        veg_only: false,
        is_open: true,
        offers_delivery: false,
    },

    {
        id: 20,
        name: "The Rolling Dosa",
        cuisine_type: "South Indian",
        established: 2019,
        country: "India",
        city: "Coimbatore",
        continent: "Asia",
        restaurant_address: {
            street: "6 Mill Road",
            area: "RS Puram",
            state: "Tamil Nadu",
        },
        owners: [
            {
                name: "K. Venkatesan",
                role: "Founder",
            },
        ],
        staff_count: 13,
        website: "https://www.therollingdosa.in",
        mission_statement:
            "Serve crispy dosas with innovative fillings while respecting tradition.",
        description:
            "The Rolling Dosa is known for its thin, crispy dosas, house-made chutneys, and fast service model.",
        avg_price_for_two: 300,
        veg_only: true,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 21,
        name: "Northern Smokehouse",
        cuisine_type: "Grill",
        established: 2014,
        country: "India",
        city: "Chandigarh",
        continent: "Asia",
        restaurant_address: {
            street: "88 Sector Market",
            area: "Sector 26",
            state: "Chandigarh",
        },
        owners: [
            {
                name: "Manpreet Singh",
                role: "Founder",
            },
        ],
        staff_count: 27,
        website: "https://www.northernsmokehouse.in",
        mission_statement:
            "Master the art of slow grilling and smoked meats.",
        description:
            "Northern Smokehouse specializes in smoked meats, open-flame grills, and rustic dining inspired by global barbecue traditions.",
        avg_price_for_two: 950,
        veg_only: false,
        is_open: false,
        offers_delivery: true,
    },

    {
        id: 22,
        name: "Sweet Cravings",
        cuisine_type: "Desserts",
        established: 2021,
        country: "India",
        city: "Indore",
        continent: "Asia",
        restaurant_address: {
            street: "19 Sugar Lane",
            area: "Vijay Nagar",
            state: "Madhya Pradesh",
        },
        owners: [
            {
                name: "Pooja Jain",
                role: "Founder & Pastry Chef",
            },
        ],
        staff_count: 11,
        website: "https://www.sweetcravings.in",
        mission_statement:
            "Craft desserts that balance sweetness, texture, and nostalgia.",
        description:
            "Sweet Cravings offers handcrafted cakes, pastries, and Indian fusion desserts made in small batches.",
        avg_price_for_two: 400,
        veg_only: true,
        is_open: true,
        offers_delivery: true,
    },
    {
        id: 23,
        name: "Harvest Bowl",
        cuisine_type: "Healthy",
        established: 2020,
        country: "India",
        city: "Noida",
        continent: "Asia",
        restaurant_address: {
            street: "44 Wellness Avenue",
            area: "Sector 18",
            state: "Uttar Pradesh",
        },
        owners: [
            {
                name: "Ritika Sharma",
                role: "Founder & Wellness Coach",
            },
        ],
        staff_count: 12,
        website: "https://www.harvestbowl.in",
        mission_statement:
            "Make nutritious food accessible, affordable, and enjoyable for everyday life.",
        description:
            "Harvest Bowl serves balanced meals, grain bowls, and smoothies designed for health-conscious urban customers.",
        avg_price_for_two: 500,
        veg_only: true,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 24,
        name: "Kebab Craft",
        cuisine_type: "Mughlai",
        established: 2011,
        country: "India",
        city: "Lucknow",
        continent: "Asia",
        restaurant_address: {
            street: "27 Nawab Lane",
            area: "Hazratganj",
            state: "Uttar Pradesh",
        },
        owners: [
            {
                name: "Adeel Khan",
                role: "Founder & Culinary Head",
            },
        ],
        staff_count: 23,
        website: "https://www.kebabcraft.in",
        mission_statement:
            "Preserve the royal kebab traditions of Awadhi cuisine.",
        description:
            "Kebab Craft is renowned for its melt-in-the-mouth galouti kebabs, slow-cooked gravies, and traditional Lucknowi flavors.",
        avg_price_for_two: 800,
        veg_only: false,
        is_open: true,
        offers_delivery: false,
    },

    {
        id: 25,
        name: "Bamboo Basket",
        cuisine_type: "Pan Asian",
        established: 2018,
        country: "India",
        city: "Guwahati",
        continent: "Asia",
        restaurant_address: {
            street: "10 Riverside Road",
            area: "Uzan Bazar",
            state: "Assam",
        },
        owners: [
            {
                name: "Ankit Das",
                role: "Founder",
            },
        ],
        staff_count: 17,
        website: "https://www.bamboobasket.in",
        mission_statement:
            "Highlight Asian flavors with a focus on freshness and simplicity.",
        description:
            "Bamboo Basket offers a mix of Thai, Chinese, and Northeast-inspired dishes using fresh herbs and light sauces.",
        avg_price_for_two: 700,
        veg_only: false,
        is_open: false,
        offers_delivery: true,
    },

    {
        id: 26,
        name: "Urban Punjab",
        cuisine_type: "Punjabi",
        established: 2014,
        country: "India",
        city: "Ludhiana",
        continent: "Asia",
        restaurant_address: {
            street: "61 Industrial Road",
            area: "Model Town",
            state: "Punjab",
        },
        owners: [
            {
                name: "Harjit Singh",
                role: "Founder",
            },
            {
                name: "Navdeep Kaur",
                role: "Operations Manager",
            },
        ],
        staff_count: 29,
        website: "https://www.urbanpunjab.in",
        mission_statement:
            "Serve hearty Punjabi meals with warmth and generosity.",
        description:
            "Urban Punjab is known for its butter-rich curries, stuffed parathas, and traditional Punjabi hospitality.",
        avg_price_for_two: 750,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 27,
        name: "Cafe Terra",
        cuisine_type: "Cafe",
        established: 2019,
        country: "India",
        city: "Dehradun",
        continent: "Asia",
        restaurant_address: {
            street: "5 Hill View Road",
            area: "Rajpur Road",
            state: "Uttarakhand",
        },
        owners: [
            {
                name: "Sahil Bansal",
                role: "Founder",
            },
        ],
        staff_count: 14,
        website: "https://www.cafeterra.in",
        mission_statement:
            "Create a peaceful café experience inspired by nature and slow living.",
        description:
            "Cafe Terra offers artisanal coffee, baked goods, and comfort food in a relaxed, greenery-filled setting.",
        avg_price_for_two: 600,
        veg_only: true,
        is_open: true,
        offers_delivery: false,
    },
    {
        id: 28,
        name: "City Spice Lab",
        cuisine_type: "Fusion",
        established: 2021,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "77 Innovation Road",
            area: "HSR Layout",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Akash Verma",
                role: "Founder & Menu Curator",
            },
        ],
        staff_count: 16,
        website: "https://www.cityspicelab.in",
        mission_statement:
            "Experiment with Indian flavors through modern fusion techniques.",
        description:
            "City Spice Lab blends traditional Indian spices with global cooking styles, attracting a young and experimental crowd.",
        avg_price_for_two: 700,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 29,
        name: "Bombay Thali House",
        cuisine_type: "Indian",
        established: 2012,
        country: "India",
        city: "Mumbai",
        continent: "Asia",
        restaurant_address: {
            street: "34 Market Street",
            area: "Dadar",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Nitin Deshmukh",
                role: "Founder",
            },
        ],
        staff_count: 24,
        website: "https://www.bombaythalihouse.in",
        mission_statement:
            "Serve wholesome thalis inspired by Maharashtrian home cooking.",
        description:
            "Bombay Thali House focuses on comfort meals, seasonal vegetables, and traditional recipes served in classic thali format.",
        avg_price_for_two: 500,
        veg_only: true,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 30,
        name: "Delhi Grill Room",
        cuisine_type: "Grill",
        established: 2015,
        country: "India",
        city: "Delhi",
        continent: "Asia",
        restaurant_address: {
            street: "59 Ring Road",
            area: "South Extension",
            state: "Delhi",
        },
        owners: [
            {
                name: "Samar Khanna",
                role: "Founder & Operations Head",
            },
        ],
        staff_count: 31,
        website: "https://www.delhigrillroom.in",
        mission_statement:
            "Offer a modern grill-based dining experience rooted in bold flavors.",
        description:
            "Delhi Grill Room is known for open-flame grills, hearty portions, and a contemporary dining setup popular with families and groups.",
        avg_price_for_two: 1000,
        veg_only: false,
        is_open: false,
        offers_delivery: false,
    },

    {
        id: 31,
        name: "Pune Meal Box",
        cuisine_type: "Home Style",
        established: 2018,
        country: "India",
        city: "Pune",
        continent: "Asia",
        restaurant_address: {
            street: "16 Comfort Lane",
            area: "Aundh",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Shubhangi Patil",
                role: "Founder",
            },
        ],
        staff_count: 18,
        website: "https://www.punemealbox.in",
        mission_statement:
            "Deliver homely meals that feel familiar, nutritious, and comforting.",
        description:
            "Pune Meal Box serves simple, home-style lunches and dinners popular among students and working professionals.",
        avg_price_for_two: 450,
        veg_only: true,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 32,
        name: "Charcoal Courtyard",
        cuisine_type: "Barbecue",
        established: 2016,
        country: "India",
        city: "Hyderabad",
        continent: "Asia",
        restaurant_address: {
            street: "102 Flame Avenue",
            area: "Gachibowli",
            state: "Telangana",
        },
        owners: [
            {
                name: "Imran Siddiqui",
                role: "Founder & Grill Specialist",
            },
        ],
        staff_count: 34,
        website: "https://www.charcoalcourtyard.in",
        mission_statement:
            "Perfect the art of charcoal grilling with bold marinades and slow cooking.",
        description:
            "Charcoal Courtyard is known for its smoky flavors, live grills, and a menu centered around meat and vegetarian barbecue platters.",
        avg_price_for_two: 1150,
        veg_only: false,
        is_open: true,
        offers_delivery: false,
    },
    {
        id: 33,
        name: "Silicon Valley Diner",
        cuisine_type: "American",
        established: 2018,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "12 Tech Park Road",
            area: "Bellandur",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Rohan Shetty",
                role: "Founder",
            },
        ],
        staff_count: 20,
        website: "https://www.siliconvalleydiner.in",
        mission_statement:
            "Serve comfort food inspired by classic American diners with a modern twist.",
        description:
            "Silicon Valley Diner offers burgers, sandwiches, and milkshakes, catering largely to the IT crowd and late-night diners.",
        avg_price_for_two: 850,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 34,
        name: "Marine Drive Eats",
        cuisine_type: "Seafood",
        established: 2014,
        country: "India",
        city: "Mumbai",
        continent: "Asia",
        restaurant_address: {
            street: "5 Coastline Avenue",
            area: "Marine Drive",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Sanjay Patil",
                role: "Founder",
            },
        ],
        staff_count: 26,
        website: "https://www.marinedriveeats.in",
        mission_statement:
            "Showcase coastal Indian seafood using time-tested regional recipes.",
        description:
            "Marine Drive Eats is known for fresh fish curries, prawn preparations, and a view-facing casual dining experience.",
        avg_price_for_two: 1100,
        veg_only: false,
        is_open: false,
        offers_delivery: false,
    },

    {
        id: 35,
        name: "Old Delhi Pot",
        cuisine_type: "Mughlai",
        established: 2008,
        country: "India",
        city: "Delhi",
        continent: "Asia",
        restaurant_address: {
            street: "91 Heritage Gali",
            area: "Chandni Chowk",
            state: "Delhi",
        },
        owners: [
            {
                name: "Salman Ansari",
                role: "Founder",
            },
        ],
        staff_count: 33,
        website: "https://www.olddelhipot.in",
        mission_statement:
            "Preserve the slow-cooked Mughlai dishes of Old Delhi.",
        description:
            "Old Delhi Pot specializes in rich gravies, hand-ground spices, and recipes passed down through generations.",
        avg_price_for_two: 700,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 36,
        name: "Pune Protein Kitchen",
        cuisine_type: "Healthy",
        established: 2021,
        country: "India",
        city: "Pune",
        continent: "Asia",
        restaurant_address: {
            street: "28 Fitness Street",
            area: "Wakad",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Amit Kulkarni",
                role: "Founder & Nutrition Advisor",
            },
        ],
        staff_count: 10,
        website: "https://www.puneproteinkitchen.in",
        mission_statement:
            "Support active lifestyles with high-protein, balanced meals.",
        description:
            "Pune Protein Kitchen focuses on protein bowls, grilled items, and calorie-conscious meal options.",
        avg_price_for_two: 550,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 37,
        name: "Hyderabad Curry Co.",
        cuisine_type: "Indian",
        established: 2011,
        country: "India",
        city: "Hyderabad",
        continent: "Asia",
        restaurant_address: {
            street: "66 Spice Circle",
            area: "Banjara Hills",
            state: "Telangana",
        },
        owners: [
            {
                name: "Naveen Rao",
                role: "Founder",
            },
        ],
        staff_count: 28,
        website: "https://www.hyderabadcurryco.in",
        mission_statement:
            "Celebrate the bold, layered flavors of Hyderabadi cuisine.",
        description:
            "Hyderabad Curry Co. serves biryanis, curries, and traditional dishes rooted in Nizam-era culinary heritage.",
        avg_price_for_two: 800,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },
    {
        id: 38,
        name: "Koramangala Bites",
        cuisine_type: "Cafe",
        established: 2019,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "19 Social Street",
            area: "Koramangala",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Pranav Iyer",
                role: "Founder",
            },
        ],
        staff_count: 15,
        website: "https://www.koramanagalabites.in",
        mission_statement:
            "Create a casual café space for conversations, coffee, and comfort food.",
        description:
            "Koramangala Bites offers sandwiches, pastas, and specialty coffee, popular among students and startup employees.",
        avg_price_for_two: 600,
        veg_only: true,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 39,
        name: "Mumbai Masaledar",
        cuisine_type: "Indian",
        established: 2013,
        country: "India",
        city: "Mumbai",
        continent: "Asia",
        restaurant_address: {
            street: "82 Local Lane",
            area: "Andheri East",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Vijay Sawant",
                role: "Founder",
            },
        ],
        staff_count: 27,
        website: "https://www.mumbaimasaledar.in",
        mission_statement:
            "Serve bold, spicy dishes inspired by Mumbai’s street food culture.",
        description:
            "Mumbai Masaledar focuses on quick meals, strong flavors, and a menu inspired by local street-side favorites.",
        avg_price_for_two: 500,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 40,
        name: "Capital Greens",
        cuisine_type: "Healthy",
        established: 2020,
        country: "India",
        city: "Delhi",
        continent: "Asia",
        restaurant_address: {
            street: "14 Wellness Marg",
            area: "Dwarka",
            state: "Delhi",
        },
        owners: [
            {
                name: "Neha Bansal",
                role: "Founder & Wellness Consultant",
            },
        ],
        staff_count: 12,
        website: "https://www.capitalgreens.in",
        mission_statement:
            "Encourage healthier eating habits through balanced, plant-forward meals.",
        description:
            "Capital Greens serves salads, grain bowls, and low-oil meals for health-conscious urban diners.",
        avg_price_for_two: 550,
        veg_only: true,
        is_open: false,
        offers_delivery: true,
    },

    {
        id: 41,
        name: "Pune Spice Yard",
        cuisine_type: "Indian",
        established: 2015,
        country: "India",
        city: "Pune",
        continent: "Asia",
        restaurant_address: {
            street: "33 Flavor Road",
            area: "Kalyani Nagar",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Rahul Deshpande",
                role: "Founder",
            },
        ],
        staff_count: 22,
        website: "https://www.punespiceyard.in",
        mission_statement:
            "Offer comforting Indian meals with consistent quality and taste.",
        description:
            "Pune Spice Yard is known for its dependable menu, quick service, and family-friendly dining environment.",
        avg_price_for_two: 650,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 42,
        name: "Hyderabad Nizam Kitchen",
        cuisine_type: "Hyderabadi",
        established: 2012,
        country: "India",
        city: "Hyderabad",
        continent: "Asia",
        restaurant_address: {
            street: "71 Royal Street",
            area: "Tolichowki",
            state: "Telangana",
        },
        owners: [
            {
                name: "Abdul Rahman",
                role: "Founder",
            },
        ],
        staff_count: 29,
        website: "https://www.nizamkitchen.in",
        mission_statement:
            "Keep alive the culinary legacy of Nizam-era Hyderabad.",
        description:
            "Hyderabad Nizam Kitchen specializes in biryanis, haleem, and slow-cooked gravies rich in spice and aroma.",
        avg_price_for_two: 800,
        veg_only: false,
        is_open: true,
        offers_delivery: false,
    },

    {
        id: 43,
        name: "Metro Meal Stop",
        cuisine_type: "Quick Bites",
        established: 2021,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "5 Transit Road",
            area: "Yelahanka",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Sandeep Kumar",
                role: "Founder",
            },
        ],
        staff_count: 11,
        website: "https://www.metromealstop.in",
        mission_statement:
            "Serve fast, affordable meals for people on the move.",
        description:
            "Metro Meal Stop offers wraps, rice bowls, and snacks designed for quick service and takeaway customers.",
        avg_price_for_two: 350,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },
    {
        id: 44,
        name: "Indiranagar Eats",
        cuisine_type: "Indian",
        established: 2016,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "88 12th Main",
            area: "Indiranagar",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Karthik Rao",
                role: "Founder",
            },
        ],
        staff_count: 23,
        website: "https://www.indiranagareats.in",
        mission_statement:
            "Offer dependable Indian meals in a lively neighborhood setting.",
        description:
            "Indiranagar Eats serves crowd-pleasing Indian dishes with consistent taste, popular among office-goers and families.",
        avg_price_for_two: 650,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 45,
        name: "Mumbai Street Wok",
        cuisine_type: "Indo-Chinese",
        established: 2014,
        country: "India",
        city: "Mumbai",
        continent: "Asia",
        restaurant_address: {
            street: "23 Bazaar Road",
            area: "Ghatkopar",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Anil Chavan",
                role: "Founder",
            },
        ],
        staff_count: 25,
        website: "https://www.mumbaistreetwok.in",
        mission_statement:
            "Bring street-style Indo-Chinese flavors into a casual dining space.",
        description:
            "Mumbai Street Wok focuses on fast-paced service and bold flavors inspired by Mumbai’s street food culture.",
        avg_price_for_two: 500,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 46,
        name: "Green Delhi Kitchen",
        cuisine_type: "Vegetarian",
        established: 2019,
        country: "India",
        city: "Delhi",
        continent: "Asia",
        restaurant_address: {
            street: "60 Garden Lane",
            area: "Lajpat Nagar",
            state: "Delhi",
        },
        owners: [
            {
                name: "Pallavi Mehta",
                role: "Founder",
            },
        ],
        staff_count: 17,
        website: "https://www.greendelhikitchen.in",
        mission_statement:
            "Promote flavorful vegetarian meals with a modern approach.",
        description:
            "Green Delhi Kitchen offers seasonal vegetarian dishes, light curries, and wholesome meals for everyday dining.",
        avg_price_for_two: 550,
        veg_only: true,
        is_open: false,
        offers_delivery: true,
    },

    {
        id: 47,
        name: "Pune Tiffin House",
        cuisine_type: "Home Style",
        established: 2012,
        country: "India",
        city: "Pune",
        continent: "Asia",
        restaurant_address: {
            street: "9 Comfort Path",
            area: "Shivajinagar",
            state: "Maharashtra",
        },
        owners: [
            {
                name: "Sunita Kulkarni",
                role: "Founder",
            },
        ],
        staff_count: 19,
        website: "https://www.punetiffinhouse.in",
        mission_statement:
            "Serve homely meals that remind customers of home cooking.",
        description:
            "Pune Tiffin House specializes in simple, nutritious meals popular with students and working professionals.",
        avg_price_for_two: 400,
        veg_only: true,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 48,
        name: "Hyderabad Spice Route",
        cuisine_type: "Hyderabadi",
        established: 2010,
        country: "India",
        city: "Hyderabad",
        continent: "Asia",
        restaurant_address: {
            street: "101 Aroma Road",
            area: "Mehdipatnam",
            state: "Telangana",
        },
        owners: [
            {
                name: "Faheem Ahmed",
                role: "Founder",
            },
        ],
        staff_count: 31,
        website: "https://www.hyderabadspiceroute.in",
        mission_statement:
            "Deliver authentic Hyderabadi flavors rooted in tradition.",
        description:
            "Hyderabad Spice Route is known for its dum biryanis, rich curries, and spice-forward cooking style.",
        avg_price_for_two: 850,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    },

    {
        id: 49,
        name: "Urban Plate",
        cuisine_type: "Multi-Cuisine",
        established: 2020,
        country: "India",
        city: "Bangalore",
        continent: "Asia",
        restaurant_address: {
            street: "4 City Center Road",
            area: "Malleshwaram",
            state: "Karnataka",
        },
        owners: [
            {
                name: "Sumanth Hegde",
                role: "Founder",
            },
            {
                name: "Kavya Hegde",
                role: "Operations Lead",
            },
        ],
        staff_count: 26,
        website: "https://www.urbanplate.in",
        mission_statement:
            "Offer diverse cuisines under one roof with consistent quality.",
        description:
            "Urban Plate caters to mixed groups by offering Indian, continental, and Asian dishes in a casual dining format.",
        avg_price_for_two: 750,
        veg_only: false,
        is_open: true,
        offers_delivery: true,
    }

];


