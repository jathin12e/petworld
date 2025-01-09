const express = require("express");
const { open } = require("sqlite");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); 

const dbPath = path.join(__dirname, "dogs.db");
let db = null;


app.use("/images/", express.static(path.join(__dirname, "/images")));

const connectDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });
    app.listen(8080,  () => {
      console.log("Server running at http://localhost:8080/");
    });
  } catch (e) {
    console.error(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

connectDbAndServer();

// Search endpoint to search pets by name
app.get("/search", async (req, res) => {
  const { name } = req.query;
  try {
    const query = `SELECT * FROM pets WHERE name LIKE ?`;
    const pets = await db.all(query, [`%${name}%`]); 
    res.status(200).send(pets);
  } catch (error) {
    console.error("Error in search query:", error);
    res.status(500).send({ error: "Error searching for pets" });
  }
});


app.get("/dogs/", async (req, res) => {
  try {
    const query = `SELECT * FROM pets WHERE category = "dog"`;
    const dogs = await db.all(query);
    res.status(200).send(dogs);
  } catch (error) {
    res.status(500).send({ error: "Error retrieving dogs" });
  }
});

// Get all cats
app.get("/cats/", async (req, res) => {
  try {
    const query = `SELECT * FROM pets WHERE category = "cat"`;
    const cats = await db.all(query);
    res.status(200).send(cats);
  } catch (error) {
    res.status(500).send({ error: "Error retrieving cats" });
  }
});

// Get pet by ID
app.get("/pets/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = `SELECT * FROM pets WHERE id = ?`;
    const pet = await db.get(query, [id]);
    if (pet) {
      res.status(200).send(pet);
    } else {
      res.status(404).send({ error: "Pet not found" });
    }
  } catch (error) {
    res.status(500).send({ error: "Error retrieving pet" });
  }
});

app.post('/pet/' , async(req,res) =>{
  const req1 = req.body
  const {id , name , price} = req1 
  const query = `insert into pets (id , name , price)values (${id} , '${name}' , ${price})`
  const db1 = await db.run(query)
  const pet_id = db1.lastID
  res.send({id:pet_id})
})