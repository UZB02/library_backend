const express =require('express');
const cors=require('cors');
const app = express();

app.use(express.json());

app.use(cors());

const categories=[
    {id: 1, name: 'Electronics', items: ['Laptops', 'Mobile Phones', 'TVs']},
    {id: 2, name: 'Clothing', items: ['Shirts', 'Pants', 'Jackets']},
    {id: 3, name: 'Home & Garden', items: ['Furniture', 'Gardening Tools', 'Patio & Outdoor Supplies']},
    {id: 4, name: 'Sports & Outdoors', items: ['Soccer', 'Basketball', 'Golf']}
 
]

const admins=[
    {id: 1, username: 'Muhsinbek', seconname:'Mirzamatov', password: '1212', token:'123'},
    {id: 2, username: 'Naim', seconname:'Kamalilov', password: '1212', token:'456'},
    {id: 3, username: 'Zara', seconname:'Rahmanova', password: '1212', token:'789'}
]

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