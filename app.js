const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes

const users = require('./routes/users');
const posts = require('./routes/posts');
const comments = require('./routes/comment');
const categories = require('./routes/category');
const types = require('./routes/types');


//Connection with MySQL
const connection = require('./config/database');

//Models
const User = require('./models/user');
const Post = require('./models/post');
const Comment = require('./models/comment');
const Category = require('./models/category');
const Type = require('./models/type');
const Tag = require('./models/tag');

const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/user',users)
app.use('/post',posts)
app.use('/comment',comments)
app.use('/category',categories)
app.use('/type', types)


Post.belongsTo(User)
User.hasMany(Post)

User.belongsTo(Type)
Type.hasMany(User)

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Comment);
Comment.belongsTo(User);

Category.hasMany(Post);
Post.belongsTo(Category);

Tag.belongsToMany(Post, {through: 'TagsOfPost'});
Post.belongsToMany(Tag, {through: 'TagsOfPost'});

connection.sync()
          .then(result => {
              app.listen(5000, () => console.log('Server ON'))
          })
          .catch((err) => {
              console.log('error: ', err)
          })