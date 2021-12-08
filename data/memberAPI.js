const faker = require('faker')

const creator = () => {
    return {
    name: faker.name.firstName(),
    bio: faker.lorem.words(25),
    memberDate: faker.date.between('2000-01-01', '2005-12-31'),
    }
} 

const memberData = new Array(15)
    .fill('')
    .map( e => 
    creator())

module.exports = memberData;