const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const port = 3001;
const db = require("./services/Db");
const bcrypt = require("bcrypt");

app.use(cors({}));

app.use(
  session({
    name: "Custom_Character",
    secret: "}wVnE<jZ2:EEt#[qMNptvF^67=jSEmm~",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/character", async (req, res) => {
  const {
    avatar,
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
    user_id
  } = req.body;


  try {
    const character = await db.character.create({
      data: {
        avatar,
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
        user_id
      },
    });
    console.log(character)
    res.send("Created");
  } catch (e) {
    console.log(e);
  }
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await db.$queryRaw`INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${await bcrypt.hash(
      password,
      12
    )})`
    const user = await db.users.findUnique({
      where: { username: username }
    });
    res.status(201).send(user);
  } catch (e) {
    console.log(e)
    if (e.meta) {
      res.status(400).send(e.meta.message);
    } else if (e.sqlMessage) {
      res.status(400).send([{ message: e.sqlMessage }]);
    } else {
      res.status(500).send("Unexpected error");
    }
  }
});

app.post("/login", async (req, res) => {
  const { username, clearPassword } = req.body;

  try {
    const user = await db.users.findUnique({
      where: { username: username }
    });
    if (
      user === null ||
      (await bcrypt.compare(clearPassword, user.password)) === false
    ) {
      return res.status(401).send("unauthorized");
    }
  
    const { password, ...userObject } = user;
    if (user) {
      req.session.user = userObject;
      return res.send(userObject);
    }
    res.status(403).send("Forbidden");
  } catch (e) {
    res.status(500).send("unexpected error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
