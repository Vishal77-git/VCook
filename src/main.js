// Mock Data
const INITIAL_RECIPES = [
  {
    id: "1",
    title: "Leftover Rice Vegetable Cutlets",
    image: "assets/recipe_images/leftover_rice_cutlets.jpg",
    prepTime: "10m",
    cookTime: "15m",
    servings: 3,
    category: "Zero Waste",
    rating: 4.8,
    author: {
      name: "Elena Bloom",
      avatar: "assets/author_images/elena_bloom.jpg",
    },
    nutrition: {
      calories: "180 kcal",
      fiber: "3g",
      protein: "4g",
      vitaminA: "12%",
    },
    ingredients: [
      "2 Cups leftover cooked rice",
      "1 Boiled potato (mashed)",
      "1/2 Cup chopped leftover vegetables",
      "1 tsp ginger-garlic paste",
      "1/2 tsp garam masala",
      "Salt to taste",
      "Chili powder to taste",
      "Bread crumbs (optional)",
      "Oil for frying",
    ],
    instructions: [
      "Mix rice, potato and vegetables in a bowl.",
      "Add spices and mash everything together.",
      "Shape the mixture into small patties.",
      "Coat patties with breadcrumbs if using.",
      "Shallow fry until golden brown and crispy.",
    ],
  },

  {
    id: "2",
    title: "Roti Noodles",
    image: "assets/recipe_images/roti_noodles.webp",
    prepTime: "5m",
    cookTime: "10m",
    servings: 2,
    category: "Lunch",
    rating: 4.6,
    author: {
      name: "Jin-Soo Park",
      avatar: "assets/author_images/jinsoo_park.jpg",
    },
    nutrition: {
      calories: "220 kcal",
      fiber: "4g",
      protein: "6g",
      vitaminA: "15%",
    },
    ingredients: [
      "3 Leftover rotis",
      "1/2 Cup leftover vegetables or sabzi",
      "1 Sliced onion",
      "1 tsp soy sauce (optional)",
      "Chili sauce or green chutney",
      "Salt to taste",
      "Pepper to taste",
      "Oil",
    ],
    instructions: [
      "Cut rotis into thin strips.",
      "Heat oil and sauté onions.",
      "Add leftover vegetables and cook briefly.",
      "Add roti strips and toss well.",
      "Add sauces and spices and stir fry for a few minutes.",
    ],
  },

  {
    id: "3",
    title: "Curd Rice with Tempering",
    image: "assets/recipe_images/curd_rice.jpg",
    prepTime: "5m",
    cookTime: "5m",
    servings: 2,
    category: "Lunch",
    rating: 4.7,
    author: {
      name: "Marco Rossi",
      avatar: "assets/author_images/marco_rossi.jpg",
    },
    nutrition: {
      calories: "200 kcal",
      fiber: "2g",
      protein: "5g",
      vitaminA: "8%",
    },
    ingredients: [
      "2 Cups leftover rice",
      "1 Cup curd",
      "Salt to taste",
      "1 tsp mustard seeds",
      "curry leaves",
      "1 chopped green chili",
      "grated carrot (optional)",
      "pomegranate seeds (optional)",
    ],
    instructions: [
      "Mix rice and curd until creamy.",
      "Add salt and optional vegetables.",
      "Heat oil and add mustard seeds.",
      "Add curry leaves and green chili.",
      "Pour tempering over rice and mix well.",
    ],
  },

  {
    id: "4",
    title: "Dal Paratha",
    image: "assets/recipe_images/dal_paratha.jpg",
    prepTime: "15m",
    cookTime: "15m",
    servings: 3,
    category: "Breakfast",
    rating: 4.9,
    author: {
      name: "Sarah Jennings",
      avatar: "assets/author_images/sarah_jennings.jpg",
    },
    nutrition: {
      calories: "250 kcal",
      fiber: "5g",
      protein: "8g",
      vitaminA: "10%",
    },
    ingredients: [
      "1 cup thick leftover dal",
      "2 cups wheat flour",
      "salt to taste",
      "chili powder",
      "cumin powder",
      "oil or ghee",
    ],
    instructions: [
      "Mix flour, dal and spices to form a dough",
      "Divide dough into equal portions.",
      "Roll each portion into parathas.",
      "Cook on a hot tawa with oil or ghee.",
      "Flip until both sides are golden brown.",
    ],
  },

  {
    id: "5",
    title: "Mixed Sabzi Pulao",
    image: "assets/recipe_images/sabzi_pulao.jpg",
    prepTime: "5m",
    cookTime: "10m",
    servings: 3,
    category: "Dinner",
    rating: 4.5,
    author: {
      name: "Marcus Chen",
      avatar: "assets/author_images/marcus_chen.jpg",
    },
    nutrition: {
      calories: "230 kcal",
      fiber: "4g",
      protein: "5g",
      vitaminA: "18%",
    },
    ingredients: [
      "2 cups leftover rice",
      "1 cup leftover sabzi or curry",
      "1 tsp cumin seeds",
      "1 chopped onion",
      "1/2 tsp garam masala",
      "salt to taste",
      "oil",
    ],
    instructions: [
      "Heat oil and add cumin seeds.",
      "Add onions and sauté until golden.",
      "Add leftover sabzi and mix well.",
      "Add rice and spices.",
      "Cook for a few minutes until heated through.",
    ],
  },

  {
    id: "6",
    title: "Bread Upma",
    image: "assets/recipe_images/bread_upma.jpg",
    prepTime: "5m",
    cookTime: "10m",
    servings: 2,
    category: "Breakfast",
    rating: 4.6,
    author: {
      name: "Elena Bloom",
      avatar: "assets/author_images/elena_bloom.jpg",
    },
    nutrition: {
      calories: "210 kcal",
      fiber: "3g",
      protein: "5g",
      vitaminA: "14%",
    },
    ingredients: [
      "4-5 slices leftover bread",
      "1 chopped onion",
      "1 tsp mustard seeds",
      "curry leaves",
      "peanuts (optional)",
      "1/4 tsp turmeric powder",
      "chili powder to taste",
      "salt to taste",
      "oil",
    ],
    instructions: [
      "Cut bread into small pieces.",
      "Heat oil and add mustard seeds.",
      "Add curry leaves and peanuts.",
      "Add onions and sauté until soft.",
      "Add spices and bread pieces and mix well.",
    ],
  },

  {
    id: "7",
    title: "Leftover Idli Upma",
    image: "assets/recipe_images/idli_upma.jpg",
    prepTime: "5m",
    cookTime: "10m",
    servings: 2,
    category: "Breakfast",
    rating: 4.7,
    author: {
      name: "Jin-Soo Park",
      avatar: "assets/author_images/jinsoo_park.jpg",
    },
    nutrition: {
      calories: "190 kcal",
      fiber: "2g",
      protein: "5g",
      vitaminA: "9%",
    },
    ingredients: [
      "4 leftover idlis",
      "1 chopped onion",
      "1 tsp mustard seeds",
      "curry leaves",
      "1 green chili",
      "1/4 tsp turmeric powder",
      "salt to taste",
      "oil",
    ],
    instructions: [
      "Crumble the leftover idlis into small pieces.",
      "Heat oil and add mustard seeds.",
      "Add curry leaves and green chili.",
      "Add onions and sauté until soft.",
      "Add turmeric and idli pieces and mix well.",
    ],
  },

  {
    id: "8",
    title: "Vegetable Stuffed Sandwich",
    image: "assets/recipe_images/veg_sandwich.jpg",
    prepTime: "10m",
    cookTime: "5m",
    servings: 2,
    category: "Brunch",
    rating: 4.5,
    author: {
      name: "Marco Rossi",
      avatar: "assets/author_images/marco_rossi.jpg",
    },
    nutrition: {
      calories: "240 kcal",
      fiber: "4g",
      protein: "6g",
      vitaminA: "20%",
    },
    ingredients: [
      "4 slices bread",
      "1/2 cup leftover cooked vegetables",
      "2 tbsp green chutney",
      "butter",
      "salt to taste",
      "pepper to taste",
    ],
    instructions: [
      "Spread chutney and butter on bread slices.",
      "Place leftover vegetables evenly on one slice.",
      "Season with salt and pepper.",
      "Cover with another slice of bread.",
      "Toast until golden and crispy.",
    ],
  },

  {
    id: "9",
    title: "Sweet Roti Ladoo",
    image: "assets/recipe_images/roti_ladoo.jpg",
    prepTime: "10m",
    cookTime: "5m",
    servings: 3,
    category: "Dessert",
    rating: 4.8,
    author: {
      name: "Sarah Jennings",
      avatar: "assets/author_images/sarah_jennings.jpg",
    },
    nutrition: {
      calories: "210 kcal",
      fiber: "2g",
      protein: "3g",
      vitaminA: "6%",
    },
    ingredients: [
      "3 leftover rotis",
      "3 tbsp jaggery or sugar",
      "2 tbsp ghee",
      "cardamom powder",
      "chopped nuts (optional)",
    ],
    instructions: [
      "Crush rotis into a coarse powder.",
      "Heat ghee in a pan.",
      "Add jaggery and melt it.",
      "Mix in crushed roti and cardamom.",
      "Shape into small ladoos and let them cool.",
    ],
  },
];

