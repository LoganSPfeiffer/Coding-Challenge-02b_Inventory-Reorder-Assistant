console.log("Hello, World!");

// Variables 
let itemName = "Banana";
let unitCost = 1.35; // Cost per LB 
let currentStock = 348; // IN LBs
let reorderLevel = 250; // IN LBs
let targetStock = 450; // IN LBs
let weeklyDemand = 175; // IN LBs
let leadTimeWeeks = 2; // Supplier time taken to replenish stock (in weeks)

// inventory Metrics Calculations 

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < leadTimeWeeks) ? Math.ceil(stockDeficit) : 0 ;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < leadTimeWeeks;

// Display to Console 
