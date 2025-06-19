const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

//middleware


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute);

// Connect to MongoDB

mongoose.connect("mongodb+srv://Satyam:S@cluster0.gwwwv8v.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("MongoDB connected");
}
).catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get('/', (req, res) => {
    res.send('Hello Updated World!');
    });




// app.get('/api/products', async (req, res) => {
//     try {
//         const Products = await Product.find({});
//         res.status(200).json(Products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
// );

// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id }= req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
// );

        

// app.post('/api/products', async (req, res) => {
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);

//     } catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// // Update a product
// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Delete a product
// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json({ message: 'Product deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// Connect to MongoDB
