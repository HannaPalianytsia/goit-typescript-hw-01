type User4 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User4>): User4 {
  const defaultUser: User4 = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaultUser, ...initialValues };
}

let someUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log("generics 4:", someUser);
