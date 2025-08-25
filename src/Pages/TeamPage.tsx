import React, { useState, useEffect } from "react";

interface Team {
  id: string;
  name: string;
  description: string;
}

const TeamPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Team>>({});
  const [searchId, setSearchId] = useState<string>("");
  const [view, setView] = useState<"menu" | "list" | "create">("menu");
  const [newTeam, setNewTeam] = useState<Partial<Team>>({
    name: "",
    description: "",
  });

  const baseUrl = "https://localhost:44374/api/Team";

  // Fetch teams
  const fetchTeams = async () => {
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      setTeams(data);
    } catch (err) {
      console.error("Error fetching teams:", err);
    }
  };

  // Delete team
  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete team "${name}"?`)) {
      try {
        await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
        setTeams(teams.filter((t) => t.id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  // Update team
  const handleUpdate = async (id: string) => {
    try {
      const updatedTeam = { ...editData, id };
      await fetch(baseUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTeam),
      });
      setTeams(
        teams.map((t) => (t.id === id ? ({ ...t, ...editData } as Team) : t))
      );
      setEditRow(null);
      setEditData({});
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // Search team by ID
  const handleSearch = async () => {
    if (!searchId.trim()) {
      alert("Please enter a Team ID to search.");
      return;
    }
    try {
      const res = await fetch(`${baseUrl}/${searchId}`);
      if (!res.ok) {
        alert("❌ Team not found");
        return;
      }
      const team: Team = await res.json();
      alert(`✅ Team "${team.name}" found!`);
    } catch (err) {
      console.error("Search failed:", err);
      alert("❌ Error searching for team");
    }
  };

  // Create new team
  const handleCreate = async () => {
    try {
      await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTeam),
      });
      alert("✅ Team created successfully!");
      setNewTeam({ name: "", description: "" });
      setView("menu");
    } catch (err) {
      console.error("Create failed:", err);
    }
  };

  return (
    <div className="p-6">
      {/* ✅ Title in top-left */}
      <h1 className="text-2xl font-bold text-red-600 mb-6">Team Management</h1>

      {view === "menu" && (
        <div className="flex gap-8 justify-center mt-10">
          {/* List All Teams */}
          <button
            onClick={() => {
              fetchTeams();
              setView("list");
            }}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 
                       px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white 
                       transition-all duration-200"
          >
            <img src="public/images/List.svg" alt="list" className="w-28 h-28" />
            <span className="mt-4 text-lg font-bold">List All Teams</span>
          </button>

          {/* Create Team */}
          <button
            onClick={() => setView("create")}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 
                       px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white 
                       transition-all duration-200"
          >
            <img src="public/images/Create.svg" alt="create" className="w-28 h-28" />
            <span className="mt-4 text-lg font-bold">Create Team</span>
          </button>
        </div>
      )}

      {view === "list" && (
        <div>
          {/* Search bar */}
          <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Team ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="border p-2 rounded w-1/3"
            />
            <button
              onClick={handleSearch}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2"
            >
              <img src="public/images/search.svg" alt="search" className="w-8 h-8" />
              Search
            </button>
          </div>

          {/* Team table */}
          <table className="w-full border border-red-600 rounded-lg">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id} className="border-t border-red-600">
                  <td className="p-2">{team.id}</td>
                  <td className="p-2">
                    {editRow === team.id ? (
                      <input
                        value={editData.name || team.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="border p-1 rounded"
                      />
                    ) : (
                      team.name
                    )}
                  </td>
                  <td className="p-2">
                    {editRow === team.id ? (
                      <input
                        value={editData.description || team.description}
                        onChange={(e) =>
                          setEditData({ ...editData, description: e.target.value })
                        }
                        className="border p-1 rounded"
                      />
                    ) : (
                      team.description
                    )}
                  </td>
                  <td className="p-2 relative">
                    <button
                      onClick={() =>
                        setMenuOpen(menuOpen === team.id ? null : team.id)
                      }
                      className="px-2 py-1 border rounded bg-red-600 text-white hover:bg-red-700"
                    >
                      <img src="public/images/menu.svg" alt="menu" className="w-6 h-6" />
                    </button>

                    {menuOpen === team.id && (
                      <div className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-50">
                        {editRow === team.id ? (
                          <button
                            onClick={() => handleUpdate(team.id)}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            <img src="public/images/save.svg" alt="save" className="w-4 h-4" />
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setEditRow(team.id);
                              setEditData(team);
                              setMenuOpen(null);
                            }}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            <img src="public/images/edit.svg" alt="edit" className="w-4 h-4" />
                            Update
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(team.id, team.name)}
                          className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                        >
                          <img src="public/images/Delete.svg" alt="delete" className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Back button */}
          <div className="mt-4">
            <button
              onClick={() => setView("menu")}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2"
            >
              <img src="public/images/back.svg" alt="back" className="w-4 h-4" />
              Back
            </button>
          </div>
        </div>
      )}

      {view === "create" && (
        <div className="max-w-md mx-auto mt-6">
          <h2 className="text-xl font-bold mb-4 text-red-600">Create Team</h2>
          <input
            type="text"
            placeholder="Name"
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={newTeam.description}
            onChange={(e) =>
              setNewTeam({ ...newTeam, description: e.target.value })
            }
            className="border p-2 rounded w-full mb-4"
          />
          <button
            onClick={handleCreate}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Create
          </button>
          <button
            onClick={() => setView("menu")}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
