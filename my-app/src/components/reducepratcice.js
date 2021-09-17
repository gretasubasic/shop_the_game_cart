


const games = [
    {
        id: 1,
        name: "Puzzle Breakout",
        price: "100$",
        amount: 1
        
    },

    {
        id: 2,
        name: "Danger Lock",
        price: "200$",
        amount: 1,

        
    },
    {
        id: 3,
        name: "The Crypt",
        price: "155$",
        amount: 1
    }

]








    let total = games.reduce((total, cartItem) => {
        return total 
    }, {
        totalItems: 0,
        cartTotal: 0
    })

    console.log(total)
 