import axios from "axios";

async function getAllPeople({ onlyMoreTwo } = { onlyMoreTwo: false }) {
  return await axios.get(`/people?${onlyMoreTwo ? "onlyMoreTwo=true" : ""}`);
}

async function getPeopleById(id: string) {
  return await axios.get(`/people/${id}`);
}

export { getAllPeople, getPeopleById };
