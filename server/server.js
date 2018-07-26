require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const projectCreationController = require('./projectCreationController');
const massive = require('massive');
const session = require('express-session');
const app = express();
const   { 
            PORT,
            DATABASE_CONNECTION,
        } = process.env;

app.use(bodyParser.json());

massive( DATABASE_CONNECTION ).then( (db) => app.set('db',db))

app.post('/api/addProject', projectCreationController.addProject);
app.get('/api/getAllProjects', projectCreationController.getAllProjects);
app.get('/api/getProject/:projectId', projectCreationController.getProject);
app.put('/api/saveProject/:projectId', projectCreationController.saveProject)

app.listen(PORT, ()=> console.log(`Kicking things off on port ${PORT}`))