// State
let recipes = [...INITIAL_RECIPES];
let currentView = "landing";
let selectedRecipeId = null;
let searchQuery = "";
let currentUser = null;
let registeredUsers = JSON.parse(
  localStorage.getItem("registeredUsers") || "[]",
);

// Custom Alert Logic
window.showAlert = (message) => {
  document.getElementById("custom-alert-message").textContent = message;
  document.getElementById("custom-alert-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeAlert = () => {
  document.getElementById("custom-alert-overlay").classList.remove("active");
  document.body.style.overflow = "";
};

// Icons
const icons = {
  search:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  leaf: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  check:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
  book: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  utensils:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
  activity:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  message:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  loader:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  user1:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>',
  user2:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-cog"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>',
  user3:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>',
  user4:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>',
  chef: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chef-hat"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><path d="M6 17h12"/></svg>',
};

// Components
/**
 * Generates the HTML string for a recipe card component.
 * @param {Object} recipe - The recipe data object.
 * @param {string} [variant='default'] - The layout variant ('default' or 'masonry').
 * @returns {string} The HTML string for the recipe card.
 */
function RecipeCard(recipe, variant = "default") {
  return `
                  <div class="group cursor-pointer space-y-4 flex flex-col h-full" onclick="selectRecipe('${recipe.id}')">
                    <div class="relative overflow-hidden rounded-3xl ${variant === "masonry" ? "aspect-auto" : "aspect-[4/5]"} shadow-sm group-hover:shadow-xl transition-all duration-500 shrink-0">
                      <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerpolicy="no-referrer">
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div class="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <span class="text-xs font-bold text-primary">★ ${recipe.rating}</span>
                      </div>
                    </div>
                    <div class="space-y-2 px-1 flex-1 flex flex-col">
                      <div class="flex flex-col gap-1">
                        <span class="editorial-label text-primary text-[10px] uppercase tracking-widest">${recipe.category}</span>
                        <h3 class="text-xl font-bold leading-tight group-hover:text-primary transition-colors flex-1">${recipe.title}</h3>
                      </div>
                      <div class="flex justify-between items-center mt-2">
                        <div class="flex items-center gap-2">
                          <span class="text-[10px] text-outline font-bold uppercase tracking-widest">P: ${recipe.prepTime}</span>
                          <span class="text-[10px] text-outline font-bold uppercase tracking-widest">C: ${recipe.cookTime || "---"}</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 pt-2 mt-auto">
                        <img src="${recipe.author.avatar}" class="w-6 h-6 rounded-full object-cover">
                        <span class="text-xs text-on-surface-variant">by ${recipe.author.name}</span>
                      </div>
                    </div>
                  </div>
                `;
}

// Logic
/**
 * Navigates to a specific view in the application.
 * @param {string} view - The name of the view to navigate to ('landing', 'browse', 'create', 'detail', 'login', 'register', 'about', 'profile').
 */
window.navigate = (view) => {
  if (
    ![
      "landing",
      "browse",
      "create",
      "detail",
      "login",
      "register",
      "about",
      "profile",
    ].includes(view)
  ) {
    console.warn(`Attempted to navigate to invalid view: ${view}`);
    return;
  }

  // Only allow access to Browse and Create if logged in (as per requirement "allow to the website only when the password is correct")
  // However, usually "Browse" is public. The prompt says "allow to the website only when the password is correct".
  // I'll interpret this as: Landing is public, everything else requires login.
  if (["create", "detail", "profile"].includes(view) && !currentUser) {
    const pageNames = {
      create: "Submit Recipe",
      detail: "Recipe Details",
      profile: "Profile",
    };

    if (["login", "register", "landing", "create"].includes(currentView)) {
      showAlert(`Login to ${pageNames[view] || view}`);
    }
    currentView = "login";
    // Clear login inputs when forced to login
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
    render();
    return;
  }

  if (view === "login") {
    // Clear login inputs when explicitly navigating to login
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
  }

  currentView = view;
  selectedRecipeId = null;
  render();
  window.scrollTo(0, 0);
};

/**
 * Selects a recipe and navigates to its detail view.
 * @param {string} id - The ID of the recipe to select.
 */
window.selectRecipe = (id) => {
  selectedRecipeId = id;
  currentView = "detail";
  render();
  window.scrollTo(0, 0);
};

/**
 * Handles input events from the search bar to update the search query.
 * @param {string} val - The current value of the search input.
 */
window.handleSearchInput = (val) => {
  searchQuery = val;
  if (searchQuery.trim() !== "") {
    document.getElementById("search-error").classList.add("hidden");
  }
  render();
};

/**
 * Clears the current search query and resets the search input field.
 */
window.clearSearch = () => {
  searchQuery = "";
  const homeInput = document.getElementById("home-search-input");
  if (homeInput) homeInput.value = "";
  render();
};

/**
 * Resets all active search filters.
 */
window.resetFilters = () => {
  searchQuery = "";
  render();
};

/**
 * Simulates adding a recipe to a meal plan with visual feedback on the button.
 * @param {HTMLElement} btn - The button element that was clicked.
 */
window.addToMealPlan = (btn) => {
  const originalText = btn.innerHTML;
  btn.innerHTML = `${icons.check} Added to Plan`;
  btn.classList.replace("bg-primary", "bg-secondary");
  btn.classList.replace("text-on-primary", "text-on-secondary");
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.classList.replace("bg-secondary", "bg-primary");
    btn.classList.replace("text-on-secondary", "text-on-primary");
  }, 3000);
};

