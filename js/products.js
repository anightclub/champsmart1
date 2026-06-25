// 1. Categories List (Aapki di hui list)
const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'kitchen', name: 'Kitchen Item' },
    { id: 'home', name: 'Home' },
    { id: 'office', name: 'Office Supplies' },
    { id: 'pet', name: 'Pet Accessories' },
    { id: 'grocery', name: 'Grocery' },
    { id: 'toys', name: 'Toys' },
    { id: 'books', name: 'Books' },
    { id: 'sports', name: 'Sports' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'tools', name: 'Tools' }
];

// 2. Main Products Array
// Screenshot se Kitchen items ke extract kiye gaye exact names aur extensions
const productsData = [
    {
        id: "k001",
        name: "1 Pc Frosty Ice Tray (MediumLarge) - Multi-Grid Durable Ice Cube Maker for Freezer Use",
        price: 9.99,
        description: "Durable multi-grid ice cube maker, perfect for your freezer.",
        image: "images/kitchen/1 Pc Frosty Ice Tray (MediumLarge) – Multi-Grid Durable Ice Cube Maker for Freezer Use.webp",
        category: "kitchen"
    },
    {
        id: "k002",
        name: "1.5 Litre Clear Kettle with Wooden Lid Transparent",
        price: 24.50,
        description: "Elegant transparent clear kettle featuring a natural wooden lid.",
        image: "images/kitchen/1.5 Litre Clear Kettle with Wooden Lid, Transparent.webp",
        category: "kitchen"
    },
    {
        id: "k003",
        name: "2 Pcs Glass Soap Dispenser - Refillable Pump Bottles with Bamboo Lid",
        price: 18.99,
        description: "Stylish glass soap dispensers with eco-friendly bamboo lids.",
        image: "images/kitchen/2  Pcs Glass Soap Dispenser – Refillable Pump Bottles with Bamboo Lid.webp",
        category: "kitchen"
    },
    {
        id: "k004",
        name: "2 Pcs Glass Soap Dispenser - Refillable Pump Bottles with Bamboo Lid Square",
        price: 19.99,
        description: "Square-shaped stylish glass soap dispensers with bamboo lids.",
        image: "images/kitchen/2 Pcs Glass Soap Dispenser – Refillable Pump Bottles with Bamboo Lid Sqaure.webp",
        category: "kitchen"
    },
    {
        id: "k005",
        name: "3PCS Kitchen Towel Set - Ultra-Soft Hanging Dish Towels (Assorted Colors)",
        price: 12.00,
        description: "Ultra-soft and absorbent hanging dish towels in assorted colors.",
        image: "images/kitchen/3PCS Kitchen Towel Set – Ultra-Soft Hanging Dish Towels (Assorted Colors).webp",
        category: "kitchen"
    },
    {
        id: "k006",
        name: "5 Layers Kitchen Scissor - Multi-Blade Herb & Vegetable Cutting Shears with Cleaning Comb",
        price: 14.50,
        description: "Multi-blade shears for quick herb and vegetable chopping.",
        image: "images/kitchen/5 Layers Kitchen Scissor – Multi-Blade Herb & Vegetable Cutting Shears with Cleaning Comb.webp",
        category: "kitchen"
    },
    {
        id: "k007",
        name: "Assorted Silicone Cleansing Ice Lattice",
        price: 8.50,
        description: "Premium silicone ice lattice for versatile freezing needs.",
        image: "images/kitchen/Assorted Silicone Cleansing Ice Lattice.jpg",
        category: "kitchen"
    },
    {
        id: "k008",
        name: "Bamboo Lid 800ml Kettle - Modern Clear Tea Pot with Wooden Top & Easy-Pour Spout",
        price: 22.00,
        description: "Modern clear tea pot with an easy-pour spout and wooden top.",
        image: "images/kitchen/Bamboo Lid 800ml Kettle – Modern Clear Tea Pot with Wooden Top & Easy-Pour Spout.webp",
        category: "kitchen"
    },
    {
        id: "k009",
        name: "Elegant Butterfly Can Opener - Manual Handheld Can Opener with Easy Grip Handle",
        price: 11.99,
        description: "Manual handheld can opener featuring an easy grip butterfly handle.",
        image: "images/kitchen/Elegant Butterfly Can Opener – Manual Handheld Can Opener with Easy Grip Handle.webp",
        category: "kitchen"
    },
    {
        id: "k010",
        name: "Elegant Ice Cream Scoop - Heavy-Duty Scooper for Perfect Dessert Servings",
        price: 10.50,
        description: "Heavy-duty elegant scooper for perfect dessert servings every time.",
        image: "images/kitchen/Elegant Ice Cream Scoop – Heavy-Duty Scooper for Perfect Dessert Servings.webp",
        category: "kitchen"
    },
    {
        id: "k011",
        name: "Frosty Ice Tray Small (2 Pcs Pack) - Compact Multi-Grid Ice Cube Maker for Freezer Use",
        price: 7.99,
        description: "Compact 2-piece multi-grid ice cube maker pack for smaller freezers.",
        image: "images/kitchen/Frosty Ice Tray Small (2 Pcs Pack) – Compact Multi-Grid Ice Cube Maker for Freezer Use.webp",
        category: "kitchen"
    },
    {
        id: "k012",
        name: "Loose Kitchen Knife Set with Golden Finish Handle",
        price: 35.00,
        description: "Premium loose kitchen knife set featuring elegant golden finish handles.",
        image: "images/kitchen/Loose Kitchen Knife Set with Golden Finish Handle.webp",
        category: "kitchen"
    },
    {
        id: "k013",
        name: "Pizza Cutter - Wheel Pizza Slicer",
        price: 6.99,
        description: "Sharp and durable wheel pizza slicer for perfect cuts.",
        image: "images/kitchen/Pizza Cutter – Wheel Pizza Slicer.webp",
        category: "kitchen"
    },
    {
        id: "k014",
        name: "Stainless Steel Fruit Baller - Double-Sided Melon & Fruit Scoop",
        price: 8.99,
        description: "Double-sided stainless steel fruit baller for melons and more.",
        image: "images/kitchen/Stainless Steel Fruit Baller – Double-Sided Melon & Fruit Scoop.webp",
        category: "kitchen"
    },
    {
        id: "k015",
        name: "Stainless Steel Kitchen Knife 9 CM",
        price: 15.00,
        description: "Sharp and precise 9 CM stainless steel kitchen knife.",
        image: "images/kitchen/Stainless Steel Kitchen Knife 9 CM.jpg",
        category: "kitchen"
    },
    {
        id: "k016",
        name: "Stainless Steel Kitchen Knife",
        price: 18.00,
        description: "High-quality, durable stainless steel multipurpose kitchen knife.",
        image: "images/kitchen/Stainless Steel Kitchen Knife.webp",
        category: "kitchen"
    },
    {
        id: "k017",
        name: "Stainless Steel Steamer Plate - Big Size Heavy-Duty Idli & Dum Cooking Stand",
        price: 28.50,
        description: "Heavy-duty big size steamer plate for Idli and Dum cooking.",
        image: "images/kitchen/Stainless Steel Steamer Plate – Big Size Heavy-Duty Idli & Dum Cooking Stand.webp",
        category: "kitchen"
    },
    {
        id: "k018",
        name: "steel cutting board 01",
        price: 32.00,
        description: "Hygienic and durable stainless steel cutting board.",
        image: "images/kitchen/steel cutting board 01.webp",
        category: "kitchen"
    },
    // ==========================================
    // OUTDOOR CATEGORY
    // ==========================================
    {
        id: "o001",
        name: "Angethe Heavy-133",
        price: 45.00,
        description: "Heavy-duty outdoor heating angethe, perfect for winter nights.",
        image: "images/outdoor/Angethe Heavy.133.webp",
        category: "outdoor"
    },
    {
        id: "o002",
        name: "Angethe Heavy-134",
        price: 48.00,
        description: "Premium heavy-duty angethe for a cozy outdoor experience.",
        image: "images/outdoor/Angethe Heavy.134.webp",
        category: "outdoor"
    },
    {
        id: "o003",
        name: "BBQ Grill Black",
        price: 55.00,
        description: "Classic black BBQ grill with adjustable height and wheels.",
        image: "images/outdoor/BBQ Grill .Black.HZA-801.webp",
        category: "outdoor"
    },
    {
        id: "o004",
        name: "BBQ GRILL",
        price: 35.00,
        description: "Compact wire BBQ grill, great for quick outdoor cooking.",
        image: "images/outdoor/BBQ GRILL 30X40X70CM RF10381.webp",
        category: "outdoor"
    },
    {
        id: "o005",
        name: "BBQ Grill - Rocket",
        price: 25.00,
        description: "Portable foldable pocket BBQ grill for camping and hiking.",
        image: "images/outdoor/BBQ Grill.H10 W12 L17.5 D5 in.Rocket.webp",
        category: "outdoor"
    },
    {
        id: "o006",
        name: "Breeze Chair Black",
        price: 65.00,
        description: "Modern black breeze chair, elegant addition to your patio.",
        image: "images/outdoor/Breeze Chair Black.jpg",
        category: "outdoor"
    },
    {
        id: "o007",
        name: "Gather Chair Set",
        price: 180.00,
        description: "Comfortable rattan outdoor gather chair set with table.",
        image: "images/outdoor/Gather Chair Set.webp",
        category: "outdoor"
    },
    {
        id: "o008",
        name: "Gather L shape Sofa WT",
        price: 350.00,
        description: "Luxurious L-shaped outdoor sofa for family gatherings.",
        image: "images/outdoor/Gather L shape Sofa WT.webp",
        category: "outdoor"
    },
    {
        id: "o009",
        name: "Instant Disposable BBQ Black",
        price: 12.00,
        description: "Ready-to-use instant disposable BBQ, perfect for picnics.",
        image: "images/outdoor/Instant Disposable BBQ.Black.HZA-191.webp",
        category: "outdoor"
    },
    {
        id: "o010",
        name: "SANFORD BBQ ROTATRY GRILL",
        price: 85.00,
        description: "Sanford electric rotary BBQ grill for perfect skewers.",
        image: "images/outdoor/SANFORD BBQ ROTATRY GRILL SF5950.webp",
        category: "outdoor"
    },
    {
        id: "o011",
        name: "Summer Breeze Chair set of 2",
        price: 140.00,
        description: "Set of 2 summer breeze chairs with a matching side table.",
        image: "images/outdoor/Summar Breeze Chair set of 2.jpg",
        category: "outdoor"
    },
    {
        id: "o012",
        name: "Sunbrella Chair",
        price: 75.00,
        description: "Stylish woven sunbrella chair with a comfortable seat cushion.",
        image: "images/outdoor/Sunbrella Chair.webp",
        category: "outdoor"
    },
    {
        id: "o013",
        name: "Torrey Chair Outdoor 2",
        price: 50.00,
        description: "Sleek blue Torrey outdoor chair with metallic legs.",
        image: "images/outdoor/Torrey Chair Outdoor 2.jpg",
        category: "outdoor"
    },
    {
        id: "o014",
        name: "Torrey Chair Outdoor 3",
        price: 50.00,
        description: "Modern grey Torrey chair, ideal for gardens and balconies.",
        image: "images/outdoor/Torrey Chair Outdoor 3.jpg",
        category: "outdoor"
    },
    {
        id: "o015",
        name: "Torrey Chair Outdoor",
        price: 50.00,
        description: "Minimalist white Torrey chair, weather-resistant and durable.",
        image: "images/outdoor/Torrey Chair Outdoor.jpg",
        category: "outdoor"
    },
    {
        id: "o016",
        name: "Wooden Folding Chair with Wooden Handle - Portable Outdoor & Camping Arm Chair",
        price: 55.00,
        description: "Portable canvas and wooden folding chair for camping and outdoor relaxation.",
        image: "images/outdoor/Wooden Folding Chair with Wooden Handle – Portable Outdoor & Camping Arm Chair.webp",
        category: "outdoor"
    },
    {
        id: "t001",
        name: "2 In 1 Puzzle Game",
        price: 15.99,
        description: "Engaging 2-in-1 puzzle set to enhance cognitive skills and creativity.",
        image: "images/toys/2 In 1 Puzzle Game.webp",
        category: "toys"
    },
    {
        id: "t002",
        name: "3 In 1 Shape Sorter, Fruit Cutting & Fishing",
        price: 19.50,
        description: "Multifunctional educational toy for shape sorting, fruit cutting, and fishing fun.",
        image: "images/toys/3 In 1 Shape Sorter, Fruit Cutting & Fishing.webp",
        category: "toys"
    },
    {
        id: "t003",
        name: "21cm x 10cm Inflatable Throw and Catch Ball Set",
        price: 8.99,
        description: "Outdoor fun inflatable throw and catch ball set, perfect for active play.",
        image: "images/toys/21cm x 10cm Inflatable Throw and Catch Ball Set – Outdoor Fun Game.webp",
        category: "toys"
    },
    {
        id: "t004",
        name: "ALPHABETS PAINTED MULTICOLOUR",
        price: 12.00,
        description: "Colorful painted wooden alphabets for early learning and spelling practice.",
        image: "images/toys/ALPHABETS PAINTED MULTICOLOUR.webp",
        category: "toys"
    },
    {
        id: "t005",
        name: "ALPHABETS PLAY LIGHT BROWN",
        price: 11.50,
        description: "Classic light brown wooden alphabet letters for educational playtime.",
        image: "images/toys/ALPHABETS PLAY LIGHT BROWN.webp",
        category: "toys"
    },
    {
        id: "t006",
        name: "Animal Harness Trailer Multi 3 X 9 Inch",
        price: 14.99,
        description: "Cute animal-themed pull-along trailer toy for toddlers.",
        image: "images/toys/Animal Harness Trailer Multi 3 X 9 Inch.webp",
        category: "toys"
    },
    {
        id: "t007",
        name: "AVENGERS HERO",
        price: 18.00,
        description: "Action-packed superhero figure for fans of the Avengers.",
        image: "images/toys/AVENGERS HERO.webp",
        category: "toys"
    },
    {
        id: "t008",
        name: "BLOCKS AND THREAD GAME",
        price: 9.50,
        description: "Interactive lacing and building blocks game to develop fine motor skills.",
        image: "images/toys/BLOCKS AND THREAD GAME.webp",
        category: "toys"
    },
    {
        id: "t009",
        name: "BLOCKS BUILDING GAME",
        price: 22.00,
        description: "Classic building blocks set for endless creative construction fun.",
        image: "images/toys/BLOCKS BUILDING GAME.webp",
        category: "toys"
    },
    {
        id: "t010",
        name: "CARTWHEEL TOY",
        price: 13.50,
        description: "Unique cartwheel-style toy with a clock face for playful learning.",
        image: "images/toys/CARTWHEEL TOY.webp",
        category: "toys"
    },
    {
        id: "t011",
        name: "FRACTION BOARD HEXAGON MULTICOLOUR",
        price: 16.00,
        description: "Educational hexagon fraction board to help kids understand math concepts visually.",
        image: "images/toys/FRACTION BOARD HEXAGON MULTICOLOUR.webp",
        category: "toys"
    },
    {
        id: "t012",
        name: "FRACTION BOARD SQUARE",
        price: 15.50,
        description: "Square fraction board for hands-on learning and geometry practice.",
        image: "images/toys/FRACTION BOARD SQUARE.webp",
        category: "toys"
    },
    {
        id: "t013",
        name: "ISLAMIC SET LIGHT BROWN",
        price: 25.00,
        description: "Educational wooden Islamic learning set in a classic light brown finish.",
        image: "images/toys/ISLAMIC SET LIGHT BROWN.webp",
        category: "toys"
    },
    {
        id: "t014",
        name: "MARIO FIGURE",
        price: 10.99,
        description: "Collectible Mario figure for gaming fans and imaginative play.",
        image: "images/toys/MARIO FIGURE.webp",
        category: "toys"
    },
    {
        id: "t015",
        name: "PLANE BUMP",
        price: 14.00,
        description: "Exciting 'bump and go' plane toy that children will love.",
        image: "images/toys/PLANE BUMP.webp",
        category: "toys"
    },
    {
        id: "t016",
        name: "STUFFED HORSE",
        price: 20.00,
        description: "Soft and huggable plush horse, perfect for young animal lovers.",
        image: "images/toys/STUFFED HORSE.webp",
        category: "toys"
    },
    {
        id: "t017",
        name: "STUFFED TOYS BLACK",
        price: 17.50,
        description: "Adorable soft black plush toy, ideal for cuddling and bedtime.",
        image: "images/toys/STUFFED TOYS BLACK.webp",
        category: "toys"
    },
    {
        id: "t018",
        name: "STUFFED TOYS GREY",
        price: 17.50,
        description: "Cute and soft grey plush toy with a friendly design.",
        image: "images/toys/STUFFED TOYS GREY.webp",
        category: "toys"
    },
    {
        id: "t019",
        name: "WOODEN LOADER LIGHT BROWN",
        price: 28.00,
        description: "Durable wooden toy loader for little builders and construction enthusiasts.",
        image: "images/toys/WOODEN LOADER LIGHT BROWN.webp",
        category: "toys"
    },
    // ==========================================
// BOOKS CATEGORY
// ==========================================
    {
        id: "b001",
        name: "Alice's Adventures in Wonderland",
        price: 9.99,
        description: "A timeless fantasy classic about Alice's journey through a whimsical wonderland.",
        image: "images/books/Alices Adventures in Wonderland.webp",
        category: "books"
    },
    {
        id: "b002",
        name: "Jane Eyre",
        price: 12.50,
        description: "A powerful Gothic novel exploring the life and struggles of the resilient Jane Eyre.",
        image: "images/books/Jane Eyre.webp",
        category: "books"
    },
    {
        id: "b003",
        name: "The Street Garden",
        price: 10.99,
        description: "A heartwarming story of friendship and nature set in a beautiful, hidden garden.",
        image: "images/books/the  street garden.webp",
        category: "books"
    },
    {
        id: "b004",
        name: "The Hound of the Baskervilles",
        price: 11.00,
        description: "A gripping Sherlock Holmes mystery filled with suspense and intrigue on the English moors.",
        image: "images/books/the hound of the baskervilles.webp",
        category: "books"
    },
    {
        id: "b005",
        name: "The Railway Children",
        price: 9.50,
        description: "A beloved children's classic about a family adapting to life near a railway station.",
        image: "images/books/The Railway Children.webp",
        category: "books"
    },
    {
        id: "b006",
        name: "The Ramadan Cookbook",
        price: 15.00,
        description: "A collection of delicious and healthy recipes perfect for Suhoor and Iftar.",
        image: "images/books/THE RAMADAN COOKBOOK.webp",
        category: "books"
    },
    // ==========================================
// HOME CATEGORY
// ==========================================
    {
        id: "h001",
        name: "3 Tier Rolling Laundry Basket",
        price: 35.00,
        description: "Multi-level grey storage organizer with wheels for easy laundry movement.",
        image: "images/home/3 Tier Rolling Laundry Basket – Multi-Level Storage Organizer with Wheels (Grey).webp",
        category: "home"
    },
    {
        id: "h002",
        name: "Antique Wooden Pot with Lid",
        price: 25.00,
        description: "Handcrafted wooden storage and décor vessel with a 7.5-inch diameter.",
        image: "images/home/Antique Wooden Pot with Lid Handcrafted Storage & Décor Vessel – 7.5 Inch Diameter.webp",
        category: "home"
    },
    {
        id: "h003",
        name: "Rotating Handbag Organizer",
        price: 12.00,
        description: "Space-saving bag holder to keep your handbags organized in the closet.",
        image: "images/home/Bag Holder – Rotating Handbag Organizer for Wardrobe & Closet.webp",
        category: "home"
    },
    {
        id: "h004",
        name: "Crystal LED Candle Lotus Lamp",
        price: 18.00,
        description: "Beautiful crystal lotus lamp with LED lighting for a peaceful ambiance.",
        image: "images/home/Crystal LED Candle Lotus Lamp.webp",
        category: "home"
    },
    {
        id: "h005",
        name: "Handcrafted Blue Pottery Cylinder Vase",
        price: 22.00,
        description: "Small 10-inch handcrafted blue pottery vase for elegant home decor.",
        image: "images/home/Handcrafted Blue Pottery Cylinder Vase – Small (10″ Height).webp",
        category: "home"
    },
    {
        id: "h006",
        name: "Handcrafted Ceramic Floral Vase",
        price: 28.00,
        description: "Beautiful 11-inch ceramic vase featuring intricate floral designs.",
        image: "images/home/Handcrafted Ceramic Floral Vase – 11 Inch Height.webp",
        category: "home"
    },
    {
        id: "h007",
        name: "Imperial Necessities Organizer",
        price: 20.00,
        description: "Multi-compartment cosmetic and vanity storage box with a convenient drawer.",
        image: "images/home/Imperial Necessities Organizer – Multi-Compartment Cosmetic & Vanity Storage Box with Drawer.webp",
        category: "home"
    },
    {
        id: "h008",
        name: "LED Flower Lamp",
        price: 15.00,
        description: "Decorative LED flower lamp perfect for adding soft, warm lighting to your room.",
        image: "images/home/LED Flower Lamp – Decorative.webp",
        category: "home"
    },
    {
        id: "h009",
        name: "Mini Bubble LED Candle",
        price: 8.00,
        description: "Trendy bubble-shaped LED candle for a modern and aesthetic home touch.",
        image: "images/home/Mini Bubble LED Candle.webp",
        category: "home"
    },
    {
        id: "h010",
        name: "Natural Round Mirror",
        price: 30.00,
        description: "11.5 x 11.5 inch wall mirror featuring a stylish handwoven beaded frame.",
        image: "images/home/Natural Round Mirror 11.5 x 11.5 Inch Handwoven Beaded Frame.webp",
        category: "home"
    },
    {
        id: "h011",
        name: "Navy Leaf Texture Vase",
        price: 26.00,
        description: "Elegant 11.5-inch vase with a sophisticated navy leaf texture design.",
        image: "images/home/Navy Leaf Texture Vase (11.5″ Height).webp",
        category: "home"
    },
    {
        id: "h012",
        name: "Plastic Jewellery Case",
        price: 14.00,
        description: "Transparent multi-compartment organizer to keep your jewellery neat and tidy.",
        image: "images/home/Plastic Jewellery Case – Transparent Multi-Compartment Organizer.webp",
        category: "home"
    },
    {
        id: "h013",
        name: "Rotating Cosmetic Organizer",
        price: 19.00,
        description: "360-degree rotating makeup brush holder with a dust-proof cover.",
        image: "images/home/Rotating Cosmetic Organizer – Makeup Brush Holder with Dust-Proof Cover.webp",
        category: "home"
    },
    {
        id: "h014",
        name: "Silicone Cat LED Lamp",
        price: 12.00,
        description: "Adorable silicone cat-shaped LED lamp that gives off a gentle glow.",
        image: "images/home/Silicone Cat LED Lamp.webp",
        category: "home"
    },
    {
        id: "h015",
        name: "Sunshine Table Lamp Black",
        price: 40.00,
        description: "Modern black table lamp with a sleek 23 x 15 design.",
        image: "images/home/Sunshine Table Lamp Black 23 x 15.webp",
        category: "home"
    },
    {
        id: "h016",
        name: "Winkle Table Lamp",
        price: 35.00,
        description: "Minimalist and stylish Winkle table lamp for contemporary spaces.",
        image: "images/home/Winkle Table Lamp.jpg",
        category: "home"
    },
    {
        id: "h017",
        name: "Woodgrain Harvest Basket",
        price: 22.00,
        description: "Handcrafted wooden harvest bowl with a 10.5-inch diameter.",
        image: "images/home/Woodgrain Harvest Basket Handcrafted Wooden Bowl – 10.5 Inch Diameter.webp",
        category: "home"
    },
    {
        id: "h018",
        name: "Floral Tissue Holder",
        price: 10.00,
        description: "Decorative tissue holder with a floral pattern to brighten your home.",
        image: "images/home/Floral Tissue Holder.webp",
        category: "home"
    }
]
