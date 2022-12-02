import http from "../http-common";

const getAll = () => {
  return http.get("/allLivres");
};

const get = id => {
  return http.get(`/livres/${id}`);
};

const create = data => {
  return http.post("/addOneLivre", data);
};

const update = (id, data) => {
  return http.put(`/updateOnelivres/${id}`, data);
};

const remove = id => {
  return http.delete(`/deleteLivre/${id}`);
};

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

const findByTitle = title => {
  return http.get(`/livre?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  
  findByTitle
};

export default TutorialService;