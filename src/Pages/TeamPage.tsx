import React, { useState, useEffect } from "react";

interface Team {
  id: string;
  name: string;
  description: string;
}

const TeamPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [searchId, setSearchId] = useState<string>("");
  const [view, setView] = useState<"menu" | "list" | "create">("menu");
  const [searchName, setSearchName] = useState<string>("");
  const [newTeam, setNewTeam] = useState<Partial<Team>>({
    name: "",
    description: "",
  });

  // Dialog states
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [editData, setEditData] = useState<Partial<Team>>({});

  const baseUrl = "https://localhost:44374/api/Team";

  // Fetch teams
  const fetchTeams = async () => {
    try {
      const url = searchName.trim()
      ? `${baseUrl}?search=${encodeURIComponent(searchName)}`
      : baseUrl;

      const res = await fetch(url);
      const data = await res.json();
      setTeams(data);
    } catch (err) {
      console.error("Error fetching teams:", err);
    }
  };

      useEffect(() => {
      const delayDebounce = setTimeout(() => {
        fetchTeams();
      }, 100); // wait 100ms after typing
    
      return () => clearTimeout(delayDebounce);
    }, [searchName]);

  // Delete team
  const handleDelete = async () => {
    if (!selectedTeam) return;
    try {
      await fetch(`${baseUrl}/${selectedTeam.id}`, { method: "DELETE" });
      setTeams(teams.filter((t) => t.id !== selectedTeam.id));
      setDeleteDialogOpen(false);
      setSelectedTeam(null);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Update team
  const handleUpdate = async () => {
    if (!selectedTeam) return;
    try {
      const updatedTeam = { ...editData, id: selectedTeam.id };
      await fetch(baseUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTeam),
      });
      setTeams(
        teams.map((t) =>
          t.id === selectedTeam.id ? ({ ...t, ...editData } as Team) : t
        )
      );
      setEditDialogOpen(false);
      setEditData({});
      setSelectedTeam(null);
    } catch (err) {
      console.error("Update failed:", err);
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
      {/* ✅ Show title only in menu & list views */}
      {view !== "create" && (
        <h1 className="text-2xl font-bold text-red-600 mb-6">Team Management</h1>
      )}

      {view === "menu" && (
        <div className="flex gap-65 justify-center mt-20">
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
            <img src="public/images/List.svg" alt="list" className="w-38 h-38" />
            <span className="mt-4 text-lg font-bold">List All Teams</span>
          </button>

          {/* Create Team */}
          <button
            onClick={() => setView("create")}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 
                       px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white 
                       transition-all duration-200"
          >
            <img src="public/images/Create.svg" alt="create" className="w-38 h-38" />
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
              placeholder="Search By Service Name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="p-2 rounded w-1/3 bg-gray-100"
            />
          </div>

          {/* Team table */}
          <table className="w-full text-sm text-left text-gray-600">
            <thead>
              <tr className="bg-gray-100 text-gray-500 text-xs uppercase">
                
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {teams.map((team) => (
                <tr
                  key={team.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  
                  <td className="px-6 py-4 font-semibold text-gray-800">{team.name}</td>
                  <td className="px-6 py-4">{team.description}</td>
                  <td className="px-6 py-4 text-center relative">
                    {/* Actions Menu */}
                    <button
                      onClick={() =>
                        setMenuOpen(menuOpen === team.id ? null : team.id)
                      }
                      className="p-2 rounded-full hover:bg-white-200 transition"
                    >
                      ⋮
                    </button>

                    {menuOpen === team.id && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg z-50 overflow-hidden">
                        <button
                          onClick={() => {
                            setSelectedTeam(team);
                            setEditData(team);
                            setEditDialogOpen(true);
                            setMenuOpen(null);
                          }}
                          className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                           <img src="public/images/update.svg" alt="update" className="w-4 h-4" /> Update
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTeam(team);
                            setDeleteDialogOpen(true);
                            setMenuOpen(null);
                          }}
                          className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-red-50 text-red-600"
                        >
                           <img src="public/images/Delete.svg" alt="delete" className="w-6 h-6" /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

      {/* Update Dialog */}
      {editDialogOpen && selectedTeam && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-red-600">Update Team</h2>
            <input
              type="text"
              value={editData.name || ""}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
              className="border p-2 rounded w-full mb-2"
              placeholder="Name"
            />
            <input
              type="text"
              value={editData.description || ""}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
              className="border p-2 rounded w-full mb-4"
              placeholder="Description"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditDialogOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {deleteDialogOpen && selectedTeam && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-lg font-bold text-red-600 mb-4">Confirm Delete</h2>
            <p className="mb-6">
              Are you sure you want to delete team{" "}
              <span className="font-semibold">"{selectedTeam.name}"</span>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteDialogOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
