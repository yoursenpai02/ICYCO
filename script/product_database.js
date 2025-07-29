const products_list = [
    {
        id: "p001",
        name: "Chocolate Chip Cookie",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "A classic, golden-baked cookie packed with rich, melty chocolate chips — soft, chewy, and perfect for pairing with your favorite scoop of ice cream!",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p002",
        name: "Häagen-Dazs Vanilla",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Rich, creamy, and made with real Madagascar vanilla — a timeless classic with pure, elegant flavor.",
        image: "images/vannila.jpg",
        rating: 5
    },
    {
        id: "p003",
        name: "Homemade Vanilla",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Classic and creamy with a rich homemade touch — smooth, sweet, and endlessly comforting.",
        image: "images/mango.jpg",
        rating: 4
    },
    {
        id: "p004",
        name: "Cookies & Cream",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Crunchy chocolate cookie chunks swirled into creamy vanilla for a nostalgic, crave-worthy treat.",
        image: "images/vannila.jpg",
        rating: 5
    },
    {
        id: "p005",
        name: "Sea Salt Caramel Gelato",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Lusciously smooth caramel gelato kissed with sea salt for a perfect sweet-salty balance.",
        image: "images/strawberry.jpg",
        rating: 4
    },
    {
        id: "p006",
        name: "Stracciatella Gelato",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Silky vanilla gelato laced with delicate ribbons of crisp chocolate — an Italian classic.",
        image: "images/peanut-butter.jpg",
        rating: 5
    },
    {
        id: "p007",
        name: "Pistachio Gelato",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Smooth and nutty with real pistachios for a rich, aromatic, and indulgent experience.",
        image: "images/mango.jpg",
        rating: 4
    },
    {
        id: "p008",
        name: "Mediterranean Mint",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Fresh, cool mint flavor with a hint of Mediterranean herbs — clean, refreshing, and bold.",
        image: "images/mint.jpg",
        rating: 3
    },
    {
        id: "p009",
        name: "Raspberry Sorbetto",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Bursting with tart raspberry flavor — icy, vibrant, and refreshingly light.",
        image: "images/rainbow.jpg",
        rating: 4
    },
    {
        id: "p010",
        name: "Mango Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Tropical and juicy mango bliss in every spoon — smooth, bright, and fruity.",
        image: "images/mango.jpg",
        rating: 5
    },
    {
        id: "p011",
        name: "Berry Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "A medley of mixed berries blended into a tangy, refreshing sorbet full of flavor.",
        image: "images/blue berry.jpg",
        rating: 3
    },
    {
        id: "p012",
        name: "Lemon Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Zesty and crisp with real lemon — the ultimate palate cleanser and summer refresher.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p013",
        name: "Strawberry Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Sweet and juicy strawberries blended to icy perfection — light, smooth, and delightful.",
        image: "images/strawberry.jpg",
        rating: 5
    },
    {
        id: "p014",
        name: "Chocolate Sorbet",
        flavor_id: "f003",
        off: 4,
        price: 50,
        description: "Rich and intense dark chocolate flavor — dairy-free yet decadently creamy.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p015",
        name: "Original Frozen Yogurt",
        flavor_id: "f004",
        off: 25,
        price: 50,
        description: "Tangy and creamy with a refreshing twist — a guilt-free frozen delight.",
        image: "images/peanut-butter.jpg",
        rating: 5
    },
    {
        id: "p016",
        name: "Frozen Yogurt Vanilla Bean",
        flavor_id: "f004",
        off: 10,
        price: 50,
        description: "Classic vanilla with a subtle tang and smooth texture — simple and satisfying.",
        image: "images/vannila.jpg",
        rating: 4
    },
    {
        id: "p017",
        name: "Strawberry",
        flavor_id: "f004",
        off: 8,
        price: 50,
        description: "Sweet strawberries meet creamy yogurt for a fruity, feel-good treat.",
        image: "images/strawberry.jpg",
        rating: 4
    },
    {
        id: "p018",
        name: "Cake Batter",
        flavor_id: "f004",
        off: 12,
        price: 50,
        description: "Buttery, sweet, and nostalgic — like licking the spoon from your favorite cake mix.",
        image: "images/rainbow.jpg",
        rating: 3
    },
    {
        id: "p019",
        name: "Greek Yogurt",
        flavor_id: "f004",
        off: 8,
        price: 50,
        description: "Thick, rich, and tangy — a cultured twist on frozen goodness.",
        image: "images/vannila.jpg",
        rating: 5
    },
    {
        id: "p020",
        name: "Pistachio",
        flavor_id: "f004",
        off: 1,
        price: 50,
        description: "Delicate and nutty with a creamy base — a timeless favorite for nut lovers.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p021",
        name: "Fudge Brownie",
        flavor_id: "f005",
        off: 0,
        price: 50,
        description: "Decadent chocolate ice cream loaded with chewy brownie pieces — pure indulgence.",
        image: "images/blue berry.jpg",
        rating: 5
    },
    {
        id: "p022",
        name: "Peanut Butter",
        flavor_id: "f005",
        off: 3,
        price: 50,
        description: "Creamy, salty-sweet peanut butter blended into a smooth, rich scoop.",
        image: "images/rainbow.jpg",
        rating: 4
    },
    {
        id: "p023",
        name: "Mint Chip Dairy-Free",
        flavor_id: "f005",
        off: 15,
        price: 50,
        description: "Cool mint flavor with chocolate chips — plant-based and refreshing.",
        image: "images/mint.jpg",
        rating: 4
    },
    {
        id: "p024",
        name: "Oat Milk Chocolate",
        flavor_id: "f005",
        off: 8,
        price: 50,
        description: "Silky-smooth chocolate made with creamy oat milk — rich, vegan, and satisfying.",
        image: "images/chocolate.jpg",
        rating: 3
    }
]

export default products_list;
