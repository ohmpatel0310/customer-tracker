
// Step 2: Creating Customer Records

let customers = [
    {
        name: "Jimmy John",
        email: "jimmyjohn@gmail.com",
        purchases: ["Chocolate Brownie", "Sandwich Brownie"],

    },
    {
        name: "Dave Chicken",
        email: "davechicken@gmail.com",
        purchases: ["Chicken Brownie"],
    },
    {
        name: "Panda Express",
        email: "pandaexpress@gmail.com",
        purchases: ["Panda Brownie"],
    }
]

// Step 3: Adding and Removing Data

customers.push({
    name: "Five Guys",
    email: "fiveguys@gmail.com",
    purchases: "Brownie for Guys",
})

customers.shift();

//Step 4: Updating Customer Data

customers[1].email = "pandas@gmail.com",
customers[0].purchases.push("Hot Brownie")

console.log(customers);