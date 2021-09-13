const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51JYn62SDew1HXaP42QmzkKqZxcqy48cCW31WBcbESKC9fDkuft3gRXlno896VADcVe3RdU6BLD1ceWshXqJBMZdn00YhdZK2Tn"
);

// API

//  - API config
const app = express();

//  - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//  - API Routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

// app.get("/saba", (request, response) =>
//   response.status(200).send("WELCOME BE BASSEEEE")
// );

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recieved BOOM!!! for this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //sub units of currency
    currency: "usd",
  });

  //Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/crazy-shop-51b5f/us-central1/api
