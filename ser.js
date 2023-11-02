const express = require('express');
const mongoose = require('mongoose');

let app = express();

async function connect() {
    let connection = await mongoose.connect('mongodb://0.0.0.0:27017/frist');
    if (!connection) {
        console.log('you have error')
    } else {
        console.log('DB now is connected')
    }
}
connect();

app.listen(3000, function () {
    console.log('server is opend')
});

const studentSchema = new mongoose.Schema({
    name: String,
    phone: String,
    password: String,
    age: Number,
    address: String
});

const courseSchema = new mongoose.Schema({
    name: String,
    description: String
  });

const student = new mongoose.model("student", studentSchema);
const Course = mongoose.model("Course", courseSchema);  

const student1 = new student({
    name: 'omar',
    phone: '123456789',
    password: '********',
    age: 25,
    address: 'egypt'
  }).save();

  const student2 = new student({
    name: 'Ahmed',
    phone: '28445452',
    password: '***',
    age: 21,
    address: 'egypt'
  }).save();

  const course1 = new Course({
    name: 'network',
    description: 'how to build wan',
  }).save();

  const course2 = new Course({
    name: 'java',
    description: 'how to build mobile app',
  }).save();

  app.get('/studentss',async(req,res)=>{
    const allstudents = await student.find();
    res.status(200);
    res.json(allstudents);
  })

  app.get('/coursess',async(req,res)=>{
    const allcourses = await Course.find();
    res.status(200);
    res.json(allcourses);
  })


