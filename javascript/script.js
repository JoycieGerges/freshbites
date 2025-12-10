const recipes = [
  {
    name: "Chicken Alfredo",
    image: "images/chicken-alfredo.png",
    description: "Creamy pasta with tender chicken and parmesan",
    prep: "10 min",
    cook: "20 min",
    servings: "3 people",
    badge1: ["Easy"],
    badge2: ["Italian"],
    rating: "4.8",
    reviews: "(310 reviews)",

    nutrition: {
      calories: "510 kcal",
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "690mg"
    },

    ingredients: [
      "200g fettuccine pasta",
      "1 cup heavy cream",
      "2 chicken breasts",
      "1/2 cup parmesan cheese",
      "2 garlic cloves",
      "Salt & pepper"
    ],

    instructions: [
      "Cook pasta until al dente.",
      "Season chicken and cook until golden.",
      "Add garlic and sauté 1 min.",
      "Add cream and simmer.",
      "Add parmesan and mix.",
      "Combine pasta and sauce."
    ],

    tips: [
      "Use fresh parmesan for better flavor.",
      "Don't overcook pasta.",
      "Add mushrooms for a twist."
    ]
  },

  {
    name: "Shrimp Fried Rice",
    image: "images/shrimp-rice.png",
    description: "Asian-style rice packed with shrimp and vegetables",
    prep: "8 min",
    cook: "15 min",
    servings: "2 people",
    badge1: ["Quick"],
    badge2: ["Asian"],
    rating: "4.6",
    reviews: "(278 reviews)",

    nutrition: {
      calories: "380 kcal",
      protein: "24g",
      carbs: "40g",
      fat: "12g",
      fiber: "5g",
      sodium: "720mg"
    },

    ingredients: [
      "1 cup cooked rice",
      "200g shrimp",
      "1 carrot",
      "1 egg",
      "Soy sauce",
      "Green onions"
    ],

    instructions: [
      "Sauté shrimp until pink.",
      "Add vegetables and cook 3 min.",
      "Add rice and mix.",
      "Push rice aside and cook the egg.",
      "Add soy sauce and mix well."
    ],

    tips: [
      "Use cold rice so it doesn’t get mushy.",
      "Add sesame oil for flavor.",
      "Don’t overcook shrimp."
    ]
  },
  {
    name: "Salmon Teriyaki",
    image: "images/salmon-teriyaki.png",
    description: "Tender salmon glazed with sweet teriyaki sauce",
    prep: "8 min",
    cook: "12 min",
    servings: "2 people",
    badge1: ["Quick"],
    badge2: ["Asian"],
    rating: "4.7",
    reviews: "(250 reviews)",

    nutrition: {
      calories: "400 kcal",
      protein: "30g",
      carbs: "25g",
      fat: "18g",
      fiber: "2g",
      sodium: "700mg"
    },

    ingredients: [
      "2 salmon fillets",
      "3 tbsp teriyaki sauce",
      "1 tsp sesame oil",
      "Green onions",
      "Sesame seeds"
    ],

    instructions: [
      "Heat sesame oil in a pan.",
      "Cook salmon skin-side down 5 min.",
      "Flip and cook 4 min more.",
      "Pour teriyaki sauce and glaze salmon.",
      "Garnish with green onions and sesame seeds."
    ],

    tips: [
      "Don’t overcook salmon.",
      "Use fresh teriyaki sauce for better flavor.",
      "Serve with steamed rice."
    ]
  },

  {
    name: "Caprese Salad",
    image: "images/caprese-salad.png",
    description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic",
    prep: "5 min",
    cook: "0 min",
    servings: "2 people",
    badge1: ["Fresh"],
    badge2: ["Italian"],
    rating: "4.6",
    reviews: "(180 reviews)",

    nutrition: {
      calories: "250 kcal",
      protein: "12g",
      carbs: "8g",
      fat: "20g",
      fiber: "2g",
      sodium: "400mg"
    },

    ingredients: [
      "2 tomatoes",
      "150g mozzarella",
      "Fresh basil leaves",
      "2 tsp olive oil",
      "1 tsp balsamic glaze",
      "Salt & pepper"
    ],

    instructions: [
      "Slice tomatoes and mozzarella.",
      "Layer with basil leaves.",
      "Drizzle olive oil and balsamic glaze.",
      "Season with salt and pepper."
    ],

    tips: [
      "Use ripe tomatoes for best taste.",
      "Serve immediately for freshness.",
      "Add a sprinkle of oregano for extra flavor."
    ]
  },

  {
    name: "Pancakes with Maple Syrup",
    image: "images/pancakes.png",
    description: "Fluffy pancakes perfect for breakfast",
    prep: "10 min",
    cook: "15 min",
    servings: "3 people",
    badge1: ["Breakfast"],
    badge2: ["Sweet"],
    rating: "4.8",
    reviews: "(500 reviews)",

    nutrition: {
      calories: "350 kcal",
      protein: "8g",
      carbs: "55g",
      fat: "10g",
      fiber: "2g",
      sodium: "300mg"
    },

    ingredients: [
      "1 cup flour",
      "1 cup milk",
      "1 egg",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "Maple syrup"
    ],

    instructions: [
      "Mix flour, sugar, and baking powder.",
      "Add milk and egg, whisk until smooth.",
      "Heat pan and pour batter to form pancakes.",
      "Cook until bubbles form, flip, and cook 2 min more.",
      "Serve with maple syrup."
    ],

    tips: [
      "Don’t overmix the batter.",
      "Use medium heat for even cooking.",
      "Add berries or chocolate chips for variety."
    ]
  },

  {
    name: "Chicken Caesar Salad",
    image: "images/chicken-caesar.png",
    description: "Crispy romaine lettuce with grilled chicken and creamy dressing",
    prep: "10 min",
    cook: "15 min",
    servings: "2 people",
    badge1: ["Healthy"],
    badge2: ["Salad"],
    rating: "4.7",
    reviews: "(320 reviews)",

    nutrition: {
      calories: "350 kcal",
      protein: "28g",
      carbs: "12g",
      fat: "20g",
      fiber: "3g",
      sodium: "700mg"
    },

    ingredients: [
      "2 chicken breasts",
      "1 romaine lettuce",
      "50g parmesan cheese",
      "Croutons",
      "Caesar dressing"
    ],

    instructions: [
      "Grill chicken and slice.",
      "Toss lettuce with dressing.",
      "Top with chicken, croutons, and parmesan.",
      "Serve immediately."
    ],

    tips: [
      "Use fresh lettuce for crunch.",
      "Don’t overdress the salad.",
      "Grill chicken with minimal oil for healthier option."
    ]
  },

  {
    name: "Chocolate Mug Cake",
    image: "images/mug-cake.png",
    description: "Quick and easy chocolate cake in a mug",
    prep: "5 min",
    cook: "2 min",
    servings: "1 person",
    badge1: ["Quick"],
    badge2: ["Dessert"],
    rating: "4.9",
    reviews: "(410 reviews)",

    nutrition: {
      calories: "320 kcal",
      protein: "5g",
      carbs: "45g",
      fat: "14g",
      fiber: "3g",
      sodium: "200mg"
    },

    ingredients: [
      "4 tbsp flour",
      "4 tbsp sugar",
      "2 tbsp cocoa powder",
      "3 tbsp milk",
      "1 tbsp vegetable oil",
      "1/4 tsp baking powder"
    ],

    instructions: [
      "Mix all ingredients in a mug.",
      "Microwave for 90–120 seconds.",
      "Let cool slightly and enjoy."
    ],

    tips: [
      "Do not overcook or it will dry out.",
      "Add chocolate chips for extra richness.",
      "Use a large mug to avoid overflow."
    ]
  },
  {
    name: "Classic Cheeseburger",
    image: "images/cheeseburger.png",
    description: "Juicy beef patty with melted cheese, lettuce, and tomato",
    prep: "10 min",
    cook: "15 min",
    servings: "2 people",
    badge1: ["Fast Food"],
    badge2: ["American"],
    rating: "4.8",
    reviews: "(480 reviews)",

    nutrition: {
      calories: "550 kcal",
      protein: "28g",
      carbs: "40g",
      fat: "30g",
      fiber: "3g",
      sodium: "900mg"
    },

    ingredients: [
      "2 burger buns",
      "200g ground beef",
      "2 slices cheddar cheese",
      "Lettuce",
      "Tomato slices",
      "Ketchup & mustard"
    ],

    instructions: [
      "Form beef into patties and season with salt & pepper.",
      "Grill or pan-fry patties 5–7 min per side.",
      "Toast buns lightly.",
      "Assemble burger with lettuce, tomato, cheese, and condiments.",
      "Serve hot."
    ],

    tips: [
      "Don’t press patties while cooking to keep them juicy.",
      "Use fresh lettuce and tomato for crunch.",
      "Melt the cheese slightly over the patty before serving."
    ]
  },

  {
    name: "Margherita Pizza",
    image: "images/margherita-pizza.png",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    prep: "15 min",
    cook: "12–15 min",
    servings: "2–3 people",
    badge1: ["Italian"],
    badge2: ["Vegetarian"],
    rating: "4.9",
    reviews: "(530 reviews)",

    nutrition: {
      calories: "400 kcal",
      protein: "18g",
      carbs: "50g",
      fat: "15g",
      fiber: "3g",
      sodium: "600mg"
    },

    ingredients: [
      "1 pizza base",
      "1/2 cup tomato sauce",
      "150g mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt & pepper"
    ],

    instructions: [
      "Preheat oven to 220°C (425°F).",
      "Spread tomato sauce over the pizza base.",
      "Add mozzarella and basil leaves.",
      "Drizzle olive oil and season with salt & pepper.",
      "Bake 12–15 min until crust is golden and cheese melted."
    ],

    tips: [
      "Use fresh mozzarella for best taste.",
      "Don’t overload toppings to avoid soggy pizza.",
      "Add a pinch of chili flakes for a spicy kick."
    ]
  }
];