/**
 * Handles the submission of the create recipe form.
 * Captures form data, creates a new recipe object, and updates the state.
 * @param {Event} e - The form submission event.
 */
window.handleCreateRecipe = (e) => {
  e.preventDefault();

  if (!currentUser) {
    navigate("login");
    return;
  }

  const formData = new FormData(e.target);
  const btn = document.getElementById("publish-btn");
  const text = document.getElementById("publish-text");
  const icon = document.getElementById("publish-icon");

  btn.disabled = true;
  text.innerText = "Publishing...";
  icon.innerHTML = icons.loader;

  setTimeout(() => {
    const selectedCategories = Array.from(formData.getAll("category"));
    const categoryString =
      selectedCategories.length > 0
        ? selectedCategories.join(", ")
        : "Zero-Waste";

    const newRecipe = {
      id: Math.random().toString(36).substring(2, 11),
      title: formData.get("title"),
      description: formData.get("instructions").substring(0, 100) + "...",
      image:
        formData.get("image") ||
        "assets/recipe_images/default_recipe_image.jpg",
      prepTime: `${formData.get("prepTime")}m`,
      cookTime: `${formData.get("cookTime")}m`,
      servings: parseInt(formData.get("servings")) || 1,
      category: categoryString,
      tags: ["Community Submission"],
      rating: 5.0,
      author: {
        name: currentUser.name,
        avatar: currentUser.profilePhoto || "assets/profile_photos/leaf.jpg",
      },
      ingredients: formData
        .get("ingredients")
        .split("\n")
        .filter((i) => i.trim()),
      instructions: formData
        .get("instructions")
        .split("\n")
        .filter((i) => i.trim()),
      nutrition: {
        calories: formData.get("calories") || "---",
        fiber: formData.get("fiber") || "---",
        protein: formData.get("protein") || "---",
        vitaminA: formData.get("vitaminA") || "---",
      },
      zeroWasteTip: "Always use your scraps!",
      userTips: [],
    };

    recipes.unshift(newRecipe);
    e.target.reset();
    btn.disabled = false;
    text.innerText = "Publish Recipe";
    icon.innerHTML = icons.send;
    currentView = "browse";
    render();
  }, 1500);
};

