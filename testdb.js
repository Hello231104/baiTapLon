const connectToDB = require('db.js');

async function testConnection() {
    const db = await connectToDB();
    console.log('Kết nối xong, database:', db.databaseName);
}

testConnection();
