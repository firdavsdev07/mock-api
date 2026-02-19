const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// Mock data - Plants
const plants = [
  {
    id: 1,
    title: "Monstera Deliciosa",
    price: 45.99,
    desc: "Popular tropical plant with large, glossy leaves featuring natural splits and holes. Perfect for indoor spaces with bright, indirect light.",
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500",
  },
  {
    id: 2,
    title: "Snake Plant",
    price: 29.99,
    desc: "Low-maintenance succulent with upright, sword-like leaves. Excellent air purifier and perfect for beginners.",
    img: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb8?w=500",
  },
  {
    id: 3,
    title: "Fiddle Leaf Fig",
    price: 65.0,
    desc: "Stunning plant with large, violin-shaped leaves. A statement piece for any room with plenty of natural light.",
    img: "https://images.unsplash.com/photo-1610375228550-d5e94c3e3de0?w=500",
  },
  {
    id: 4,
    title: "Pothos",
    price: 19.99,
    desc: "Easy-to-grow trailing vine with heart-shaped leaves. Great for hanging baskets or shelves.",
    img: "https://images.unsplash.com/photo-1597354917916-e6c0cf210abb?w=500",
  },
  {
    id: 5,
    title: "Peace Lily",
    price: 35.5,
    desc: "Elegant plant with dark green leaves and white flowers. Thrives in low light and helps purify indoor air.",
    img: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=500",
  },
  {
    id: 6,
    title: "Rubber Plant",
    price: 42.0,
    desc: "Bold plant with thick, glossy leaves in deep green or burgundy. Easy to care for and grows quickly.",
    img: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?w=500",
  },
  {
    id: 7,
    title: "Spider Plant",
    price: 15.99,
    desc: "Classic houseplant with arching leaves and baby plantlets. Very forgiving and perfect for beginners.",
    img: "https://images.unsplash.com/photo-1572688484235-ea3f98c4b767?w=500",
  },
  {
    id: 8,
    title: "ZZ Plant",
    price: 38.99,
    desc: "Drought-tolerant plant with waxy, dark green leaves. Thrives on neglect and low light conditions.",
    img: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=500",
  },
  {
    id: 9,
    title: "Boston Fern",
    price: 27.5,
    desc: "Lush, feathery fern with cascading fronds. Loves humidity and indirect light.",
    img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500",
  },
  {
    id: 10,
    title: "Bird of Paradise",
    price: 75.0,
    desc: "Tropical plant with large, banana-like leaves. Creates a dramatic focal point in bright spaces.",
    img: "https://images.unsplash.com/photo-1612363148951-14e67ab94971?w=500",
  },
  {
    id: 11,
    title: "Aloe Vera",
    price: 18.99,
    desc: "Medicinal succulent with thick, fleshy leaves. Easy to care for and has healing properties.",
    img: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?w=500",
  },
  {
    id: 12,
    title: "Calathea",
    price: 32.99,
    desc: "Decorative plant with stunning patterned leaves. Prefers humid conditions and low to medium light.",
    img: "https://images.unsplash.com/photo-1612363851263-c5c5f7e27bd6?w=500",
  },
];

// Routes

// GET all plants
app.get("/api/plants", (req, res) => {
  res.json(plants);
});

// GET single plant by ID
app.get("/api/plants/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const plant = plants.find((p) => p.id === id);

  if (!plant) {
    return res.status(404).json({
      success: false,
      message: `Plant with ID ${id} not found`,
    });
  }

  res.json({
    success: true,
    data: plant,
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Plants Mock API",
    endpoints: {
      getAllPlants: "GET /api/plants",
      getOnePlant: "GET /api/plants/:id",
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🌱 Plants API server is running on http://localhost:${PORT}`);
  console.log(`📚 Available endpoints:`);
  console.log(`   GET http://localhost:${PORT}/api/plants`);
  console.log(`   GET http://localhost:${PORT}/api/plants/:id`);
});
