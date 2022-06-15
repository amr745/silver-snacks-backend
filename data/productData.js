const productData = [
    {
        name: "Basmati Rice",
        price: 45,
        quantity: 21,
        img: "https://m.media-amazon.com/images/I/71ZBpJgCw7L._AC_SX679_.jpg",
        description: "GREAT TASTING LONG GRAIN- With premium quality, fluffy texture, and naturally authentic like flavor that's been aged for 2 years, Himalayan Basmati rice is widely regarded as the finest rice in the world.",
    },
    {
        name: "Frito-Lay",
        price: 46.57,
        quantity: 40,
        img: "https://m.media-amazon.com/images/I/81DF9tHWcbL._SX679_.jpg",
        description: "40 Single Serve favorites Lay's Classic Potato Chips, Crunchy Cheetos, Chili Cheese Fritos, Lay's BBQ Potato Chips, Original Funyuns, Doritos Nacho Cheese, Original Fritos, and Ruffles Cheddar & Sour Cream Chips",
    },
    {
        name: "Welch's Fruit Snacks",
        price: 7.58,
        quantity: 30,
        img: "https://m.media-amazon.com/images/I/91F9+-E5+FL._SX679_.jpg",
        description: "Perfect tasty snack for school lunches, sporting games, the office and more",
    },
    {
        name: "Pringles Chips",
        price: 11,
        quantity: 22,
        img: "https://m.media-amazon.com/images/I/81CIge4tiwL._SX679_.jpg",
        description: "Enjoy snacking moments everywhere with the outrageously delicious flavor and fun shape of these ready-to-go",
    },
    {
        name: "Beef Ravioli",
        price: 11.40,
        quantity: 30,
        img: "https://m.media-amazon.com/images/I/81za90qtEZL._SX679_PIbundle-12,TopRight,0,0_AA679SH20_.jpg",
        description: "Chef Boyardee Beef Ravioli in tomato and meat sauce is a fun meal for the kids, and is ready to serve in less than one minute",
    },
    {
        name: "Corned Beef Hash",
        price: 20.82,
        quantity: 11,
        img: "https://m.media-amazon.com/images/I/81R8wpC7xML._SX679_PIbundle-8,TopRight,0,0_AA679SH20_.jpg",
        description: "Since 1936 we've brought you the tastiest canned chili, made from choice ingredients and cooked to perfection. It's no wonder we're America's favorite chili from coast to coast. Animals were harmed in the making of this product.",
    },
    {
        name: "Peanut Butter",
        price: 11.39,
        quantity: 15,
        img: "https://m.media-amazon.com/images/I/81NXRSZvkFL._SX679_PIbundle-2,TopRight,0,0_SX679SY543SH20_.jpg",
        description: "Creamy Peanut Butter: Spread on the smiles with tasty, creamy peanut buttery perfection. Add more yum and fun to just about anything. It’s nothing but great snacking with this creamy classic",
    },
    {
        name: "Tostitos Bite",
        price: 18.19,
        quantity: 19,
        img: "https://m.media-amazon.com/images/I/81XRi95WamL._SX679_.jpg",
        description: "Variety pack includes: 8 bags of Tostitos Crispy Rounds Tortilla Chips, 4 cups of Tostitos Medium Salsa, and 4 cups of Tostitos Nacho Cheese Dip",
    },
    {
        name: "Macaroni & Cheese",
        price: 6.64,
        quantity: 30,
        img: "https://m.media-amazon.com/images/I/81te0dgkN4L._SX679_.jpg",
        description: "KRAFT MACARONI & CHEESE: One 18 ct box of Kraft Easy Mac Original Macaroni & Cheese Microwavable Dinner Single Serve Packets",
    },
    {
        name: "RITZ Crackers",
        price: 13.95,
        quantity: 30,
        img: "https://m.media-amazon.com/images/I/81jiB8t7y2S._SX679_.jpg",
        description: "Variety pack includes 1 family size box of RITZ Original Crackers and 2 cans of Easy Cheese Cheddar Spray Cheese (packaging may vary)",
    },
    {
        name: "PLANTERS Deluxe Whole Cashews",
        price: 9.40,
        quantity: 24,
        img: "https://m.media-amazon.com/images/I/61CWZr4mH7L._SY879_.jpg",
        description: "KOSHER CERTIFIED WHOLE CASHEWS: PLANTERS cashews are great tasting nutrient dense snacks for those keeping Kosher. No Cholesterol.",
    },
    {
        name: "HERSHEY'S Chocolate",
        price: 14.10,
        quantity: 18,
        img: "https://m.media-amazon.com/images/I/81wjkxIQYSS._SX679_PIbundle-18,TopRight,0,0_SX679SY735SH20_.jpg",
        description: "Contains one (1) 27.3-ounce, 18-count variety pack of REESE'S, HERSHEY'S and KIT KAT Milk Chocolate Assortment Candy Bars",
    },
    {
        name: "Chicken Salad",
        price: 15.29,
        quantity: 13,
        img: "https://m.media-amazon.com/images/I/81dUtSek22L._SX679_PIbundle-12,TopRight,0,0_AA679SH20_.jpg",
        description: "DELICIOUS FLAVOR: We get it: everyone has their own favorite chicken salad recipe, but StarKist Chicken Creations Chicken Salad pouches include savory dill relish, crisp celery, red peppers and a unique ingredient—convenience.",
    },
    {
        name: "Pistachios",
        price: 6.59,
        quantity: 7,
        img: "https://m.media-amazon.com/images/I/81vvSoE3qzL._SX679_PIbundle-9,TopRight,0,0_AA679SH20_.jpg",
        description: "CALIFORNIA GROWN: Wonderful Pistachios owns, cultivates and harvests more than 75,000 acres of pistachio and almond California orchards, where we carefully tend and harvest using the latest sustainable practices.",
    },
    {
        name: "Knorr Pasta",
        price: 8.34,
        quantity: 10,
        img: "https://m.media-amazon.com/images/I/91IHiYPAehL._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg",
        description: "Knorr Pasta Sides Four Cheese Pasta is a creamy, cheesy pasta side dish that enhances meals with amazing flavor",
    },
    {
        name: "Jasmine Rice",
        price: 34,
        quantity: 30,
        img: "https://m.media-amazon.com/images/I/815pWHOGCOS._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg",
        description: "100% Authentic Thai Rice. No artificial colors, flavors or preservatives",
    },
    {
        name: "Beef Jerky",
        price: 8.81,
        quantity: 40,
        img: "https://m.media-amazon.com/images/I/81C1mq5cxnL._SY879_.jpg",
        description: "GOOD SOURCE OF PROTEIN : Protein is an essential part of your diet and Jack Link's Beef Jerky is a delicious way to get more every day. With 10g of protein and 80 calories per serving, it's a must-have snack to help keep you satisfied",
    },

]

module.exports = productData;