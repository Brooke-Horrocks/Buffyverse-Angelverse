const fs = require("fs");

const getUser = () => {
    return new Promise((resolve, reject) => {
        try{
            const user = fs.readFileSync("./user.json");
            setTimeout(() => resolve({ data: JSON.parse(user) }), 1000);
        } catch(err) {
            reject(err);
        }
    });
};

const getPersonalData = user => {
    return new Promise((resolve, reject) => {
        try{
            const list = JSON.parse(fs.readFileSync("./data.json"));
            setTimeout(() => resolve({ data: list.filter(item => item.belongsTo === user.username) }))
        } catch(err){
            reject(err);
        }
    });
};

const handleData = list => console.log(list);

// Keyword async turns it into a function that returns a promise
const getAllPersonalData = async () => {
    const userResponse = await getUser();
    const data = await getPersonalData(userResponse.data.username);
    return {
        userResponse,
        data
    }
};

getAllPersonalData()
    .then(data => console.log(data))
    .catch(err => console.log(err))