/**
 * Simulates an assistant search with a loading state on the button.
 */
window.handleAssistantSearch = () => {
  if (!searchQuery || searchQuery.trim() === "") {
    document.getElementById("search-error").classList.remove("hidden");
    return;
  }
  document.getElementById("search-error").classList.add("hidden");

  const btnText = document.getElementById("assistant-btn-text");
  const original = btnText.innerText;
  btnText.innerHTML = icons.loader;
  setTimeout(() => {
    btnText.innerText = original;
    render();
  }, 1000);
};

/**
 * Handles the login form submission.
 * @param {Event} e - The form submission event.
 */
window.handleLogin = (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-password").value;
  const errorEl = document.getElementById("login-error");

  const user = registeredUsers.find(
    (u) => u.email === email && u.password === pass,
  );

  if (user) {
    currentUser = user;
    errorEl.classList.add("hidden");
    // Clear inputs
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
    currentView = "browse";
    render();
  } else {
    errorEl.classList.remove("hidden");
  }
};

/**
 * Handles the registration form submission.
 * @param {Event} e - The form submission event.
 */
window.handleRegister = (e) => {
  e.preventDefault();
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const errorEl = document.getElementById("register-error");

  if (registeredUsers.find((u) => u.email === email)) {
    errorEl.classList.remove("hidden");
    return;
  }

  const newUser = { name, email, password };
  registeredUsers.push(newUser);
  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

  // Clear registration inputs
  document.getElementById("register-name").value = "";
  document.getElementById("register-email").value = "";
  document.getElementById("register-password").value = "";

  // Clear login inputs as well
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";

  // Redirect to login instead of browse
  currentView = "login";
  render();
};

