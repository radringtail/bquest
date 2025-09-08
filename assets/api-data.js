var objectiveData = [
// ungrouped easy
{"name": "Toss a Coin in the Fountain", "difficulty": 1},
{"name": "Spend 30 Seconds in the Lavatory", "difficulty": 1},
{"name": "Watch an Entire Alzara Cutscene", "difficulty": 1},
{"name": "Draft a Donut", "difficulty": 1},
{"name": "Dig Up Nothing", "difficulty": 1},
{"name": "Read The Red Prince Aloud", "difficulty": 1},
{"name": "Draft Both Exits from Dark Room", "difficulty": 1},
{"name": "End with a Live Animal", "difficulty": 1},
{"name": "End in Planetarium", "difficulty": 1},
{"name": "Read Newspaper Clipping", "difficulty": 1},
{"name": "Draft 2 Knights in a Day", "difficulty": 1},

// ungrouped medium
{"name": "Spend 3 Gems Drafting a Room", "difficulty": 2},
{"name": "Retrieve Key After Checking Overnight", "difficulty": 2},
{"name": "Trade a Microchip", "difficulty": 2},
{"name": "Permanently Increase a Room's Rarity", "difficulty": 2},
{"name": "Re-roll a Draft 4+ Times", "difficulty": 2},
{"name": "Open a Delivered Package", "difficulty": 2},
{"name": "Reach Rank 9", "difficulty": 2},
{"name": "Shelter the Lavatory", "difficulty": 2},
{"name": "Eat in Pantry, Kitchen, and Dining in a Day", "difficulty": 2},
{"name": "Draft 8 Blue Rooms in a Row", "difficulty": 2},
{"name": "Draft 2 Bishops in a Day", "difficulty": 2},
{"name": "Draft 2+ Copies of Room in a Day", "difficulty": 2},
{"name": "Draft an Architect's House", "difficulty": 2},
{"name": "Draft West and East Wing Halls", "difficulty": 2},
{"name": "Change a Room's Color", "difficulty": 2},
{"name": "Open Tomb Door to Reservoir", "difficulty": 2},
{"name": "Read a Library Book Aloud", "difficulty": 2},
{"name": "Buy a Special Key", "difficulty": 2},

// ungrouped hard
{"name": "Add Mechanarium", "difficulty": 3},
{"name": "Collect Items Spread to Conference Room", "difficulty": 3},
{"name": "End a Day with 90+ Steps Left", "difficulty": 3},
{"name": "Open All Doors in Great Hall", "difficulty": 3},
{"name": "Retrieve a Coin from Draining Water", "difficulty": 3},
{"name": "Draft the Cloister for Free", "difficulty": 3},
{"name": "Collect a Flower Gem", "difficulty": 3},
{"name": "Cash a Payroll Check", "difficulty": 3},
{"name": "Make a Contraption", "difficulty": 3},

// ungrouped very hard
{"name": "Enter Antechamber", "difficulty": 4},
{"name": "Gain Chess Power", "difficulty": 4},

//grouped squares (only one of each group can appear)
{"name": "End with 100+ Steps Taken", "difficulty": 1, "group": "steps"},
{"name": "End with 120+ Steps Taken", "difficulty": 2, "group": "steps"},

{"name": "End with 30+ Rooms", "difficulty": 2, "group": "totalrooms"},
{"name": "End with 35+ Rooms", "difficulty": 3, "group": "totalrooms"},

{"name": "Eat in Dining Room 2 times", "difficulty": 2, "group": "dining"},
{"name": "Eat in Dining Room 3 times", "difficulty": 3, "group": "dining"},

{"name": "Buy Out Any Shop", "difficulty": 2, "group": "buyout"},
{"name": "Buy Out Kitchen", "difficulty": 2, "group": "buyout"},
{"name": "Buy Out Commissary", "difficulty": 3, "group": "buyout"},

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
{"name": "Gain >20 Steps in Dining Room", "difficulty": 2, "group": "food"},

{"name": "3+ Allowance", "difficulty": 2, "group": "allowance"},
{"name": "4+ Allowance", "difficulty": 2, "group": "allowance"},
{"name": "5+ Allowance", "difficulty": 3, "group": "allowance"},
{"name": "6+ Allowance", "difficulty": 3, "group": "allowance"},
{"name": "7+ Allowance", "difficulty": 4, "group": "allowance"},

{"name": "5+ Stars", "difficulty": 2, "group": "stars"},
{"name": "10+ Stars", "difficulty": 3, "group": "stars"},
{"name": "15+ Stars", "difficulty": 4, "group": "stars"},

{"name": "Fail 1 Parlor", "difficulty": 1, "group": "parlor"},
{"name": "Solve 2 Parlors", "difficulty": 1, "group": "parlor"},
{"name": "Solve 3 Parlors", "difficulty": 2, "group": "parlor"},
{"name": "Solve 4 Parlors", "difficulty": 2, "group": "parlor"},

{"name": "Solve 2 Dartboards", "difficulty": 1, "group": "billiard"},
{"name": "Solve 3 Dartboards", "difficulty": 2, "group": "billiard"},
{"name": "Solve 4 Dartboards", "difficulty": 3, "group": "billiard"},

{"name": "Trigger Experiment 2x", "difficulty": 2, "group": "experiment"},
{"name": "Trigger Experiment 4x", "difficulty": 3, "group": "experiment"},

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

{"name": "Draft 6 Red Rooms in a Day", "difficulty": 2, "group": "rooms"},
{"name": "Draft 7 Bedrooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 6 Green Rooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 6 Hallways in a Day", "difficulty": 3, "group": "rooms"},

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
{"name": "Pull 3 Unique Levers", "difficulty": 4, "group": "levers"}
];
