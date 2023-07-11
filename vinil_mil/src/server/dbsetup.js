const UserModel = require('./models/user.model');
const VinylModel = require('./models/vinyl.model');

const connectToDatabase = require('./connect');
connectToDatabase();

async function setupDatabase() {
  try {
    await UserModel.deleteMany({});
    await VinylModel.deleteMany({});

    const users = [
        {
            username: "Gabriel",
            email: "gabrielperao@hotmail.com",
            password: "senha",
            card_number: "9423567718640742",
            admin_privileges: false
        },
        {
            username: "admin",
            email: "admin@admin",
            password: "admin",
            card_number: null,
            admin_privileges: true
        },
        {
            username: "Admin",
            email: "admin",
            password: "admin",
            card_number: null,
            admin_privileges: true
        }
    ]
    await UserModel.create(users);

    const vinyls = [
        {
            id: "64a626f3c9a91a93cf760a03",
            title: "BANDA NOVA MALANDRAGEM",
            cover_filename: "vinyl2.jpg",
            audio_filename: "vinyl2.mp3",
            price: "150",
            available_qty: "5"
        },
        {
            id: "64a6271fc9a91a93cf760a06",
            title: "O SOM DAS AMÉRICAS 12″ BANDA BLACK RIO",
            cover_filename: "vinyl3.jpg",
            audio_filename: "vinyl3.mp3",
            price: "200",
            available_qty: "4"
        },
        {
            id: "64a6272dc9a91a93cf760a08",
            title: "AUTOINTITULADO - AUTORAMAS",
            cover_filename: "vinyl4.jpeg",
            audio_filename: "vinyl4.mp3",
            price: "180",
            available_qty: "2"
        },
        {
            id: "64a6273fc9a91a93cf760a0a",
            title: "A DANÇA DOS NÃO FAMOSOS 12″",
            cover_filename: "vinyl5.jpg",
            audio_filename: "vinyl5.mp3",
            price: "230",
            available_qty: "10"
        },
        {
            id: "64a6274bc9a91a93cf760a0c",
            title: "ANTIGAMENTE QUILOMBOS HOJE PERIFERIA 12”",
            cover_filename: "vinyl6.jpeg",
            audio_filename: "vinyl6.mp3",
            price: "200",
            available_qty: "1"
        },
        {
            id: "64a6275bc9a91a93cf760a0e",
            title: "SAMBA MATUTO 1969",
            cover_filename: "vinyl7.jpg",
            audio_filename: null,
            price: "150",
            available_qty: "0"
        },
        {
            id: "64a62763c9a91a93cf760a10",
            title: "BETO BRUNO – DEPOIS DO FIM",
            cover_filename: "vinyl8.jpg",
            audio_filename: "vinyl8.mp3",
            price: "170",
            available_qty: "13"
        },
        {
            id: "64ac8677990ac7008cdac9ee",
            title: "DEVOTOS PUNK REGGAE",
            cover_filename: "vinyl1.jpeg",
            audio_filename: "vinyl1.mp3",
            price: "250",
            available_qty: "8"
        }
    ]
    await VinylModel.create(vinyls);

    console.log('Setup do banco de dados concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o setup do banco de dados:', error);
  }
}

setupDatabase();
