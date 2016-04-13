var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var posts = []

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')


app.get("/", function (request, response) {
  response.render("home")
})

app.get("/posts", function (request, response) {
  response.render("posts", { posts: posts })
})

app.get("/:name", function (request, response) {
  var viewStuff = {
    the_name: request.params["name"]
  }

  response.render("name", viewStuff)
})

app.get("/posts/new", function (request, response) {
  response.render("posts_new")
})

app.post("/posts", function (request, response) {
  posts.push(request.body)

  response.redirect("/posts")
})

app.listen(4567)
