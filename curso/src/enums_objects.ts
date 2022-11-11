enum Roles {
  USER,
  ADMIN = "ADMIN",
  SUPERADMIN = 5,
}

console.log(Roles.USER);

const Ranks = {
  MOD: "MOD",
  ADMIN: 1,
  USER: 0,
};

console.log(Ranks)

export { Roles };
