const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
  const items =[
    {
      title: "D",
      message: "esenvolver aplicações/servidor de forma fácil"
    },
    {
      title: "E",
      message: "JS usa JavaScript para rendenizar HTML"
    },
    {
      title: "M",
      message: "uito fácil de usar"
    },
    {
      title: "A",
      message: "mo essa línguagem"
    },
    {
      title: "I",
      message: "nstall EJS"
    },
    {
      title: "S",
      message: "intaxe"
    },
  ];
  const subTitle = 'Uma linguagem de modelagem para criação de página HTML'
    res.render("pages/index", {
      qualitys: items,
      subTitle: subTitle,
    });
})

app.get("/sobre", function (req, res){
  res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");