/**
 * Handles user logout.
 */
window.handleLogout = () => {
  currentUser = null;
  // Clear login inputs on logout
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
  currentView = "landing";
  render();
};

/**
 * Updates the current user's profile photo.
 * @param {string} photoUrl - The URL of the selected photo.
 */
window.updateProfilePhoto = (photoUrl) => {
  if (!currentUser) return;
  currentUser.profilePhoto = photoUrl;
  // Update in registeredUsers list too
  const index = registeredUsers.findIndex((u) => u.email === currentUser.email);
  if (index !== -1) {
    registeredUsers[index].profilePhoto = photoUrl;
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  }
  render();
};

/**
 * Renders the application UI based on the current state (currentView, searchQuery, selectedRecipeId).
 * Handles view switching and dynamic content injection.
 */
function render() {
  // Hide all views
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));

  // Show current view
  const activeView = document.getElementById(`view-${currentView}`);
  if (activeView) activeView.classList.remove("hidden");

  // Update Navbar Auth Container
  const authContainer = document.getElementById("nav-auth-container");
  if (currentUser) {
    const profilePhoto =
      currentUser.profilePhoto || "assets/profile_photos/leaf.jpg";
    authContainer.innerHTML = `
                    <div class="flex items-center gap-6">
                      <div class="flex flex-col items-center cursor-pointer group" onclick="navigate('profile')">
                        <div class="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-all group-hover:scale-110">
                          <img src="${profilePhoto}" class="w-full h-full object-cover" referrerpolicy="no-referrer">
                        </div>
                        <span class="text-[10px] font-bold text-primary uppercase tracking-tighter group-hover:underline">${currentUser.name}</span>
                      </div>
                      <button onclick="handleLogout()" class="bg-primary text-on-primary px-4 py-2 rounded-xl font-bold text-xs shadow-md hover:bg-primary/90 transition-all">Logout</button>
                    </div>
                  `;
  } else {
    authContainer.innerHTML = `
                    <div class="flex items-center gap-4">
                      <button onclick="navigate('login')" class="editorial-label text-on-surface-variant hover:text-primary transition-colors">Login</button>
                      <button onclick="navigate('register')" class="bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all">Register</button>
                    </div>
                  `;
  }

  // Update Nav Active State
  ["landing", "browse", "create", "about"].forEach((view) => {
    const btn = document.getElementById(`nav-${view}`);
    if (btn) {
      if (currentView === view) {
        btn.classList.add("text-primary", "border-b-2", "border-primary/30");
        btn.classList.remove("text-on-surface-variant");
      } else {
        btn.classList.remove("text-primary", "border-b-2", "border-primary/30");
        btn.classList.add("text-on-surface-variant");
      }
    }
  });

  // Dynamic Content Injection
  if (currentView === "landing") {
    const authCta = document.getElementById("landing-auth-cta");
    if (authCta) {
      if (currentUser) {
        authCta.classList.add("hidden");
      } else {
        authCta.classList.remove("hidden");
      }
    }
  }

  if (currentView === "profile") {
    if (currentUser) {
      document.getElementById("profile-display-name").innerText =
        currentUser.name;
      document.getElementById("profile-display-email").innerText =
        currentUser.email;

      const photoSelector = document.getElementById("profile-photo-selector");
      const photos = [
        { name: "Leaf (Default)", url: "assets/profile_photos/leaf.jpg" },
        { name: "Neon Light", url: "assets/profile_photos/light.jpg" },
        { name: "Cute Cat", url: "assets/profile_photos/cute_cat.jpg" },
        { name: "Football", url: "assets/profile_photos/football.jpg" },
        {
          name: "Basketball",
          url: "assets/profile_photos/basketball.jpg",
        },
        { name: "Fresh Pizza", url: "assets/profile_photos/pizza.jpg" },
      ];

      photoSelector.innerHTML = photos
        .map(
          (photo) => `
                      <div onclick="updateProfilePhoto('${photo.url}')" class="p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center gap-3 ${currentUser.profilePhoto === photo.url || (!currentUser.profilePhoto && photo.name.includes("Default")) ? "border-primary bg-primary/5" : "border-outline-variant/10 hover:border-primary/30"}">
                        <div class="w-16 h-16 rounded-full overflow-hidden border-2 ${currentUser.profilePhoto === photo.url || (!currentUser.profilePhoto && photo.name.includes("Default")) ? "border-primary" : "border-transparent"}">
                          <img src="${photo.url}" class="w-full h-full object-cover" referrerpolicy="no-referrer">
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-widest ${currentUser.profilePhoto === photo.url || (!currentUser.profilePhoto && photo.name.includes("Default")) ? "text-primary" : "text-outline"}">${photo.name}</span>
                      </div>
                    `,
        )
        .join("");
    }
  }

  if (currentView === "browse") {
    const filtered = recipes.filter((r) => {
      const matchesSearch =
        searchQuery === "" ||
        r.ingredients.some((ing) =>
          ing.toLowerCase().includes(searchQuery.toLowerCase()),
        ) ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });

    const recipeGrid = document.getElementById("recipe-grid");
    if (recipeGrid) {
      recipeGrid.innerHTML =
        filtered.length > 0
          ? filtered.map((r) => RecipeCard(r, "default")).join("")
          : `
                      <div class="col-span-full flex flex-col items-center justify-center py-20 text-center space-y-4">
                        <div class="bg-surface-container-low p-6 rounded-full text-outline">${icons.x}</div>
                        <div class="space-y-1">
                          <h3 class="text-2xl font-bold font-headline">No matches found</h3>
                          <p class="text-on-surface-variant">Try different ingredients or keywords</p>
                        </div>
                        <button onclick="handleSearchInput(''); document.getElementById('home-search-input').value=''" class="text-primary font-bold hover:underline">Clear search</button>
                      </div>
                    `;
    }
  }

  if (currentView === "detail") {
    const recipe = recipes.find((r) => r.id === selectedRecipeId);
    if (recipe) {
      // Header
      document.getElementById("detail-header").innerHTML = `
                      <div class="lg:col-span-7 rounded-3xl overflow-hidden h-[400px] md:h-[600px] shadow-2xl">
                        <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-full object-cover" referrerpolicy="no-referrer">
                      </div>
                      <div class="lg:col-span-5 space-y-6 pb-8">
                        <span class="editorial-label text-primary">${recipe.category}</span>
                        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter leading-tight font-headline">${recipe.title}</h1>
                        <div class="flex flex-wrap gap-4">
                          <div class="bg-surface-container-low px-6 py-4 rounded-2xl flex flex-col min-w-[100px]">
                            <span class="editorial-label text-[10px] text-outline">Prep Time</span>
                            <span class="text-xl font-bold text-primary">${recipe.prepTime}</span>
                          </div>
                          <div class="bg-surface-container-low px-6 py-4 rounded-2xl flex flex-col min-w-[100px]">
                            <span class="editorial-label text-[10px] text-outline">Cook Time</span>
                            <span class="text-xl font-bold text-primary">${recipe.cookTime || "N/A"}</span>
                          </div>
                          <div class="bg-surface-container-low px-6 py-4 rounded-2xl flex flex-col min-w-[100px]">
                            <span class="editorial-label text-[10px] text-outline">Servings</span>
                            <span class="text-xl font-bold text-primary">${recipe.servings}</span>
                          </div>
                        </div>
                      </div>
                    `;

      // Ingredients
      document.getElementById("ingredients-icon").innerHTML = icons.utensils;
      document.getElementById("ingredients-list").innerHTML = recipe.ingredients
        .map(
          (ing) => `
                      <div class="flex items-center space-x-4 p-3 hover:bg-surface-container-low rounded-xl transition-all">
                        <span class="w-2 h-2 bg-primary rounded-full shrink-0"></span>
                        <span class="text-lg text-on-surface">${ing}</span>
                      </div>
                    `,
        )
        .join("");

      // Instructions
      document.getElementById("instructions-icon").innerHTML = icons.book;
      document.getElementById("instructions-list").innerHTML =
        recipe.instructions
          .map(
            (step, i) => `
                      <div class="flex gap-8">
                        <div class="shrink-0 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl font-headline shadow-lg shadow-primary/20">${i + 1}</div>
                        <div class="pt-1 space-y-3">
                          <h4 class="text-xl font-bold font-headline">Step ${i + 1}</h4>
                          <p class="text-lg text-on-surface-variant leading-relaxed">${step}</p>
                        </div>
                      </div>
                    `,
          )
          .join("");

      // Nutrition
      document.getElementById("nutrition-icon").innerHTML = icons.activity;
      document.getElementById("nutrition-list").innerHTML = Object.entries(
        recipe.nutrition,
      )
        .map(
          ([key, value]) => `
                      <div class="flex justify-between items-end border-b border-on-primary-fixed-variant/10 pb-3">
                        <span class="editorial-label text-on-primary-fixed-variant">${key}</span>
                        <span class="text-xl font-bold text-on-primary-fixed">${value}</span>
                      </div>
                    `,
        )
        .join("");
    }
  }
}

// Initial Render - Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", render);
} else {
  render();
}
