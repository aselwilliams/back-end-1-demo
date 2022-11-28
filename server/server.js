const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const inventory = [
  "greeting card",
  "wagon",
  "computer",
  "table",
  "chair",
  "milk",
  "sailboat",
  "conditioner",
  "rusty nail",
  "desk",
];
app.get("/api/inventory", (req, res)=> {
    if(req.query.item){
        const filteredItems = inventory.filter((invItem)=> invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems);
    } else {
        res.status(200).send(inventory);
    }
})

app.get("/api/inventory/:id", (req, res)=> {
    // console.log(typeof req.params.index)
    res.status(200).send(inventory[+req.params.id]);
})

// app.get("/api/inventory", (req, res) => {
//   // const item = req.query.item
//   const { item } = req.query;
//   if (item) {
//     const filteredItems = inventory.filter(
//       (invItem) => invItem === item.toLowerCase()
//     );
//     console.log(filteredItems);
//     res.status(200).send(filteredItems);
//   } else {
//     res.status(200).send(inventory);
//   }
// });

// app.get("/api/inventory/:idx", (req, res) => {
//   const { idx } = req.params;
//   res.status(200).send(inventory[idx]);
// });
const PORT = 5050;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
