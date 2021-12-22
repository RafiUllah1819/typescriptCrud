import React, { ChangeEvent, FC, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { record } from "../interfaces";
import { toast } from "react-toastify";

interface Props {}

const AddRecord: FC<Props> = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [list, setList] = useState<record[]>([]);
  const [index, setIndex] = useState(null);
  console.log(list);

  const addData = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const obj = { name, address, age };
    const copy = [...list];
    if (name.length && address.length) {
      //check length of name and address
      if (index === null)  copy.push(obj);
        //   const task = { name:name , address:address , age:age }
        //   setList([...list, task])
       else copy.splice(index, 1, obj);
        setList(copy)
        success(`${index===null ? "Record added" : "Record Updated"}`);
        setList(copy);
        emptyFields()
      } else  if (!name.length) error("Name is empty"); 
              if (!address.length) error("Address is empty");  
       };

  const editData = (id:any) => {
    setIndex(id)
    setName(list[id].name);
    setAddress(list[id].address);
    setAge(list[id].age);
  };

  const emptyFields = () =>{
    setIndex(null);
    setName("");
    setAddress("");
    setAge(0);
  }

  const deleteRecord = (i: any) => {
    const copy = [...list];
    copy.splice(i, 1);
    setList(copy);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };
  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>): void => {
    setAddress(event.target.value);
  };
  const onChangeAge = (event: ChangeEvent<HTMLInputElement>): void => {
    setAge(parseInt(event.target.value));
  };

  const error = (msg: any) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const success = (msg: any) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="data">
      <div className="Add-record">
        <form action="">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              onChange={onChangeName}
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Address"
              onChange={onChangeAddress}
              value={address}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              placeholder="Age"
              onChange={onChangeAge}
              value={age}
            />
          </div>

          <div className="form-btn">
            <button onClick={addData} className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="total">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((data: record, i: number) => {
              return (
                <TableRow key={i}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.address}</TableCell>
                  <TableCell>{data.age}</TableCell>
                  <TableCell>
                    <button
                      onClick={() => editData(i)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => {
                        if (window.confirm("DO you want to delete record"))
                          deleteRecord(i);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default AddRecord;