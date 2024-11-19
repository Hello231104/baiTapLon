const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Thay bằng URI của bạn nếu dùng MongoDB Atlas
const client = new MongoClient(uri);

async function connectToDB() {
    try {
        await client.connect();
        console.log('Kết nối thành công đến MongoDB!');
        return client.db('sanpham'); // Thay 'ten_database' bằng tên database của bạn
    } catch (error) {
        console.error('Lỗi kết nối:', error);
    }
}

module.exports = connectToDB;
