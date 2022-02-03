const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const db = require("./services/Db");

app.use(cors({}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/character", async (req, res) => {
  const {
    img,
    name,
    level,
    race,
    job,
    age,
    taille,
    pv,
    armor,
    initiative,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdow,
    charisma,
    feats,
    skill,
    languages,
    knowlegde,
  } = req.body;
  console.log(req.body);
  try {
    const character = await db.character.create({
      data: {
        img,
        name,
        level,
        race,
        job,
        age,
        taille,
        pv,
        armor,
        initiative,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdow,
        charisma,
        feats,
        skill,
        languages,
        knowlegde,
      },
    });
    res.send(character);
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
