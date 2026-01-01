const users = [
  {
    id: 1,
    email: "admin@eventflow.com",
    password: "password",
    role: "admin",
    name: "Admin User",
  },
  {
    id: 2,
    email: "ceo@eventflow.com",
    password: "password",
    role: "ceo",
    name: "CEO User",
  },
  {
    id: 3,
    email: "user@eventflow.com",
    password: "password",
    role: "user",
    name: "Regular User",
  },
];

export const login = async (email, password) => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return Promise.resolve(user);
  } else {
    return Promise.reject("Invalid email or password");
  }
};

export const logout = async () => {
  return Promise.resolve();
};
