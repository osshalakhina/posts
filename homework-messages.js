// Task1. С не меняющимися данными.

const index = () => {
  return element;
};

function userData(user) {
  return (
    user.firstName + " " + user.lastName + " you are " + user.age + " years old"
  );
}

const user = {
  id: 1,
  firstName: "Olga",
  lastName: "Kosov",
  age: 33,
};

const element = <h1>Hello, {userData(user)}!</h1>;

// Task2. С меняющимися данными.

const MyComponent = () => {
  const [name, setName] = useState("Olga");
  const [surname, setSurName] = useState("Kosov");
  const [age, setAge] = useState(33);

  return (
    <div>
      <p>
        Привет, {name} {surname}!
      </p>
      <p>Тебе {age} лет.</p>
    </div>
  );
};

export default MyComponent;

// Task 3. С несколькими меняющимися данными.

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map((user) => (
          <User key={user.index} user={user} />
        ))}
      </ul>
    </div>
  );
};

const User = ({ user }) => {
  return (
    <li STYLE="list-style-type:  none;">
      <p>Hello, my name is {`${user.firstName} ${user.lastName}`}</p>
      <p>And I am: {user.age} years old</p>
    </li>
  );
};

const App = () => {
  const users = [
    {
      index: 1,
      firstName: "Olga",
      lastName: "Kosov",
      age: 33,
    },
    {
      index: 2,
      firstName: "Olga",
      lastName: "Kosov",
      age: 33,
    },
    {
      index: 3,
      firstName: "Olga",
      lastName: "Kosov",
      age: 33,
    },
  ];

  return <UserList users={users} />;
};
