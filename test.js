const connectToDB = require('./db'); // Đảm bảo file db.js có trong cùng thư mục

async function testConnection() {
    const db = await connectToDB();
    console.log('Kết nối xong, database:', db.databaseName);
}

testConnection();
