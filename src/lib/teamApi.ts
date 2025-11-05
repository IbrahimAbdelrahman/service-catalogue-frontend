import axios from "axios";

const API_URL = "http://localhost:5000/api/team"; // change port if needed

export interface Team {
  id: string;
  name: string;
  description: string;
}

export interface TeamRequest {
  name: string;
  description: string;
}

export const getTeams = async (): Promise<Team[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTeam = async (team: TeamRequest): Promise<Team> => {
  const res = await axios.post(API_URL, team);
  return res.data;
};

export const updateTeam = async (id: string, team: TeamRequest): Promise<void> => {
  await axios.put(`${API_URL}/${id}`, team);
};

export const deleteTeam = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
