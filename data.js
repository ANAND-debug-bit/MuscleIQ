const muscleData = {
chest: {
    name: "Chest",
    emoji: "💪",
exercises: [
      { name: "Flat Bench Press", sets: "4 sets × 8–10 reps", tip: "Keep your feet flat on floor, arch your back slightly" },
      { name: "Incline Dumbbell Press", sets: "3 sets × 10–12 reps", tip: "Incline should be around 30–45 degrees" },
      { name: "Cable Chest Flyes", sets: "3 sets × 12–15 reps", tip: "Focus on squeezing at the centre" },
      { name: "Push-ups", sets: "3 sets × 15–20 reps", tip: "Great finisher, keep your core tight" },
      { name: "Decline Bench Press", sets: "3 sets × 8–10 reps", tip: "Hits the lower chest more than flat bench" },
      { name: "Dumbbell Pullover", sets: "3 sets × 12 reps", tip: "Good stretch exercise for the chest" }
],
foods: [
      { name: "Chicken Breast", benefit: "High protein, low fat — muscle repair essential", serving: "150–200g per meal", img: "food/chicken-breast.jpg" },
      { name: "Eggs", benefit: "Complete protein with healthy fats", serving: "3–4 whole eggs daily", img: "food/eggs.jpg" },
      { name: "Greek Yogurt", benefit: "Casein protein — slow digesting, great before bed", serving: "1 cup daily", img: "food/greek-yogurt.jpg" },
      { name: "Cottage Cheese", benefit: "High in casein protein", serving: "Half cup as a snack", img: "food/cottage-cheese.jpg" },
      { name: "Whey Protein", benefit: "Fast absorbing post-workout", serving: "1 scoop after workout", img: "food/whey-protein.jpg" },
      { name: "Quinoa", benefit: "Complete amino acid profile for muscle building", serving: "Half cup cooked", img: "food/quinoa.jpg" }
]
},

back: {
    name: "Back (Lats)",
emoji: "🏋️",
exercises: [
      { name: "Pull-ups / Chin-ups", sets: "4 sets × 6–10 reps", tip: "If you can't do them yet, use an assisted machine" },
      { name: "Barbell Deadlift", sets: "4 sets × 5–6 reps", tip: "Most important exercise — keep back straight, hinge at hips" },
      { name: "Lat Pulldown", sets: "4 sets × 10–12 reps", tip: "Pull to your upper chest, not behind neck" },
      { name: "Seated Cable Row", sets: "3 sets × 10–12 reps", tip: "Squeeze shoulder blades together at the end" },
      { name: "Single Arm Dumbbell Row", sets: "3 sets × 10–12 each side", tip: "Brace on a bench, pull the elbow back" },
      { name: "T-Bar Row", sets: "3 sets × 10 reps", tip: "Great for building thickness in the mid back" }
],
foods: [
      { name: "Salmon", benefit: "Omega-3s reduce muscle soreness, high protein", serving: "150g, 2–3x per week", img: "food/salmon.jpg" },
      { name: "Lean Beef", benefit: "Rich in creatine naturally + iron + zinc", serving: "100–150g per meal", img: "food/lean-beef.jpg" },
      { name: "Lentils", benefit: "Plant protein + iron for oxygen delivery to muscles", serving: "1 cup cooked", img: "food/lentils.jpg" },
      { name: "Brown Rice", benefit: "Sustained energy for heavy lifts", serving: "Half to 1 cup cooked", img: "food/brown-rice.jpg" },
      { name: "Spinach", benefit: "Magnesium supports muscle contraction", serving: "1–2 cups daily", img: "food/spinach.jpg" },
      { name: "Tuna", benefit: "Lean protein, high bioavailability", serving: "1 can (140g)", img: "food/tuna.jpg" }
]
},

shoulders: {
    name: "Shoulders",
    emoji: "🔥",
    exercises: [
      { name: "Overhead Press (Barbell)", sets: "4 sets × 8–10 reps", tip: "Use a slightly narrower grip, press straight up" },
      { name: "Dumbbell Lateral Raises", sets: "4 sets × 12–15 reps", tip: "Slight bend in elbow, don't swing" },
      { name: "Front Dumbbell Raise", sets: "3 sets × 12 reps", tip: "Alternate arms, don't raise above shoulder height" },
      { name: "Rear Delt Fly", sets: "3 sets × 15 reps", tip: "Lean forward, squeeze rear delts at top" },
      { name: "Arnold Press", sets: "3 sets × 10–12 reps", tip: "Rotate the dumbbells as you press up" },
      { name: "Face Pulls", sets: "3 sets × 15 reps", tip: "Great for rear delt health and posture" }
],
    foods: [
      { name: "Turkey Breast", benefit: "High protein, very lean meat", serving: "150g per meal", img: "food/turkey-breast.jpg" },
      { name: "Almonds", benefit: "Vitamin E for muscle recovery + healthy fats", serving: "A small handful daily", img: "food/almonds.jpg" },
      { name: "Sweet Potato", benefit: "Clean carbs for energy during shoulder workouts", serving: "1 medium potato", img: "food/sweet-potato.jpg" },
      { name: "Pumpkin Seeds", benefit: "Zinc supports testosterone and muscle repair", serving: "2 tablespoons", img: "food/pumpkin-seeds.jpg" },
      { name: "Milk", benefit: "Casein + whey combination, great post-workout", serving: "1–2 glasses daily", img: "food/milk.jpg" },
      { name: "Edamame", benefit: "Plant protein with all essential amino acids", serving: "Half cup", img: "food/edamame.jpg" }
]
},

biceps: {
    name: "Biceps",
emoji: "💪",
exercises: [
      { name: "Barbell Curl", sets: "4 sets × 10–12 reps", tip: "Don't swing your body, keep elbows at your sides" },
      { name: "Dumbbell Hammer Curl", sets: "3 sets × 12 reps", tip: "Neutral grip — also works the brachialis under the bicep" },
      { name: "Incline Dumbbell Curl", sets: "3 sets × 10 reps", tip: "Great stretch — best done on an incline bench" },
      { name: "Concentration Curl", sets: "3 sets × 12 each arm", tip: "Sit down, brace elbow on thigh, full range of motion" },
      { name: "Cable Curl", sets: "3 sets × 15 reps", tip: "Constant tension throughout the movement" },
      { name: "Preacher Curl", sets: "3 sets × 10 reps", tip: "Machine or EZ bar — locks your arms in place" }
],
foods: [
    { name: "Eggs (whole)", benefit: "Leucine triggers muscle protein synthesis", serving: "3–4 per day", img: "food/eggs.jpg" },
      { name: "Whey Protein Shake", benefit: "Fast absorbing, ideal 30 mins after workout", serving: "1 scoop with water or milk", img: "food/whey-protein-shake.jpg" },
      { name: "Chicken Breast", benefit: "Lean protein staple for muscle growth", serving: "150–200g per meal", img: "food/chicken-breast.jpg" },
      { name: "Banana", benefit: "Quick carbs to fuel your workout", serving: "1 before workout", img: "food/banana.jpg" },
      { name: "Peanut Butter", benefit: "Protein + healthy fats for steady energy", serving: "2 tablespoons", img: "food/peanut-butter.jpg" },
      { name: "Tofu (firm)", benefit: "Complete plant protein option", serving: "100g cooked", img: "food/tofu.jpg" }
]
},

triceps: {
name: "Triceps",
emoji: "💪",
     exercises: [
      { name: "Close Grip Bench Press", sets: "4 sets × 8–10 reps", tip: "Hands shoulder width apart, keep elbows tucked" },
      { name: "Skull Crushers (EZ Bar)", sets: "3 sets × 10–12 reps", tip: "Lower bar to forehead, extend straight up" },
      { name: "Tricep Pushdown (Cable)", sets: "4 sets × 12–15 reps", tip: "Keep elbows tight to body, fully extend at bottom" },
      { name: "Overhead Tricep Extension", sets: "3 sets × 12 reps", tip: "Great stretch for the long head of the tricep" },
      { name: "Dips", sets: "3 sets × 10–15 reps", tip: "Lean forward less to shift focus to triceps" },
      { name: "Diamond Push-ups", sets: "3 sets × 12–15 reps", tip: "No equipment needed — hands form a diamond shape" }
],
foods: [
{ name: "Cottage Cheese", benefit: "Slow digesting casein — good before bed", serving: "Half cup", img: "food/cottage-cheese.jpg" },
      { name: "Greek Yogurt", benefit: "High protein, gut friendly", serving: "1 cup daily", img: "food/greek-yogurt.jpg" },
      { name: "Lean Ground Turkey", benefit: "High protein, low saturated fat", serving: "150g per meal", img: "food/lean-ground-turkey.jpg" },
      { name: "Oats", benefit: "Complex carbs for sustained energy during training", serving: "Half cup dry", img: "food/oats.jpg" },
      { name: "Almonds", benefit: "Healthy fat + protein combo for recovery", serving: "Small handful", img: "food/almonds.jpg" },
      { name: "Beans (black/kidney)", benefit: "Protein + fiber combo, good for plant-based diets", serving: "Half cup cooked", img: "food/beans.jpg" }
]
},

abs: {
name: "Abs / Core",
emoji: "🔥",
exercises: [
      { name: "Crunches", sets: "4 sets × 20 reps", tip: "Don't pull on your neck, focus on contracting abs" },
      { name: "Plank", sets: "3 sets × 45–60 sec hold", tip: "Keep hips level, don't let them sag down" },
      { name: "Leg Raises (lying)", sets: "3 sets × 15 reps", tip: "Lower legs slow and controlled" },
      { name: "Russian Twists", sets: "3 sets × 20 reps", tip: "Lift feet slightly off ground for harder version" },
      { name: "Cable Crunches", sets: "3 sets × 15 reps", tip: "Round your back to crunch fully, don't just bend forward" },
      { name: "Mountain Climbers", sets: "3 sets × 30 sec", tip: "Keep hips down, drive knees to chest fast" }
],
foods: [
      { name: "Eggs", benefit: "Protein for muscle repair plus healthy fats", serving: "3–4 daily", img: "food/eggs.jpg" },
      { name: "Avocado", benefit: "Healthy monounsaturated fats reduce belly fat", serving: "Half avocado daily", img: "food/avocado.jpg" },
      { name: "Green Tea", benefit: "Boosts metabolism, helps with fat loss", serving: "2–3 cups daily", img: "food/chicken-breast.jpg" },
      { name: "Leafy Greens (Spinach, Kale)", benefit: "Low calorie, high volume, helps with body composition", serving: "2 cups daily", img: "food/spinach.jpg" },
      { name: "Apple Cider Vinegar", benefit: "May help reduce fat storage", serving: "1 tsp in water before meals", img: "food/apple-cider-vinegar.jpg" },
      { name: "Ginger", benefit: "Anti-inflammatory, supports digestion", serving: "Fresh in food or tea", img: "food/ginger.jpg" }
]
},

quads: {
name: "Quads",
emoji: "🦵",
exercises: [
      { name: "Barbell Back Squat", sets: "4 sets × 8–10 reps", tip: "King of all leg exercises — go below parallel" },
      { name: "Leg Press", sets: "4 sets × 10–12 reps", tip: "Don't lock your knees at the top" },
      { name: "Lunges (Walking or Static)", sets: "3 sets × 12 each leg", tip: "Keep front knee over toe, don't lean forward too much" },
      { name: "Leg Extension Machine", sets: "3 sets × 15 reps", tip: "Isolation exercise — great as a finisher" },
      { name: "Bulgarian Split Squat", sets: "3 sets × 10 each leg", tip: "Hardest but most effective single leg exercise" },
      { name: "Hack Squat", sets: "3 sets × 10–12 reps", tip: "Great if back squats bother your lower back" }
],
foods: [
      { name: "Pasta (whole wheat)", benefit: "Complex carbs for high energy leg workouts", serving: "1 cup cooked", img: "food/pasta.jpg" },
      { name: "Brown Rice", benefit: "Sustained carb source for glycogen replenishment", serving: "1 cup cooked", img: "food/brown-rice.jpg" },
      { name: "Chicken Thighs", benefit: "More fat than breast — good for high calorie needs", serving: "150g cooked", img: "food/chicken-thighs.jpg" },
      { name: "Potatoes (baked/boiled)", benefit: "High potassium — prevents leg cramps", serving: "1 medium potato", img: "food/potatoes.jpg" },
      { name: "Milk", benefit: "Protein + calcium for bone and muscle health", serving: "1–2 glasses", img: "food/milk.jpg" },
      { name: "Peanut Butter on Bread", benefit: "Easy calorie dense snack pre or post workout", serving: "2 slices with 2 tbsp peanut butter", img: "food/peanut-butter.jpg" }
]
},

hamstrings: {
name: "Hamstrings",
    emoji: "🦵",
exercises: [
      { name: "Romanian Deadlift", sets: "4 sets × 8–10 reps", tip: "Hinge at hips, feel the stretch in hamstrings" },
      { name: "Leg Curl Machine", sets: "4 sets × 12 reps", tip: "Curl fully, squeeze at top for 1 second" },
      { name: "Stiff Leg Deadlift", sets: "3 sets × 10 reps", tip: "Similar to RDL but with straighter legs" },
      { name: "Good Mornings", sets: "3 sets × 12 reps", tip: "Light weight, focus on hamstring stretch" },
      { name: "Nordic Curls", sets: "3 sets × 6–8 reps", tip: "Very difficult — one of the best for hamstring strength" },
      { name: "Glute-Ham Raise", sets: "3 sets × 10 reps", tip: "If your gym has the equipment, excellent for hamstrings" }
     ],
    foods: [
      { name: "Tuna", benefit: "Lean protein for muscle recovery", serving: "1 can daily", img: "food/tuna.jpg" },
      { name: "Sweet Potato", benefit: "Replenishes glycogen after hard leg sessions", serving: "1 medium", img: "food/sweet-potato.jpg" },
      { name: "Beef (lean)", benefit: "Creatine naturally in red meat supports strength", serving: "100–150g", img: "food/beef.jpg" },
      { name: "Walnuts", benefit: "Omega-3 for reducing muscle inflammation", serving: "A small handful", img: "food/walnuts.jpg" },
      { name: "Berries (blueberry, cherry)", benefit: "Antioxidants reduce post-workout soreness", serving: "Half cup daily", img: "food/berries.jpg" },
      { name: "Whole Grain Bread", benefit: "Carbs for pre-workout fuel", serving: "2 slices", img: "food/whole-grain-bread.jpg" }
]
},



glutes: {
name: "Glutes",
emoji: "🔥",
exercises: [
      { name: "Barbell Hip Thrust", sets: "4 sets × 10–12 reps", tip: "Best glute exercise there is — drive through heels" },
      { name: "Glute Bridge (bodyweight)", sets: "3 sets × 20 reps", tip: "Great beginner version of hip thrust" },
      { name: "Sumo Deadlift", sets: "4 sets × 6–8 reps", tip: "Wide stance targets glutes more than conventional" },
      { name: "Cable Kickback", sets: "3 sets × 15 each side", tip: "Squeeze at the top of each rep" },
      { name: "Step-ups with Dumbbells", sets: "3 sets × 12 each leg", tip: "Use a box or step that puts your thigh parallel to floor" },
      { name: "Squats (wide stance)", sets: "4 sets × 12 reps", tip: "Wider stance = more glute activation" }
],
foods: [
{ name: "Salmon", benefit: "Protein + omega-3 for glute muscle growth", serving: "150g, 3x per week", img: "food/salmon.jpg" },
      { name: "Eggs", benefit: "Protein + healthy fat combination", serving: "3–4 daily", img: "food/eggs.jpg" },
      { name: "Chickpeas", benefit: "Plant-based protein and fiber", serving: "Half cup cooked", img: "food/chickpeas.jpg" },
      { name: "Quinoa", benefit: "Complete protein with all amino acids", serving: "Half cup cooked", img: "food/quinoa.jpg" },
      { name: "Lean Beef", benefit: "High protein, supports muscle mass gain", serving: "100–150g", img: "food/lean-beef.jpg" },
      { name: "Brown Rice", benefit: "Energy source for intense glute training", serving: "1 cup cooked", img: "food/brown-rice.jpg" }
]
},

calves: {
name: "Calves",
emoji: "🦵",
exercises: [
      { name: "Standing Calf Raise", sets: "5 sets × 15–20 reps", tip: "Full stretch at bottom, full squeeze at top" },
      { name: "Seated Calf Raise", sets: "4 sets × 15–20 reps", tip: "Targets soleus (deeper calf muscle)" },
      { name: "Leg Press Calf Raise", sets: "4 sets × 15 reps", tip: "Only push with your toes, keep heels off the platform" },
      { name: "Single Leg Calf Raise (bodyweight)", sets: "3 sets × 20 each", tip: "Add a step for full range of motion" },
      { name: "Jump Rope", sets: "3 rounds × 2 min", tip: "Great cardio that also builds calves" },
      { name: "Box Jumps", sets: "3 sets × 10 reps", tip: "Explosive power, also develops calf muscles" }
    ],
foods: [
      { name: "Bananas", benefit: "High potassium prevents calf cramps", serving: "1–2 daily", img: "food/banana.jpg" },
      { name: "Dairy (milk, yogurt)", benefit: "Calcium for bone density and muscle contraction", serving: "1–2 servings", img: "food/milk.jpg" },
      { name: "Spinach", benefit: "Magnesium helps prevent cramping", serving: "1–2 cups daily", img: "food/spinach.jpg" },
      { name: "Orange Juice", benefit: "Electrolytes and vitamin C", serving: "1 glass post-workout", img: "food/orange-juice.jpg" },
      { name: "Chicken Breast", benefit: "Protein for muscle repair", serving: "150–200g", img: "food/chicken-breast.jpg" },
      { name: "Nuts (cashews, almonds)", benefit: "Magnesium + healthy fats", serving: "Small handful daily", img: "food/walnuts.jpg" }
]
},

traps: {
name: "Traps",
emoji: "💪",
exercises: [
      { name: "Barbell Shrugs", sets: "4 sets × 12–15 reps", tip: "Shrug straight up, hold 1 second at top" },
      { name: "Dumbbell Shrugs", sets: "4 sets × 12–15 reps", tip: "Can rotate at top for full range of motion" },
      { name: "Barbell Upright Row", sets: "3 sets × 10–12 reps", tip: "Don't go higher than collar bone, protect shoulder" },
      { name: "Face Pulls", sets: "3 sets × 15 reps", tip: "Great for rear delts and traps together" },
      { name: "Rack Pulls", sets: "3 sets × 6–8 reps", tip: "Heavy deadlift variation that targets upper traps" },
      { name: "Farmer's Walk", sets: "3 sets × 30 meters", tip: "Heavy dumbbells or kettlebells — great for traps and grip" }
],
    foods: [
      { name: "Beef", benefit: "Creatine + protein for heavy shrug work", serving: "100–150g", img: "food/beef.jpg" },
      { name: "Eggs", benefit: "Complete protein source", serving: "3–4 daily", img: "food/eggs.jpg" },
      { name: "Milk", benefit: "Protein and calcium for muscle and bone", serving: "1–2 glasses", img: "food/milk.jpg" },
      { name: "Chicken", benefit: "Lean high protein source", serving: "150–200g", img: "food/chicken.jpg" },
      { name: "Broccoli", benefit: "Vitamins and minerals for recovery", serving: "1 cup cooked", img: "food/broccoli.jpg" },
      { name: "Oats", benefit: "Pre-workout energy for heavy lifting", serving: "Half cup dry", img: "food/oats.jpg" }
]
},

"lower-back": {
name: "Lower Back",
emoji: "🏋️",
exercises: [
      { name: "Deadlift", sets: "4 sets × 5 reps", tip: "Best lower back builder — learn form first with light weight" },
      { name: "Back Extensions (Hyperextensions)", sets: "4 sets × 15 reps", tip: "Use the machine or a ball, go slowly" },
      { name: "Good Mornings", sets: "3 sets × 12 reps", tip: "Bar on back, hinge at hips, feel the stretch" },
      { name: "Superman Hold", sets: "3 sets × 15 reps", tip: "Bodyweight, lie face down and raise arms/legs together" },
      { name: "Bird Dog", sets: "3 sets × 12 each side", tip: "On all fours, extend opposite arm and leg" },
      { name: "Reverse Hypers", sets: "3 sets × 15 reps", tip: "If available — decompresses the spine" }
],
    foods: [
      { name: "Salmon (fatty fish)", benefit: "Omega-3 reduces lower back inflammation", serving: "150g, 2–3x weekly", img: "food/salmon.jpg" },
      { name: "Turmeric", benefit: "Curcumin is a natural anti-inflammatory", serving: "Add to food or in milk", img: "food/turmeric.jpg" },
      { name: "Calcium-rich foods (milk, cheese)", benefit: "Bone density support for spine", serving: "2 servings daily", img: "food/milk.jpg" },
      { name: "Leafy Greens", benefit: "Magnesium + vitamins for muscle health", serving: "1–2 cups daily", img: "food/spinach.jpg" },
      { name: "Collagen Supplement / Bone Broth", benefit: "Supports connective tissue and spinal discs", serving: "1 cup bone broth", img: "food/bone-broth.jpg" },
      { name: "Nuts and Seeds", benefit: "Healthy fats reduce inflammation", serving: "Small handful", img: "food/walnuts.jpg" }
]
},

forearms: {
name: "Forearms",
emoji: "💪",
exercises: [
      { name: "Wrist Curls (barbell)", sets: "4 sets × 15–20 reps", tip: "Sit on bench, forearms on thighs, curl the wrist up" },
      { name: "Reverse Wrist Curls", sets: "3 sets × 15 reps", tip: "Hits the extensor muscles on top of forearm" },
      { name: "Farmer's Carry", sets: "3 sets × 30 meters", tip: "Heavy dumbbells held at sides — great forearm builder" },
      { name: "Dead Hangs", sets: "3 sets × 30–60 sec", tip: "Hang from a pull-up bar, builds grip and forearms" },
      { name: "Plate Pinch Carry", sets: "3 sets × 20 meters", tip: "Pinch two plates together and carry — awkward but effective" },
      { name: "Towel Pull-ups", sets: "3 sets × 6–8 reps", tip: "Drape towels over bar, grab and pull — brutal on forearms" }
],
foods: [
      { name: "Eggs", benefit: "Protein for muscle repair and growth", serving: "3–4 daily", img: "food/eggs.jpg" },
      { name: "Lean Meat", benefit: "High protein for small muscle development", serving: "150g per meal", img: "food/lean-meat.jpg" },
      { name: "Milk", benefit: "Protein + minerals for muscle health", serving: "1–2 glasses", img: "food/milk.jpg" },
      { name: "Almonds", benefit: "Magnesium supports nerve-muscle connections", serving: "Handful daily", img: "food/almonds.jpg" },
      { name: "Oranges", benefit: "Vitamin C for collagen (tendon health)", serving: "1–2 daily", img: "food/oranges.jpg" },
      { name: "Water", benefit: "Dehydration directly reduces grip strength", serving: "3–4 litres per day", img: "food/water.jpg" }
]
}
};
