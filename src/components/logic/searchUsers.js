import userBaseDeDatos from "../../Users";

const searchUsers = (idUser) => {
  if (!idUser) return -1;
  
  const user = userBaseDeDatos.find(
    (item) => item.id.toLowerCase() == idUser.toLowerCase()
  );
  return user ? user : { result: "No found" };
};

export default searchUsers;
