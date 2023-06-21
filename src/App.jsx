import { useState } from "react";
import "./App.css";
import "./index.css";
import { Label, TextInput, Button } from "flowbite-react";
import UserProfileCard from "./components/UserProfileCard.jsx";

function App() {
  // array contains list of friends added
  const [friendList, setFriendList] = useState([]);

  // beginner way: how to store data
  // const [name, setName] = useState("");

  // pro way: how to store data
  const [userInfo, setUserInfo] = useState({
    name: "",
    position: "",
  });

  const handleChange = (e) => {
    const key = e.target.id;
    const val = e.target.value;

    // setting using beginner way
    // setName(name)

    // setting values upon change 
    setUserInfo((prev) => ({ ...prev, [key]: val }));
  };

  const handleClick = () => {
    // how to do debugging
    console.log(`Upon click ${userInfo}`);

    setFriendList([...friendList, userInfo]);

    /* ngaa delay?? */
    console.log(friendList);
  };

  return (
    <>
      <div className="col-3">
        {/* TODO: Refactor this. must create component */}
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="name" />
            </div>
            <TextInput
              id="name"
              placeholder="name"
              required
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="position" value="position" />
            </div>
            <TextInput
              id="position"
              placeholder="position"
              required
              type="text"
              onChange={handleChange}
            />
          </div>
          {/* HTML vs JSX on Event Handler */}
          <Button onClick={handleClick} type="button">
            Submit
          </Button>
        </form>
        {friendList.map((friend) => (
          <UserProfileCard key={friend} user={friend} color="blue" />
        ))}
      </div>
    </>
  );
}

export default App;
