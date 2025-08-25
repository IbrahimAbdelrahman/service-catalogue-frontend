import React, { useState, useEffect } from "react";

interface Squad {
  id: string;
  name: string;
  description: string;
  teamId: string;
  leaderId: string;
}

const SquadList: React.FC = () => {
  const [squads, setSquads] = useState<Squad[]>([]);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Squad>>({});
  const [searchId, setSearchId] = useState<string>("");
  const [view, setView] = useState<"menu" | "list" | "create">("menu");
  const [newSquad, setNewSquad] = useState<Partial<Squad>>({
    name: "",
    description: "",
    teamId: "",
    leaderId: "",
  });

  const baseUrl = "https://localhost:44374/api/Squad";

  // Fetch squads
  const fetchSquads = async () => {
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      setSquads(data);
    } catch (err) {
      console.error("Error fetching squads:", err);
    }
  };

  // Delete squad
  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete squad "${name}"?`)) {
      try {
        await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
        setSquads(squads.filter((s) => s.id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  // Update squad
  const handleUpdate = async (id: string) => {
    try {
      const updatedSquad = { ...editData, id };
      await fetch(baseUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSquad),
      });
      setSquads(
        squads.map((s) =>
          s.id === id ? ({ ...s, ...editData } as Squad) : s
        )
      );
      setEditRow(null);
      setEditData({});
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // Search squad by ID
  const handleSearch = async () => {
    if (!searchId.trim()) {
      alert("Please enter a Squad ID to search.");
      return;
    }
    try {
      const res = await fetch(`${baseUrl}/${searchId}`);
      if (!res.ok) {
        alert("❌ Squad not found");
        return;
      }
      const squad: Squad = await res.json();
      alert(`✅ Squad "${squad.name}" found!`);
    } catch (err) {
      console.error("Search failed:", err);
      alert("❌ Error searching for squad");
    }
  };

  // Create new squad
  const handleCreate = async () => {
    try {
      await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSquad),
      });
      alert("✅ Squad created successfully!");
      setNewSquad({ name: "", description: "", teamId: "", leaderId: "" });
      setView("menu");
    } catch (err) {
      console.error("Create failed:", err);
    }
  };

  return (
    <div className="p-6">
      {/* ✅ Title in top-left */}
      <h1 className="text-2xl font-bold text-red-600 mb-6">Squad Management</h1>

      {view === "menu" && (
        <div className="flex gap-8 justify-center mt-10">
          {/* List All Squads */}
          <button
            onClick={() => {
              fetchSquads();
              setView("list");
            }}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 
                       px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white 
                       transition-all duration-200"
          >
            <img src="public/images/list.svg" alt="list" className="w-28 h-28" />
            <span className="mt-4 text-lg font-bold">List All Squads</span>
          </button>

          {/* Create Squad */}
          <button
            onClick={() => setView("create")}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 
                       px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white 
                       transition-all duration-200"
          >
            <img src="public/images/Create.svg" alt="create" className="w-28 h-28" />
            <span className="mt-4 text-lg font-bold">Create Squad</span>
          </button>
        </div>
      )}

      {view === "list" && (
        <div>
          {/* Search bar */}
          <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Squad ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="border p-2 rounded w-1/3"
            />
            <button
              onClick={handleSearch}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2"
            >
              <img src="public/images/Search.svg" alt="search" className="w-8 h-8" />
              Search
            </button>
          </div>

          {/* Squad table */}
          <table className="w-full border border-red-600 rounded-lg">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Team ID</th>
                <th className="p-2 text-left">Leader ID</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {squads.map((squad) => (
                <tr key={squad.id} className="border-t border-red-600">
                  <td className="p-2">{squad.id}</td>
                  <td className="p-2">
                    {editRow === squad.id ? (
                      <input
                        value={editData.name || squad.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="border p-1 rounded"
                      />
                    ) : (
                      squad.name
                    )}
                  </td>
                  <td className="p-2">
                    {editRow === squad.id ? (
                      <input
                        value={editData.description || squad.description}
                        onChange={(e) =>
                          setEditData({ ...editData, description: e.target.value })
                        }
                        className="border p-1 rounded"
                      />
                    ) : (
                      squad.description
                    )}
                  </td>
                  <td className="p-2">
                    {editRow === squad.id ? (
                      <input
                        value={editData.teamId || squad.teamId}
                        onChange={(e) =>
                          setEditData({ ...editData, teamId: e.target.value })
                        }
                        className="border p-1 rounded"
                      />
                    ) : (
                      squad.teamId
                    )}
                  </td>
                  <td className="p-2">
                    {editRow === squad.id ? (
                      <input
                        value={editData.leaderId || squad.leaderId}
                        onChange={(e) =>
                          setEditData({ ...editData, leaderId: e.target.value })
                        }
                        className="border p-1 rounded"
                      />
                    ) : (
                      squad.leaderId
                    )}
                  </td>
                  <td className="p-2 relative">
                    <button
                      onClick={() =>
                        setMenuOpen(menuOpen === squad.id ? null : squad.id)
                      }
                      className="px-2 py-1 border rounded bg-red-600 text-white hover:bg-red-700"
                    >
                      <img src="public/images/menu.svg" alt="menu" className="w-6 h-6" />
                    </button>

                    {menuOpen === squad.id && (
                      <div className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-50">
                        {editRow === squad.id ? (
                          <button
                            onClick={() => handleUpdate(squad.id)}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            <img src="public/images/save.svg" alt="save" className="w-4 h-4" />
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setEditRow(squad.id);
                              setEditData(squad);
                              setMenuOpen(null);
                            }}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            <img src="public/images/edit.svg" alt="edit" className="w-4 h-4" />
                            Update
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(squad.id, squad.name)}
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
          <h2 className="text-xl font-bold mb-4 text-red-600">Create Squad</h2>
          <input
            type="text"
            placeholder="Name"
            value={newSquad.name}
            onChange={(e) => setNewSquad({ ...newSquad, name: e.target.value })}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={newSquad.description}
            onChange={(e) =>
              setNewSquad({ ...newSquad, description: e.target.value })
            }
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Team ID"
            value={newSquad.teamId}
            onChange={(e) =>
              setNewSquad({ ...newSquad, teamId: e.target.value })
            }
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Leader ID"
            value={newSquad.leaderId}
            onChange={(e) =>
              setNewSquad({ ...newSquad, leaderId: e.target.value })
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

export default SquadList;