const recipeImage = document.getElementById("recipe-image");
const recipeName = document.getElementById("recipe-name");
const recipeDescription = document.getElementById("recipe-description");
const prepTime = document.getElementById("prep-time");
const cookTime = document.getElementById("cook-time");
const servings = document.getElementById("servings");
const badgesContainer1 = document.getElementById("badges-container1");
const badgesContainer2 = document.getElementById("badges-container2");
const calories = document.getElementById("calories-value");
const protein = document.getElementById("protein-value");
const carbs = document.getElementById("carbs-value");
const fat = document.getElementById("fat-value");
const fiber = document.getElementById("fiber-value");
const sodium = document.getElementById("sodium-value");
const ratingValue = document.getElementById("rating-value");
const reviewsCount = document.getElementById("reviews-count");
const ingredientsTab = document.getElementById("ingredients");
const instructionsTab = document.getElementById("instructions-list");
const nutritionTab = document.getElementById("nutrition");
const tipsTab = document.getElementById("tips-list");
const tryBtn = document.getElementById("try-btn");



let currentRecipe = 0;

function showNextRecipe() {
  const r = recipes[currentRecipe];

  recipeImage.src = r.image;
  recipeName.textContent = r.name;
  recipeDescription.textContent = r.description;
  prepTime.textContent = r.prep;
  cookTime.textContent = r.cook;
  servings.textContent = r.servings;
  ratingValue.textContent = r.rating;
  reviewsCount.textContent = r.reviews;
  calories.textContent = r.nutrition.calories;
  protein.textContent = r.nutrition.protein;
  carbs.textContent = r.nutrition.carbs;
  fat.textContent = r.nutrition.fat;
  fiber.textContent = r.nutrition.fiber;
  sodium.textContent = r.nutrition.sodium;



  badgesContainer1.innerHTML = "";
  for (let i = 0; i < r.badge1.length; i++) {
    badgesContainer1.innerHTML += '<span class="badge badge1 rounded-3">' + r.badge1[i] + '</span>';
  }

  badgesContainer2.innerHTML = "";
  for (let i = 0; i < r.badge2.length; i++) {
    badgesContainer2.innerHTML += '<span class="badge badge2 rounded-3">' + r.badge2[i] + '</span>';
  }

  ingredientsTab.innerHTML = '<div class="p-3 p-md-4 rounded-3 ingredients-background"><ul class="list-unstyled mb-0" id="ingredients-list"></ul></div>';
  const ingredientsList = document.getElementById("ingredients-list");
  for (let i = 0; i < r.ingredients.length; i++) {
    ingredientsList.innerHTML += '<li class="d-flex align-items-start mb-3">' +
      '<div class="flex-shrink-0 rounded-background text-white rounded-circle d-flex align-items-center justify-content-center me-3 fs-6 fw-semibold">' + (i + 1) + '</div>' +
      '<span>' + r.ingredients[i] + '</span>' +
      '</li>';
  }

  instructionsTab.innerHTML = "";
  for (let i = 0; i < r.instructions.length; i++) {
    instructionsTab.innerHTML += '<div class="d-flex mb-4 align-items-start">' +
      '<div class="rounded-background2 text-white rounded-4 d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style="width:48px; height:48px;">' + (i + 1) + '</div>' +
      '<div class="flex-grow-1 ms-3"><p class="mb-0 text-secondary mt-2">' + r.instructions[i] + '</p></div>' +
      '</div>';
  }

  tipsTab.innerHTML = "";
  for (let i = 0; i < r.tips.length; i++) {
    tipsTab.innerHTML += '<div class="d-flex align-items-start p-3 bg-warning bg-opacity-10 rounded-3 border-start border-4 border-warning">' +
      '<i class="fa-solid fa-circle-check fs-4 me-3 mt-1 bgorange"></i>' +
      '<p class="text-secondary mb-0">' + r.tips[i] + '</p>' +
      '</div>';
  }

  currentRecipe++;
  if (currentRecipe >= recipes.length) {
    currentRecipe = 0;
  }
}


