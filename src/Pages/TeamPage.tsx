import React, { useState } from "react";
import axios from "axios";

const API_BASE = "https://localhost:44374/api/Team";

const TeamPage: React.FC = () => {
  const [mode, setMode] = useState<null | string>(null);
  const [teamId, setTeamId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [teams, setTeams] = useState<any[]>([]);

  // CRUD Functions
  const listTeams = async () => {
    try {
      const res = await axios.get(API_BASE);
      setTeams(res.data);
      setMessage("Fetched all teams ✅");
      setMode("list");
    } catch (err: any) {
      setMessage(`Error fetching teams ❌: ${err.message}`);
    }
  };

  const getTeam = async () => {
    try {
      const res = await axios.get(`${API_BASE}/${teamId}`);
      setMessage(`Team fetched: ${res.data.name}`);
    } catch {
      setMessage("Error fetching team ❌");
    }
  };

  const createTeam = async () => {
    try {
      await axios.post(API_BASE, { name, description });
      setMessage("Team created ✅");
    } catch {
      setMessage("Error creating team ❌");
    }
  };

  const updateTeam = async () => {
    try {
      await axios.put(`${API_BASE}/${teamId}`, { name, description });
      setMessage("Team updated ✅");
    } catch {
      setMessage("Error updating team ❌");
    }
  };

  const deleteTeam = async () => {
    try {
      await axios.delete(`${API_BASE}/${teamId}`);
      setMessage("Team deleted ✅");
    } catch {
      setMessage("Error deleting team ❌");
    }
  };

  // Form Renderer
  const renderForm = () => {
    const backButton = (
      <button
        onClick={() => setMode(null)}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Back
      </button>
    );

    switch (mode) {
      case "get":
        return (
          <div className="mt-4">
            <input
              placeholder="Enter Team ID"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={getTeam}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Fetch Team
            </button>
            {backButton}
          </div>
        );
      case "create":
        return (
          <div className="mt-4">
            <input
              placeholder="Team Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Team Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={createTeam}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Create Team
            </button>
            {backButton}
          </div>
        );
      case "update":
        return (
          <div className="mt-4">
            <input
              placeholder="Enter Team ID"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Team Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Team Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={updateTeam}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Update Team
            </button>
            {backButton}
          </div>
        );
      case "delete":
        return (
          <div className="mt-4">
            <input
              placeholder="Enter Team ID"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={deleteTeam}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete Team
            </button>
            {backButton}
          </div>
        );
      case "list":
        return (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">All Teams</h2>
            {teams.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2 text-left">ID</th>
                      <th className="border px-4 py-2 text-left">Name</th>
                      <th className="border px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((t) => (
                      <tr key={t.id} className="hover:bg-gray-50">
                        <td className="border px-4 py-2">{t.id}</td>
                        <td className="border px-4 py-2">{t.name}</td>
                        <td className="border px-4 py-2">{t.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No teams found.</p>
            )}
            {backButton}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Team Management</h1>

      {!mode && (
        <div className="grid grid-cols-2 gap-6">
          {/* Each button is styled as a white rectangle with image + label */}
          <button
            onClick={listTeams}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            <img src="public/Images/List.svg" alt="List" className="w-10 h-10 mb-2" />
            <span className="font-medium">List All Teams</span>
          </button>

          <button
            onClick={() => setMode("get")}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            <img src="public/Images/Get team.svg" alt="Get" className="w-10 h-10 mb-2" />
            <span className="font-medium">Get Team</span>
          </button>

          <button
            onClick={() => setMode("create")}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            <img src="public/Images/Create.svg" alt="Create" className="w-10 h-10 mb-2" />
            <span className="font-medium">Create Team</span>
          </button>

          <button
            onClick={() => setMode("update")}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            <img src="public/Images/Update.svg" alt="Update" className="w-10 h-10 mb-2" />
            <span className="font-medium">Update Team</span>
          </button>

          <button
            onClick={() => setMode("delete")}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            <img src="public/Images/Delete.svg" alt="Delete" className="w-10 h-10 mb-2" />
            <span className="font-medium">Delete Team</span>
          </button>
        </div>
      )}

      {renderForm()}

      {message && <p className="mt-4 font-semibold">{message}</p>}
    </div>
  );
};

export default TeamPage;
