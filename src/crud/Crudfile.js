import React, { useEffect, useState } from "react";
import "./crud.css";
import { Employedata } from "./Employedata";
function Crudfile() {
  const [data, setData] = useState([]);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isupdate, setUpdate] = useState(false);

  useEffect(() => {
    setData(Employedata);
  }, []);

  function handleEdit(id) {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setUpdate(true);
      setId(id);
      setFname(dt[0].FirstName);
      setLname(dt[0].LastName);
      setAge(dt[0].age);
    }
  }
  function handleDelete(id) {
    if (id > 0) {
      if (window.confirm("are you to confirm")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  }

  function handleSave(e) {
    let error = "";
    if (fname === "") error += "please fill the name, ";
    if (lname === "") error += "please fill the name, ";
    if (age <= 0) error += "please fill the age";

    if (error === "") {
      e.preventDefault();
      const dt = [...data];
      const newObject = {
        id: Employedata.length + 1,
        FirstName: fname,
        LastName: lname,
        age: age,
      };
      dt.push(newObject);
      setData(dt);
    } else {
      alert(error);
    }
  }

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const dt = [...data];
    dt[index].FirstName = fname;
    dt[index].LastName = lname;
    dt[index].age = age;
    setData(dt);
    handleClear();
  };

  function handleClear() {
    setId(0);
    setFname("");
    setLname("");
    setAge("");
    setUpdate(false);
  }

  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        <div>
          <label>FirstName:</label>
          <input
            type="text"
            placeholder="Enter First name"
            onChange={(e) => setFname(e.target.value)}
            value={fname}
          />
        </div>
        <div>
          <label>LastName:</label>
          <input
            type="text"
            placeholder="Enter Last name"
            onChange={(e) => setLname(e.target.value)}
            value={lname}
          />
        </div>{" "}
        <div>
          <label>Age:</label>
          <input
            type="text"
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div className="btn1 m-4 mt-4">
          {!isupdate ? (
            <button
              className="btn btn-primary"
              id="btnsave"
              onClick={(e) => handleSave(e)}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary"
              id="btnsave1"
              onClick={() => handleUpdate()}
            >
              Upadate
            </button>
          )}
          <button className="btn btn-danger" onClick={() => handleClear()}>
            Clear
          </button>
        </div>
      </div>

      <table className="table table hover">
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>Id</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Crudfile;
