
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config.json');
const mysql = require('mysql2/promise');
//import routes
const dotenv = require('dotenv');

const db = require('./config/database')

// const users = require('./routes/users');
// const posts = require('./routes/posts');
// const comments = require('./routes/comment');
// const categories = require('./routes/category');
const types = require('./routes/types');
const sign = require('./routes/auth')
//Models
const User = require('./models/user');
// const Post = require('./models/post');
// const Comment = require('./models/comment');
// const Category = require('./models/category');
const Type = require('./models/type');
// const Tag = require('./models/tag');

const app = express();

app.use(cors())
// app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config()
initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
}

// app.use('/user',users)
// app.use('/post',posts)
// app.use('/comment',comments)
// app.use('/category',categories)
app.use('/type', types)
app.use(sign)

// Post.belongsTo(User)
// User.hasMany(Post)

User.belongsTo(Type, {
    foreignKey: { 
        allowNull: false,
    }, 
    onDelete: 'CASCADE'
});
// Type.hasMany(User)

// Post.hasMany(Comment);
// Comment.belongsTo(Post);

// User.hasMany(Comment);
// Comment.belongsTo(User);

// Category.hasMany(Post);
// Post.belongsTo(Category);

// Tag.belongsToMany(Post, {through: 'TagsOfPost'});
// Post.belongsToMany(Tag, {through: 'TagsOfPost'});

app.listen(5000, () => console.log('Server ON'))
// db.sync({force: true})
// db.sync()
//           .then(result => {
              
//           })
//           .catch((err) => {
//               console.log('error: ', err)
//           })