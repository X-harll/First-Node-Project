const express = require("express");

//INITIALISE EXPRESS

const noddy = express();
noddy.use(express.json());

//HTTPS METHOD -> GET POST PUT DELETE
//GET -> To retrieve any data
//Post -> To send data to the Server
//Put -> To update an existing data
//Delete -> To delete an existing data

noddy.get("/", (request,response) => {
  return response.json({data: "Hello Guys"})
});

noddy.get("/b:id", (req,res) => {
  const students = [
    {
      id: 1,
      name: "Student1"
    },
    {
      id: 2,
      name: "Student2"
    },
    {
      id: 3,
      name: "Student3"
    },
    {
      id: 4,
      name: "Student4"
    },
    {
      id: 5,
      name: "Student5"
    }
  ]
  const studentID = req.params.id;
  const getStudent = students.filter((student) => student.id === parseInt(studentID));
  return res.json({data: getStudent});
});

noddy.listen(3000, () => {
  console.log("Server on 3000 is up and running");
});
