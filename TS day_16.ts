// Day 16  Ts
// Enums in TS

enum Roles {
  user = "user",
  admin = "admin",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1 = {
  email: "abcd@gmail.com",
  password: "1234567",
  role: Roles.user,
};

const user2 = {
  email: "123d@gmail.com",
  password: "aahdh",
  role: Roles.admin,
};

const isAdmin = (user: LoginDetails): string => {
  const { name, email, role } = user;
  return role == "admin" ? `${email} is allow to edit the website` : `${email} is not allow to edit the website`;
};

console.log(isAdmin(user1));
console.log(isAdmin(user2));
