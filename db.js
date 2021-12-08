const Sequelize = require('Sequelize');
const { STRING, TEXT, DATEONLY} = Sequelize; 
const productsData = require("./data/productAPI");
const memberData = require("./data/memberAPI");
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/motorcycles');

const Rider = conn.define('rider', { 
    name: STRING, 
    bio: TEXT,
    memberDate: DATEONLY
})
const Motorcycles = conn.define("motorcycle", {
    title: STRING,
    about: TEXT,
    image: STRING,
});



const seed = async () => {
    await conn.sync({ force: true})
    Promise.all(
        memberData.forEach((e) => {
            Rider.create({
              name: e.name,
              bio: e.bio,
              memberDate: e.memberDate,
            })
        }),
        productsData.forEach((e) => {
            Motorcycles.create({
              title: e.title,
              about: e.about,
              image: e.images,
            })
        })
    )
} 

module.exports = {
    models: {
        Rider, 
        Motorcycles
    },
    seed
}