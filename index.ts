import express from "express";
import * as bcrypt from "bcrypt";
import router from "./src/routes/TaskRoutes";
import * as jwt from "jsonwebtoken";

const playload = {
  userId: "fd821d1e-2c73-451c-9db5-b4f173c001ec",
  name: "Eduardo",
};

const secret = "8024785d-2978-4ffb-8828-42ff81d387ff";

const option = {
  expiresIn: "1s",
  //expiresIn: "1h",
};

const token = jwt.sign(playload, secret, option);

setTimeout(() => {
  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
  } catch (err: any) {
    console.log({ error: err.message });
  }
}, 2000);

//console.log(token);

const password = "mypassword123";
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (error, hash) => {
  bcrypt.compare(password, hash, (error, result) => {
    if (result) {
      //console.log("correct password");
    } else {
      //console.log("Invalid login");
    }
  });
});

const server = express();
const port = 3000;

server.use(express.urlencoded({ extended: true }));

server.use(router);
server.listen(port);
