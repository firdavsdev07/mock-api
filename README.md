# Plants Mock API 🌱

Simple REST API for plant data with mock database.

## Features

- Get all plants
- Get single plant by ID
- CORS enabled
- JSON responses

## Installation

```bash
# Install dependencies
pnpm install

# Start server
pnpm start
```

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Get All Plants
```http
GET /api/plants
```

**Response:**
```json
{
  "success": true,
  "count": 12,
  "data": [
    {
      "id": 1,
      "title": "Monstera Deliciosa",
      "price": 45.99,
      "desc": "Popular tropical plant with large, glossy leaves...",
      "img": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500"
    },
    ...
  ]
}
```

### Get Single Plant
```http
GET /api/plants/:id
```

**Parameters:**
- `id` (number) - Plant ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Monstera Deliciosa",
    "price": 45.99,
    "desc": "Popular tropical plant with large, glossy leaves...",
    "img": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Plant with ID 99 not found"
}
```

## Available Plants

The API includes 12 different plants:
1. Monstera Deliciosa - $45.99
2. Snake Plant - $29.99
3. Fiddle Leaf Fig - $65.00
4. Pothos - $19.99
5. Peace Lily - $35.50
6. Rubber Plant - $42.00
7. Spider Plant - $15.99
8. ZZ Plant - $38.99
9. Boston Fern - $27.50
10. Bird of Paradise - $75.00
11. Aloe Vera - $18.99
12. Calathea - $32.99

## Technologies

- Node.js
- Express.js 5.2.1
- pnpm

## Port

Default port: `3000`

To change port, set `PORT` environment variable:
```bash
PORT=5000 pnpm start
```

## License

ISC
