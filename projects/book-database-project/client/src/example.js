// SCHEMA

const Schema = {
    title: String,
    description: String,
    author: String,
    genre: {
        type: String,
        enum: ["sci-fi", "horror"]
    },
    wishlist: Boolean,
    recommended: Boolean,
    recommendedBy: String,
    owned: Boolean,
    ownedBy: String,
}

//PROVIDER

class Provider {
    state = {
        filterBy: book => true,
        sortBy: (a, b) => { return 0 },
        books: []
    }
}

//TODO: LOOK INTO CALLBACK FUNCTIONS IN STATE