export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

console.log("generics 5:", RoleDescription);
