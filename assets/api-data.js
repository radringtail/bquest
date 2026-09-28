var objectiveData = [
// ungrouped easy
{"name": "Toss a Coin in the Fountain", "difficulty": 1},
{"name": "Spend 30 Seconds in the Lavatory", "difficulty": 1},
{"name": "Draft a Donut", "difficulty": 1},
{"name": "Dig Up Nothing or 3 Junk Items", "difficulty": 1},
{"name": "Read The Red Prince Aloud", "difficulty": 1},
{"name": "Draft Both Exits from Dark Room", "difficulty": 1},
{"name": "End with a Live Animal", "difficulty": 1},
{"name": "End in Planetarium", "difficulty": 1},
{"name": "Read Newspaper Clipping", "difficulty": 1},
{"name": "Draft 2 Knights in a Day", "difficulty": 1},
{"name": "Draft 2 Terminals in a Day", "difficulty": 1},
{"name": "Gain Steps from Boudoir", "difficulty": 1},

// ungrouped medium
{"name": "Watch an Entire Alzara Cutscene", "difficulty": 2},
{"name": "Spend 3 Gems Drafting a Room", "difficulty": 2},
{"name": "Retrieve Key After Checking Overnight", "difficulty": 2},
{"name": "Permanently Increase a Room's Rarity", "difficulty": 2},
{"name": "Re-roll a Draft 4+ Times", "difficulty": 2},
{"name": "Open a Delivered Package", "difficulty": 2},
{"name": "Shelter the Lavatory", "difficulty": 2},
{"name": "Eat in Pantry, Kitchen, and Dining in a Day", "difficulty": 2},
{"name": "Draft 8 Blue Rooms in a Row in a Day", "difficulty": 2},
{"name": "Draft 2 Bishops in a Day", "difficulty": 2},
{"name": "Draft 2+ Copies of Room in a Day", "difficulty": 2},
{"name": "Draft West and East Wing Halls on Same Day", "difficulty": 2},
{"name": "Change a Room's Color", "difficulty": 2},
{"name": "Reach the Reservoir", "difficulty": 2},
{"name": "Read a Library Book Aloud", "difficulty": 2},
{"name": "Buy a Special Key", "difficulty": 2},
{"name": "Pick a Lock", "difficulty": 2},
{"name": "Draft 3 &quot;Closet&quot; Rooms in a Day", "difficulty": 2},

// ungrouped hard
{"name": "Add Mechanarium", "difficulty": 3},
{"name": "Collect Items Spread to Conference Room", "difficulty": 3},
{"name": "Have 90+ Steps", "difficulty": 3},
{"name": "Open All Doors in Great Hall", "difficulty": 3},
{"name": "Retrieve a Coin from Draining Water", "difficulty": 3},
{"name": "Draft the Cloister for Free", "difficulty": 3},
{"name": "Collect a Flower Gem", "difficulty": 3},
{"name": "Cash a Payroll Check", "difficulty": 3},
{"name": "Operate a Powered Room's Device", "difficulty": 3},
{"name": "Obtain Gear Wrench, Watering Can, or Telescope", "difficulty": 3},
{"name": "Gain Chess Power", "difficulty": 3},

// ungrouped very hard
{"name": "Enter Antechamber", "difficulty": 4},

//grouped squares (only one of each group can appear)
{"name": "End with 100+ Steps Taken", "difficulty": 1, "group": "steps"},
{"name": "End with 120+ Steps Taken", "difficulty": 2, "group": "steps"},
{"name": "Gain 25+ Steps at Once", "difficulty": 3, "group": "steps"},

{"name": "Have 30+ Rooms", "difficulty": 2, "group": "totalrooms"},
{"name": "Reach Rank 9", "difficulty": 2, "group": "totalrooms"},
{"name": "Draft a Full Wing", "difficulty": 2, "group": "totalrooms"},
{"name": "Have 35+ Rooms", "difficulty": 3, "group": "totalrooms"},
{"name": "Draft All Four Corners on Same Day", "difficulty": 3, "group": "totalrooms"},

{"name": "Eat in Dining Room 2 times", "difficulty": 2, "group": "dining"},
{"name": "Eat in Dining Room 3 times", "difficulty": 3, "group": "dining"},

{"name": "Buy Out Any Shop", "difficulty": 2, "group": "buyout"},
{"name": "Buy Out Kitchen", "difficulty": 2, "group": "buyout"},
{"name": "Buy Out Commissary", "difficulty": 3, "group": "buyout"},
{"name": "Buy a Showroom Item", "difficulty": 3, "group": "buyout"},

{"name": "30+ Coins", "difficulty": 2, "group": "coins"},
{"name": "40+ Coins", "difficulty": 3, "group": "coins"},

{"name": "10+ Gems", "difficulty": 2, "group": "gems"},
{"name": "15+ Gems", "difficulty": 3, "group": "gems"},

{"name": "8+ Keys", "difficulty": 2, "group": "keys"},
{"name": "12+ Keys", "difficulty": 3, "group": "keys"},

{"name": "3+ Dice", "difficulty": 2, "group": "dice"},
{"name": "4+ Dice", "difficulty": 3, "group": "dice"},

{"name": "5+ Keys, Gems, Coins Each", "difficulty": 2, "group": "basics"},
{"name": "7+ Keys, Gems, Coins Each", "difficulty": 3, "group": "basics"},

{"name": "Eat Salted Food", "difficulty": 2, "group": "food"},
{"name": "Gain 16+ Steps from One Kitchen Purchase", "difficulty": 2, "group": "food"},
{"name": "Gain 21+ Steps in Dining Room", "difficulty": 2, "group": "food"},

{"name": "3+ Allowance", "difficulty": 2, "group": "allowance"},
{"name": "4+ Allowance", "difficulty": 2, "group": "allowance"},
{"name": "5+ Allowance", "difficulty": 3, "group": "allowance"},
{"name": "6+ Allowance", "difficulty": 3, "group": "allowance"},
{"name": "7+ Allowance", "difficulty": 4, "group": "allowance"},

{"name": "4+ Stars", "difficulty": 2, "group": "stars"},
{"name": "8+ Stars", "difficulty": 3, "group": "stars"},
{"name": "12+ Stars", "difficulty": 4, "group": "stars"},

{"name": "Fail 1 Parlor", "difficulty": 1, "group": "parlor"},
{"name": "Solve 2 Parlors", "difficulty": 1, "group": "parlor"},
{"name": "Solve 3 Parlors", "difficulty": 2, "group": "parlor"},
{"name": "Solve 4 Parlors", "difficulty": 2, "group": "parlor"},

{"name": "Solve 2 Dartboards", "difficulty": 1, "group": "billiard"},
{"name": "Solve 3 Dartboards", "difficulty": 2, "group": "billiard"},
{"name": "Solve 4 Dartboards", "difficulty": 3, "group": "billiard"},

{"name": "Trigger Experiment 2x in a Day", "difficulty": 2, "group": "experiment"},
{"name": "Trigger Experiment 4x in a Day", "difficulty": 3, "group": "experiment"},

{"name": "8+ Inventory Items", "difficulty": 2, "group": "inventory"},
{"name": "10+ Inventory Items", "difficulty": 2, "group": "inventory"},

{"name": "Use 3 Upgrade Disks", "difficulty": 2, "group": "disks"},
{"name": "Use 4 Upgrade Disks", "difficulty": 3, "group": "disks"},
{"name": "Use 5 Upgrade Disks", "difficulty": 4, "group": "disks"},

{"name": "2 Safes in a Day", "difficulty": 1, "group": "safes"},
{"name": "3 Safes in a Day", "difficulty": 2, "group": "safes"},
{"name": "4 Safes in a Day", "difficulty": 3, "group": "safes"},
{"name": "3 Red Letters", "difficulty": 1, "group": "safes"},
{"name": "4 Red Letters", "difficulty": 2, "group": "safes"},
{"name": "5 Red Letters", "difficulty": 3, "group": "safes"},

{"name": "Open 2 Trunks in a Day", "difficulty": 2, "group": "trunks"},
{"name": "Open the Car Trunk", "difficulty": 2, "group": "trunks"},

{"name": "Open 2 Security Doors in a Day", "difficulty": 1, "group": "security"},
{"name": "Open 4 Security Doors in a Day", "difficulty": 2, "group": "security"},
{"name": "Draft a Room with 2+ Security Doors", "difficulty": 2, "group": "security"},

{"name": "Draft 3 Archived Floorplans in a Day", "difficulty": 2, "group": "archived"},
{"name": "Draft 4 Archived Floorplans in a Day", "difficulty": 2, "group": "archived"},
{"name": "Draft 5 Archived Floorplans in a Day", "difficulty": 3, "group": "archived"},
{"name": "Draft 6 Archived Floorplans in a Day", "difficulty": 3, "group": "archived"},

{"name": "Open 3 Lockers in a Day", "difficulty": 2, "group": "lockers"},
{"name": "Open 5 Lockers in a Day", "difficulty": 3, "group": "lockers"},
{"name": "Draft Locker, Sauna, Pump Rooms in a Day", "difficulty": 3, "group": "lockers"},

{"name": "End with 8+ Dead Ends", "difficulty": 1, "group": "dead_ends"},
{"name": "End with 10+ Dead Ends", "difficulty": 2, "group": "dead_ends"},
{"name": "End with 12+ Dead Ends", "difficulty": 3, "group": "dead_ends"},

{"name": "Draft a Hallway from Another Hallway", "difficulty": "1", "group": "rooms"},
{"name": "Draft 6 Red Rooms in a Day", "difficulty": 2, "group": "rooms"},
{"name": "Draft 7 Bedrooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 6 Green Rooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 6 Hallways in a Day", "difficulty": 3, "group": "rooms"},

{"name": "Draft an Architect's House", "difficulty": 2, "group": "titles"},
{"name": "Draft Shrine, Chapel and Cloister on Same Day", "difficulty": 3, "group": "titles"},

{"name": "1 Full Directory Category", "difficulty": 2, "group": "full_dir"},
{"name": "Full Directory of Red Rooms", "difficulty": 2, "group": "full_dir"},
{"name": "Full Directory of Hallways", "difficulty": 3, "group": "full_dir"},
{"name": "2 Full Directory Categories", "difficulty": 4, "group": "full_dir"},

{"name": "Add 2 New Floorplans", "difficulty": 1, "group": "new_plan"},
{"name": "Add 3 New Floorplans", "difficulty": 3, "group": "new_plan"},
{"name": "Add 4 New Floorplans", "difficulty": 4, "group": "new_plan"},

{"name": "Attend Grade 3", "difficulty": 2, "group": "classroom"},
{"name": "Attend Grade 4", "difficulty": 3, "group": "classroom"},
{"name": "Attend Grade 5", "difficulty": 4, "group": "classroom"},

{"name": "Become Cursed", "difficulty": 2, "group": "shrine"},
{"name": "Rotate a Room", "difficulty": 2, "group": "shrine"},

{"name": "Dig 10x in a Day", "difficulty": 2, "group": "dig"},
{"name": "Dig 15x in a Day", "difficulty": 3, "group": "dig"},

{"name": "View Fine Print", "difficulty": 2, "group": "magnifying_glass"},
{"name": "View Stamp(s) in the Library", "difficulty": 3, "group": "magnifying_glass"},

{"name": "Non-Outer Room Outside", "difficulty": 3, "group": "shrine_outer"},
{"name": "Pick 3 Berries", "difficulty": 3, "group": "shrine_outer"},

{"name": "Use an Elevator", "difficulty": 2, "group": "flames"},
{"name": "Light 4 Blue Flames", "difficulty": 2, "group": "flames"},

{"name": "Pull Antechamber Lever", "difficulty": 2, "group": "levers"},
{"name": "Pull 2 Unique Levers", "difficulty": 3, "group": "levers"},
{"name": "Pull 3 Unique Levers", "difficulty": 4, "group": "levers"},

{"name": "Have 2 Microchips", "difficulty": 1, "group": "microchip"},
{"name": "Trade a Microchip", "difficulty": 2, "group": "microchip"},

{"name": "Make a Contraption", "difficulty": 3, "group": "contraption"},
{"name": "Make 3 Unique Contraptions", "difficulty": 4, "group": "contraption"},
];

