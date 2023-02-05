import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { debounce } from "lodash";
import React from "react";
import styled from "styled-components";
import { db } from "../firebase-auth/firebase";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const InputStyles = styled.input`
  padding: 5px 8px;
  border: none;
  outline: none;
  border: 1px solid blue;
  border-radius: 20px;
  margin: 10px 10px 0px 10px;
`;
const DivStyles = styled.div`
  width: 300px;
  margin: 30px auto;
  border: 2px dashed blue;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: max-content;
    display: flex;
    transform: translateX(-50%);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    li {
      list-style: none;
    }
  }
`;
const Firebase = () => {
  const [name, setName] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const [list, setList] = React.useState([]);
  const searchInput = React.useRef();
  const navigate = useNavigate();
  const handleChangeValue = debounce((e) => {
    setName(e.target.value);
  }, 1000);
  const handleAddUsers = (e) => {
    const userRef = collection(db, "Users");
    e.preventDefault();
    //add data to firebase
    addDoc(userRef, {
      name,
    })
      .then((success) => {
        console.log("successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
    setName("");
  };
  React.useEffect(() => {
    const userRef = collection(db, "Users");
    getDocs(userRef).then((snapshot) => {
      let post = [];
      snapshot.forEach((doc) => {
        post.push({
          name,
          ...doc?.data(),
        });
      });
      setList(post);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  // Search data to firebase
  React.useEffect(() => {
    const userRef = collection(db, "Users");
    const newRef = filter
      ? query(
          userRef,
          where("name", ">=", filter),
          where("name", "<=", filter + "utf8")
        )
      : userRef;
    onSnapshot(newRef, (snapshot) => {
      let nameFirebase = [];
      snapshot.forEach((doc) => {
        nameFirebase.push({
          id: doc.id,
          ...doc?.data(),
        });
      });
      console.log(nameFirebase);
      setList(nameFirebase);
    });
  }, [filter]);
  const handleChangeSearch = (e) => {
    setFilter(e.target.value);
  };
  React.useEffect(() => {
    if (document.activeElement === searchInput.current) {
      navigate(`/${"?Search=" + filter}`);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return (
    <>
      <div>
        <div>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            placeholder="Search name"
            id="search"
            name="search"
            className="border border-blue-500 rounded-[20px] px-[8px] py-[5px] mt-[30px] ml-[10px]"
            onChange={handleChangeSearch}
            ref={searchInput}
            autoComplete="off"
          />
        </div>
        <form onSubmit={handleAddUsers}>
          <label htmlFor="users">Firebase:</label>
          <InputStyles
            type="text"
            name="users"
            id="users"
            autoComplete="off"
            placeholder="Enter your account"
            onChange={handleChangeValue}
          />
          <button type={"submit"} className="text-white bg-blue-300">
            addName
          </button>
        </form>
      </div>
      <DivStyles>
        <ul>
          {list.map((item) => (
            <li key={uuidV4()}>{item.name}</li>
          ))}
        </ul>
      </DivStyles>
    </>
  );
};

export default Firebase;
