const express =require('express');
const cors=require('cors');
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://library-admin-omega.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cors());


const books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    category_id: 1,
    tipe:'file',
    catalog_id: 1,
    file: null,
    img: "https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg",
    catalog:'Badiy',
    lang:"Uz",
    description: "This is a book about electronics",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
    category_id: 2,
    tipe:'audio',
    catalog_id: 1,
    file: null,
    img: "https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg",
    catalog:'Sheriyat',
    lang:"Rus",
    description: "This is a book about clothing",
  },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
    category_id: 3,
    tipe:'file',
    catalog_id: 1,
    file: null,
    img: "https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg",
    catalog:'Mashxat',
    lang:"Eng",
    description: "This is a book about home and garden",
  },
  {
    id: 4,
    title: "Book 4",
    author: "Author 4",
    category_id: 1,
    tipe:'audio',
    catalog_id: 2,
    file: null,
    img: "https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg",
    catalog:'Shaxmat',
    lang:"Uz",
    description: "This is a book about sports and outdoors"
  },
  {
    id: 5,
    title: "Book 5",
    author: "Author 5",
    category_id: 1,
    tipe:'file',
    catalog_id: 2,
    file: null,
    img: "https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg",
    catalog:'Shaxmat',
    lang:"Rus",
    description: "This is a book about sports and outdoors"
  },
  {
    id: 6,
    title: "Book 6",
    author: "Author 6",
    category_id: 2,
    tipe:'audio',
    catalog_id: 3,
    file: null,
    img: "https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg",
    catalog:'Shaxmat',
    lang:"Eng",
    description: "This is a book about sports and outdoors"
  },
  {
    id: 7,
    title: "Book 7",
    author: "Author 7",
    category_id: 3,
    tipe:'file',
    catalog_id: 4,
    file: null,
    img: "https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg",
    catalog:'Mashxat',
    lang:"Uz",
    description: "This is a book about home and garden"
  },
  {
    id: 8,
    title: "Book 8",
    author: "Author 8",
    category_id: 2,
    tipe:'audio',
    catalog_id: 4,
    file: null,
    img: "https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg",
    catalog:'Sheriyat',
    lang:"Rus",
    description: "This is a book about clothing"
  },
  {
    id: 9,
    title: "Book 9",
    author: "Author 9",
    category_id: 2,
    tipe:'file',
    catalog_id: 4,
    file: null,
    img: "https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg",
    catalog:'Badiy',
    lang:"Uz",
    description: "This is a book about electronics"
  }
];

const categories = [
  {
    id: 1,
    name: "O'zbek adabiyoti",
    books: books.filter(
      (item) => item.category_id === 1 && item.tipe === "file"
    ).length,
    audiobooks: books.filter(
      (item) => item.category_id === 1 && item.tipe === "audio"
    ).length,
    img: "https://api.kitob.itsm.uz/data/genres/cover/3.png",
  },
  {
    id: 2,
    name: "Jahon adabiyoti",
    books: books.filter(
      (item) => item.category_id === 2 && item.tipe === "file"
    ).length,
    audiobooks: books.filter(
      (item) => item.category_id === 2 && item.tipe === "audio"
    ).length,
    img: "https://api.kitob.itsm.uz/data/genres/cover/12.png",
  },
  {
    id: 3,
    name: "Bolalar uchun",
    books: books.filter(
      (item) => item.category_id === 3 && item.tipe === "file"
    ).length,
    audiobooks: books.filter(
      (item) => item.category_id === 3 && item.tipe === "audio"
    ).length,
    img: "https://api.kitob.itsm.uz/data/genres/cover/236.png",
  },
];

const admins=[
    {id: 1, username: 'Muhsinbek', seconname:'Mirzamatov', password: '1212', token:'123'},
    {id: 2, username: 'Naim', seconname:'Kamalilov', password: '1212', token:'456'},
    {id: 3, username: 'Zara', seconname:'Rahmanova', password: '1212', token:'789'}
]

const catalogs = [
  {
    id: 1,
    title: "Sheriyat",
    categori_id: 1,
    books: books.filter((item) => item.catalog_id === 1).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 1 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 1 && item.tipe === "file")
      .length,
  },
  {
    id: 2,
    title: "Fantastik",
    categori_id: 1,
    books: books.filter((item) => item.catalog_id === 2).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 2 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 2 && item.tipe === "file")
      .length,
  },
  {
    id: 3,
    title: "Roman",
    categori_id: 2,
    books: books.filter((item) => item.catalog_id === 3).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 3 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 3 && item.tipe === "file")
      .length,
  },
  {
    id: 4,
    title: "Fantastik",
    categori_id: 3,
    books: books.filter((item) => item.catalog_id === 4).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 4 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 4 && item.tipe === "file")
      .length,
  },
  {
    id: 5,
    title: "Mashxat",
    categori_id: 1,
    books: books.filter((item) => item.catalog_id === 5).length,
    audiobooks: books.filter(
      (item) => item.catalog_id === 5 && item.tipe === "audio"
    ).length,
    book: books.filter((item) => item.catalog_id === 5 && item.tipe === "file")
      .length,
  }
];

const port =process.env.PORT || 5001

app.listen(port, ()=>{
    console.log(`Server ${port} da ishga tushdi`);
});

app.get('/',(req, res)=>{
    res.send('Server ishga tushdi')
})

app.get('/api/categories',(req, res)=>{
    res.send(categories)
})

app.get('/api/books',(req, res)=>{
    res.send(books)
})

app.get('/api/catologs/:id',(req, res)=>{
  const {id} = req.params
  const catalog = catalogs.filter((c) => c.categori_id === parseInt(id));
    res.send(catalog)
})

app.get("/api/categories/:slug/:id",(req, res)=>{
    const {id,slug} = req.params;
    const book = books.filter(
      (b) => b.category_id === parseInt(slug) && b.catalog_id
    ===parseInt(id));
    res.send(book);
});

app.post('/api/admin/login', cors(),(req, res)=>{
    const {username, password} = req.body;
    const admin = admins.find(a=>a.username===username && a.password===password);
    if(admin){
        const token = Math.random().toString(36).substr(2, 10);
        admin.token = token;
        res.json({admin, token})
    }else{
        res.status(401).json({message: 'Foydalanuvchi topilmadi'})
    }
}); //