import React, { useState } from "react";
import axios from "axios";

const API_BASE = "https://localhost:44374/api/Squad";

const SquadPage: React.FC = () => {
  const [mode, setMode] = useState<null | string>(null);
  const [squadId, setSquadId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [teamId, setTeamId] = useState("");
  const [leaderId, setLeaderId] = useState("");
  const [message, setMessage] = useState("");
  const [squads, setSquads] = useState<any[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<any | null>(null);

  // CRUD Functions
  const listSquads = async () => {
    try {
      const res = await axios.get(API_BASE);
      setSquads(res.data);
      setMessage("Fetched all squads ✅");
      setMode("list");
    } catch (err: any) {
      setMessage(`Error fetching squads ❌: ${err.message}`);
    }
  };

  const getSquad = async () => {
    try {
      const res = await axios.get(`${API_BASE}/${squadId}`);
      setSelectedSquad(res.data);
      setMessage(`Squad fetched: ${res.data.name}`);
    } catch {
      setMessage("Error fetching squad ❌");
    }
  };

  const createSquad = async () => {
    try {
      await axios.post(API_BASE, { name, description, teamId, leaderId });
      setMessage("Squad created ✅");
    } catch {
      setMessage("Error creating squad ❌");
    }
  };

  const updateSquad = async () => {
    try {
      await axios.put(API_BASE, { id: squadId, name, description, teamId, leaderId });
      setMessage("Squad updated ✅");
    } catch {
      setMessage("Error updating squad ❌");
    }
  };

  const deleteSquad = async () => {
    try {
      await axios.delete(`${API_BASE}/${squadId}`);
      setMessage("Squad deleted ✅");
    } catch {
      setMessage("Error deleting squad ❌");
    }
  };

  // Form Renderer
  const renderForm = () => {
    const backButton = (
      <button
        onClick={() => {
          setMode(null);
          setSelectedSquad(null);
        }}
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
              placeholder="Enter Squad ID"
              value={squadId}
              onChange={(e) => setSquadId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={getSquad}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Fetch Squad
            </button>

            {selectedSquad && (
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Description</th>
                      <th className="border px-4 py-2">Team</th>
                      <th className="border px-4 py-2">Leader</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">{selectedSquad.id}</td>
                      <td className="border px-4 py-2">{selectedSquad.name}</td>
                      <td className="border px-4 py-2">{selectedSquad.description}</td>
                      <td className="border px-4 py-2">{selectedSquad.team?.name}</td>
                      <td className="border px-4 py-2">{selectedSquad.leaderId}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {backButton}
          </div>
        );

      case "create":
        return (
          <div className="mt-4">
            <input
              placeholder="Squad Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Squad Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Team ID"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Leader ID"
              value={leaderId}
              onChange={(e) => setLeaderId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={createSquad}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Create Squad
            </button>
            {backButton}
          </div>
        );

      case "update":
        return (
          <div className="mt-4">
            <input
              placeholder="Enter Squad ID"
              value={squadId}
              onChange={(e) => setSquadId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Squad Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Squad Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Team ID"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Leader ID"
              value={leaderId}
              onChange={(e) => setLeaderId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={updateSquad}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Update Squad
            </button>
            {backButton}
          </div>
        );

      case "delete":
        return (
          <div className="mt-4">
            <input
              placeholder="Enter Squad ID"
              value={squadId}
              onChange={(e) => setSquadId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={deleteSquad}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete Squad
            </button>
            {backButton}
          </div>
        );

      case "list":
        return (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">All Squads</h2>
            {squads.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Description</th>
                      <th className="border px-4 py-2">Team</th>
                      <th className="border px-4 py-2">Leader</th>
                    </tr>
                  </thead>
                  <tbody>
                    {squads.map((s) => (
                      <tr key={s.id} className="hover:bg-gray-50">
                        <td className="border px-4 py-2">{s.id}</td>
                        <td className="border px-4 py-2">{s.name}</td>
                        <td className="border px-4 py-2">{s.description}</td>
                        <td className="border px-4 py-2">{s.team?.name}</td>
                        <td className="border px-4 py-2">{s.leaderId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No squads found.</p>
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
      <h1 className="text-2xl font-bold mb-6">Squad Management</h1>

      {!mode && (
        <div className="grid grid-cols-2 gap-6">
          <button
            onClick={listSquads}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            <img src="public/Images/List.svg" alt="List" className="w-10 h-10 mb-2" />
            <span className="font-medium">List All Squads</span>
          </button>

          <button
            onClick={() => setMode("get")}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            <img src="public/Images/Get squad.svg" alt="Get" className="w-10 h-10 mb-2" />
            <span className="font-medium">Get Squad</span>
          </button>

          <button
            onClick={() => setMode("create")}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            <img src="public/Images/Create.svg" alt="Create" className="w-10 h-10 mb-2" />
            <span className="font-medium">Create Squad</span>
          </button>

          <button
            onClick={() => setMode("update")}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            <img src="public/Images/Update.svg" alt="Update" className="w-10 h-10 mb-2" />
            <span className="font-medium">Update Squad</span>
          </button>

          <button
            onClick={() => setMode("delete")}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            <img src="public/Images/Delete.svg" alt="Delete" className="w-10 h-10 mb-2" />
            <span className="font-medium">Delete Squad</span>
          </button>
        </div>
      )}

      {renderForm()}

      {message && <p className="mt-4 font-semibold">{message}</p>}
    </div>
  );
};

export default SquadPage;