var objectiveDataHard = [
// ungrouped
{"name": "Draft 2 Dead Ends from Entrance Hall", "difficulty": "1"},
{"name": "Spend 30 Seconds in the Lavatory", "difficulty": "1"},
{"name": "Draft Both Exits from Dark Room", "difficulty": "1"},
{"name": "End with a Live Animal", "difficulty": "1"},
{"name": "End in Planetarium", "difficulty": "1"},
{"name": "Read Newspaper Clipping", "difficulty": "1"},
{"name": "Trade a Microchip", "difficulty": "1"},
{"name": "Re-roll a Draft 4+ Times", "difficulty": "1"},
{"name": "Open a Delivered Package", "difficulty": "1"},
{"name": "Open Tomb Door to Reservoir", "difficulty": "1"},
{"name": "Open 2 Trunks in a Day", "difficulty": "1"},
{"name": "Draft 8 Blue Rooms in a Row", "difficulty": "1"},

{"name": "Draft 2 Bishops in a Day", "difficulty": "2"},
{"name": "Permanently Increase a Room's Rarity", "difficulty": "2"},
{"name": "Draft 2+ Copies of Room in a Day", "difficulty": "2"},
{"name": "Draft West and East Wing Halls on Same Day", "difficulty": "2"},
{"name": "Read Swim Bird", "difficulty": "2"},
{"name": "Eat Salted Food", "difficulty": "2"},
{"name": "Become Cursed", "difficulty": "2"},
{"name": "Rotate a Room", "difficulty": "2"},
{"name": "Eat in Pantry, Kitchen, and Dining in a Day", "difficulty": "2"},
{"name": "Buy a Special Key", "difficulty": "2"},

{"name": "Lose 10+ Steps to a Single Effect", "difficulty": "3"},
{"name": "Retrieve Key After Checking Overnight", "difficulty": "3"},
{"name": "Gain 21+ Steps in Dining Room", "difficulty": "3"},
{"name": "Open the Car Trunk", "difficulty": "3"},
{"name": "Eat 5 Fruit in a Day", "difficulty": "3"},
{"name": "Change a Room's Color", "difficulty": "3"},

{"name": "Collect Items Spread to Conference Room", "difficulty": "4"},
{"name": "Retrieve a Coin from Draining Water", "difficulty": "4"},
{"name": "Draft the Cloister for Free", "difficulty": "4"},
{"name": "Open a Filing Cabinet", "difficulty": "4"},
{"name": "Get a Prism Key", "difficulty": "4"},
{"name": "Open All Doors in Great Hall", "difficulty": "4"},
{"name": "Collect a Flower Gem", "difficulty": "4"},

{"name": "Draft Locker, Sauna, Pump Rooms in a Day", "difficulty": "5"},
{"name": "Draft 2 Queens in a Day", "difficulty": "5"},
{"name": "Read the Monk's Riddle", "difficulty": "5"},
{"name": "Enter Secret Passage Behind Unopened Bookcase", "difficulty": "5"},
{"name": "Pick 3 Berries", "difficulty": "5"},
{"name": "Open 5 Lockers in a Day", "difficulty": "5"},

{"name": "Open a Symbol Chest", "difficulty": "6"},
{"name": "Dig Up Lost Coffers of Mt. Holly", "difficulty": "6"},
{"name": "Castle", "difficulty": "6"},

{"name": "Remove a Room from the Drafting Pool", "difficulty": "7"},
{"name": "Refill a Watering Can", "difficulty": "7"},
{"name": "Obtain the Paper Crown", "difficulty": "7"},

{"name": "Get Any Trophy", "difficulty": "8"},
{"name": "Open a Safety Deposit Box", "difficulty": "8"},
{"name": "Trade Away a Tier 5 Item in the Trading Post", "difficulty": "8"},

{"name": "Draft All 4 Bishops, Knights, or Rooks in a Day", "difficulty": "9"},
{"name": "Solve 1 Realm Sigil", "difficulty": "9"},

//grouped squares (only one of each group can appear)
{"name": "4+ Allowance", "difficulty": "2", "group": "allowance"},
{"name": "6+ Allowance", "difficulty": "3", "group": "allowance"},
{"name": "8+ Allowance", "difficulty": "5", "group": "allowance"},
{"name": "9+ Allowance", "difficulty": "7", "group": "allowance"},
{"name": "10+ Allowance", "difficulty": "8", "group": "allowance"},
{"name": "12+ Allowance", "difficulty": "9", "group": "allowance"},

{"name": "Enter Antechamber", "difficulty": "5", "group": "antechamber"},
{"name": "Draft from Antechamber", "difficulty": "7", "group": "antechamber"},
{"name": "Unlock a Basement Door", "difficulty": "7", "group": "antechamber"},
{"name": "Unlock 2 Basement Doors", "difficulty": "8", "group": "antechamber"},

{"name": "Draft 3 Archived Floorplans in a Day", "difficulty": "1", "group": "archived"},
{"name": "Draft 4 Archived Floorplans in a Day", "difficulty": "2", "group": "archived"},
{"name": "Draft 5 Archived Floorplans in a Day", "difficulty": "3", "group": "archived"},
{"name": "Draft 6 Archived Floorplans in a Day", "difficulty": "4", "group": "archived"},
{"name": "Draft 8 Archived Floorplans in a Day", "difficulty": "6", "group": "archived"},

{"name": "Have 30+ Rooms", "difficulty": "1", "group": "bigmansion"},
{"name": "Reach Rank 9", "difficulty": "2", "group": "bigmansion"},
{"name": "Have 35+ Rooms", "difficulty": "2", "group": "bigmansion"},
{"name": "Draft the Entire East Wing", "difficulty": "4", "group": "bigmansion"},
{"name": "Draft the Entire West Wing", "difficulty": "4", "group": "bigmansion"},
{"name": "Have 40+ Rooms", "difficulty": "5", "group": "bigmansion"},
{"name": "Draft All Four Corners on Same Day", "difficulty": "5", "group": "bigmansion"},

{"name": "Solve 2 Dartboards", "difficulty": "1", "group": "billiards"},
{"name": "Solve 3 Dartboards", "difficulty": "2", "group": "billiards"},
{"name": "Solve 4 Dartboards", "difficulty": "3", "group": "billiards"},

{"name": "Buy Out Any Shop", "difficulty": "2", "group": "buyout"},
{"name": "Buy Out Kitchen", "difficulty": "3", "group": "buyout"},
{"name": "Buy Out Commissary", "difficulty": "3", "group": "buyout"},
{"name": "Buy a Showroom Item", "difficulty": "5", "group": "buyout"},
{"name": "Buy Out Showroom (Excluding Trophy)", "difficulty": "9", "group": "buyout"},

{"name": "Attend Grade 3", "difficulty": "1", "group": "classrooms"},
{"name": "Attend Grade 4", "difficulty": "3", "group": "classrooms"},
{"name": "Attend Grade 5", "difficulty": "5", "group": "classrooms"},
{"name": "Attend Grade 6", "difficulty": "6", "group": "classrooms"},
{"name": "Attend Grade 7", "difficulty": "8", "group": "classrooms"},
{"name": "Attend Grade 8", "difficulty": "9", "group": "classrooms"},

{"name": "30+ Coins", "difficulty": "2", "group": "coins"},
{"name": "40+ Coins", "difficulty": "4", "group": "coins"},
{"name": "60+ Coins", "difficulty": "6", "group": "coins"},
{"name": "100+ Coins", "difficulty": "8", "group": "coins"},

{"name": "Draft 6 Red Rooms in a Day", "difficulty": "1", "group": "colors"},
{"name": "Draft 7 Bedrooms in a Day", "difficulty": "3", "group": "colors"},
{"name": "Draft 6 Green Rooms in a Day", "difficulty": "3", "group": "colors"},
{"name": "Draft 6 Hallways in a Day", "difficulty": "3", "group": "colors"},
{"name": "&quot;Crimson&quot; in Estate Name (9+ Red Rooms)", "difficulty": "6", "group": "colors"},
{"name": "Draft 5 Shops in a Day", "difficulty": "4", "group": "colors"},
{"name": "Draft 10 Green Rooms in a Day", "difficulty": "7", "group": "colors"},
{"name": "Draft 10 Hallways in a Day", "difficulty": "7", "group": "colors"},
{"name": "Draft 3 Unique Blackprints in a Day", "difficulty": "7", "group": "colors"},

{"name": "Make a Contraption", "difficulty": "4", "group": "contraption"},
{"name": "Break the Piggy Bank", "difficulty": "6", "group": "contraption"},
{"name": "Break a Brick Wall", "difficulty": "6", "group": "contraption"},
{"name": "Draft 3 Tunnels in a row", "difficulty": "6", "group": "contraption"},
{"name": "Steal from the Locksmith", "difficulty": "7", "group": "contraption"},
{"name": "Read the Frozen Letter", "difficulty": "7", "group": "contraption"},
{"name": "Collapse the Gem Mine", "difficulty": "8", "group": "contraption"},

{"name": "End with 10+ Dead Ends", "difficulty": "2", "group": "deadend"},
{"name": "End with 12+ Dead Ends", "difficulty": "4", "group": "deadend"},
{"name": "End with 14+ Dead Ends", "difficulty": "6", "group": "deadend"},
{"name": "End with 16+ Dead Ends", "difficulty": "8", "group": "deadend"},
{"name": "End with 18+ Dead Ends", "difficulty": "9", "group": "deadend"},

{"name": "3+ Dice", "difficulty": "1", "group": "dice"},
{"name": "4+ Dice", "difficulty": "3", "group": "dice"},

{"name": "Dig 10x in a Day", "difficulty": "3", "group": "dig"},
{"name": "Dig 15x in a Day", "difficulty": "4", "group": "dig"},
{"name": "Dig 20x in a Day", "difficulty": "5", "group": "dig"},
{"name": "Dig Up a Major Key", "difficulty": "7", "group": "dig"},

{"name": "Eat in Dining Room 2 times", "difficulty": "2", "group": "dining"},
{"name": "Eat in Dining Room 3 times", "difficulty": "4", "group": "dining"},
{"name": "Eat in Dining Room 5 times", "difficulty": "6", "group": "dining"},

{"name": "Use 2 unique Elevators", "difficulty": "3", "group": "elevator"},
{"name": "Use 3 unique Elevators", "difficulty": "5", "group": "elevator"},  
  
{"name": "Add 2 New Floorplans", "difficulty": "1", "group": "floorplan"},
{"name": "Add 3 New Floorplans", "difficulty": "3", "group": "floorplan"},
{"name": "Add 4 New Floorplans", "difficulty": "4", "group": "floorplan"},
{"name": "Add 5 New Floorplans", "difficulty": "5", "group": "floorplan"},
{"name": "Add 6 New Floorplans", "difficulty": "6", "group": "floorplan"},
{"name": "Add 7 New Floorplans", "difficulty": "7", "group": "floorplan"},
{"name": "Add 8 New Floorplans", "difficulty": "8", "group": "floorplan"},

{"name": "1 Full Directory Category", "difficulty": "1", "group": "fulldirectory"},
{"name": "Full Directory of Red Rooms", "difficulty": "2", "group": "fulldirectory"},
{"name": "Full Directory of Hallways", "difficulty": "3", "group": "fulldirectory"},
{"name": "2 Full Directory Categories", "difficulty": "5", "group": "fulldirectory"},
{"name": "Full Directory of Green Rooms OR Bedrooms", "difficulty": "5", "group": "fulldirectory"},
{"name": "3 Full Directory Categories", "difficulty": "6", "group": "fulldirectory"},
{"name": "Full Page of Blue Rooms in Directory", "difficulty": "7", "group": "fulldirectory"},
{"name": "2 Full Pages of Blue Rooms in Directory", "difficulty": "9", "group": "fulldirectory"},

{"name": "Spend 3 Gems Drafting a Room", "difficulty": "2", "group": "gemcost"},
{"name": "Spend 5 Gems Drafting a Room", "difficulty": "4", "group": "gemcost"},
{"name": "Spend 3+ Gems Drafting a Room 3x in a Day", "difficulty": "5", "group": "gemcost"},

{"name": "10+ Gems", "difficulty": "2", "group": "gems"},
{"name": "15+ Gems", "difficulty": "4", "group": "gems"},
{"name": "20+ Gems", "difficulty": "5", "group": "gems"},

{"name": "8+ Inventory Items", "difficulty": "1", "group": "inventory"},
{"name": "10+ Inventory Items", "difficulty": "3", "group": "inventory"},
{"name": "12+ Inventory Items", "difficulty": "5", "group": "inventory"},
{"name": "14+ Inventory Items", "difficulty": "6", "group": "inventory"},

{"name": "8+ Keys", "difficulty": "2", "group": "keys"},
{"name": "12+ Keys", "difficulty": "3", "group": "keys"},

{"name": "Trigger Experiment 2x", "difficulty": "2", "group": "laboratory"},
{"name": "Trigger Experiment 4x", "difficulty": "4", "group": "laboratory"},
{"name": "End Your Day by Triggering an Experiment", "difficulty": "5", "group": "laboratory"},

{"name": "Pull Antechamber Lever", "difficulty": "1", "group": "levers"},
{"name": "Pull 2 Unique Levers", "difficulty": "3", "group": "levers"},
{"name": "Pull 3 Unique Levers", "difficulty": "5", "group": "levers"},
{"name": "Pull 2 Levers in a Day", "difficulty": "5", "group": "levers"},
{"name": "Pull Any Backup Lever", "difficulty": "6", "group": "levers"},
{"name": "Pull 4 Unique Levers", "difficulty": "7", "group": "levers"},


{"name": "Have 2 Major Keys", "difficulty": "1", "group": "majorkeys"},
{"name": "Have 3 Major Keys", "difficulty": "3", "group": "majorkeys"},
{"name": "Have 4 Major Keys", "difficulty": "5", "group": "majorkeys"},
{"name": "Have 5 Major Keys", "difficulty": "7", "group": "majorkeys"},

{"name": "Add Mechanarium", "difficulty": "5", "group": "mechanarium"},
{"name": "Draft a 4-Door Mechanarium", "difficulty": "7", "group": "mechanarium"},
{"name": "Draft a 6-Door Mechanarium", "difficulty": "8", "group": "mechanarium"},

{"name": "Draft from Chamber of Mirrors", "difficulty": "6", "group": "mirrors"},
{"name": "Raise All Mirrors in Chamber of Mirrors", "difficulty": "8", "group": "mirrors"},

{"name": "Solve 3 Parlors", "difficulty": "1", "group": "parlor"},
{"name": "Solve 4 Parlors", "difficulty": "2", "group": "parlor"},
{"name": "Use 2 Wind-Up Keys in a Day", "difficulty": "5", "group": "parlor"},

{"name": "Draft Maid's Chambers + Servant's Quarters in a Day", "difficulty": "3", "group": "payroll"},
{"name": "Cash a Payroll Check", "difficulty": "5", "group": "payroll"},

{"name": "Power 3 Consecutive Rooms", "difficulty": "4", "group": "power"},
{"name": "Operate a Powered Room's Device", "difficulty": "5", "group": "power"},
{"name": "Unlock Blackbridge Grotto", "difficulty": "6", "group": "power"},

{"name": "5+ Keys, Gems, Coins Each", "difficulty": "2", "group": "resources"},
{"name": "7+ Keys, Gems, Coins Each", "difficulty": "4", "group": "resources"},
{"name": "9+ Keys, Gems, Coins Each", "difficulty": "6", "group": "resources"},

{"name": "2 Safes in a Day", "difficulty": "1", "group": "safes"},
{"name": "3 Red Letters", "difficulty": "1", "group": "safes"},
{"name": "3 Safes in a Day", "difficulty": "2", "group": "safes"},
{"name": "4 Red Letters", "difficulty": "2", "group": "safes"},
{"name": "4 Safes in a Day", "difficulty": "4", "group": "safes"},
{"name": "5 Red Letters", "difficulty": "4", "group": "safes"},
{"name": "6 Red Letters", "difficulty": "6", "group": "safes"},
{"name": "5 Safes in a Day", "difficulty": "6", "group": "safes"},
{"name": "7 Red Letters", "difficulty": "8", "group": "safes"},


{"name": "Open 2 Security Doors in a Day", "difficulty": "1", "group": "security"},
{"name": "Open 4 Security Doors in a Day", "difficulty": "3", "group": "security"},
{"name": "Open Powered Security Door Without Using Keycard", "difficulty": "4", "group": "security"},

{"name": "Shelter the Lavatory", "difficulty": "2", "group": "shelter"},
{"name": "Shelter an Upgraded Room or a Found Floorplan", "difficulty": "6", "group": "shelter"},
{"name": "Trigger the Emergency Protocol from the Shelter", "difficulty": "7", "group": "shelter"},

{"name": "View 1 Stamp in the Library", "difficulty": "1", "group": "stamp"},
{"name": "View 2 Stamps in the Library", "difficulty": "4", "group": "stamp"},
{"name": "View 3 Stamps in the Library", "difficulty": "6", "group": "stamp"},
{"name": "View 4 Stamps in the Library", "difficulty": "9", "group": "stamp"},

{"name": "5+ Stars", "difficulty": "2", "group": "stars"},
{"name": "10+ Stars", "difficulty": "4", "group": "stars"},
{"name": "15+ Stars", "difficulty": "6", "group": "stars"},
{"name": "20+ Stars", "difficulty": "7", "group": "stars"},

{"name": "Have 90+ Steps", "difficulty": "2", "group": "steps"},
{"name": "Have 100+ Steps", "difficulty": "4", "group": "steps"},
{"name": "Have 110+ Steps", "difficulty": "7", "group": "steps"},

{"name": "Use a Telescope", "difficulty": "7", "group": "telescope"},
{"name": "Upgrade the Planetarium", "difficulty": "7", "group": "telescope"},

{"name": "Access 3 Unique Terminals", "difficulty": "1", "group": "terminals"},
{"name": "Access 4 Unique Terminals", "difficulty": "4", "group": "terminals"},
{"name": "Access 3 Unique Terminals in a Day", "difficulty": "4", "group": "terminals"},

{"name": "&quot;Architect's&quot; in Estate Name", "difficulty": "3", "group": "titles"},
{"name": "&quot;Bed & Breakfast&quot; in Estate Name", "difficulty": "4", "group": "titles"},
{"name": "&quot;of Tomorrow&quot; / &quot;Temporal&quot; in Estate Name", "difficulty": "5", "group": "titles"},
{"name": "&quot;of Fire & Ice&quot; in Estate Name", "difficulty": "6", "group": "titles"},

{"name": "Use 3 Upgrade Disks", "difficulty": "3", "group": "upgradedisk"},
{"name": "Use 4 Upgrade Disks", "difficulty": "4", "group": "upgradedisk"},
{"name": "Use 5 Upgrade Disks", "difficulty": "5", "group": "upgradedisk"},
{"name": "Use 6 Upgrade Disks", "difficulty": "6", "group": "upgradedisk"},
{"name": "Use 7 Upgrade Disks", "difficulty": "7", "group": "upgradedisk"},
{"name": "Use 8 Upgrade Disks", "difficulty": "8", "group": "upgradedisk"},
{"name": "Use 9 Upgrade Disks", "difficulty": "9", "group": "upgradedisk"}
];
