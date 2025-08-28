import React, { useState, useEffect } from "react";

interface Squad {
  id: string;
  name: string;
  description: string;
  teamId: string;
  leaderId: string;
  teamName: string;
  leaderName: string;
}

interface DisplayTeam {
  id: string;
  name: string;
}

interface DisplayMember {
  id: string;
  name: string;
}

const SquadList: React.FC = () => {
  const [squads, setSquads] = useState<Squad[]>([]);
  const [teams, setTeams] = useState<DisplayTeam[]>([]);
  const [members, setMembers] = useState<DisplayMember[]>([]);
  const [searchName, setSearchName] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Squad>>({});
  

  const [view, setView] = useState<"menu" | "list" | "create">("menu");
  const [newSquad, setNewSquad] = useState<Partial<Squad>>({
    name: "",
    description: "",
    teamId: "",
    leaderId: "",
  });

  // dialogs
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState<{
    open: boolean;
    id?: string;
    name?: string;
  }>({ open: false });

  // message dialog
  const [messageDialog, setMessageDialog] = useState<{
    open: boolean;
    text: string;
  }>({ open: false, text: "" });

  const baseUrl = "https://localhost:44374/api/Squad";
  const teamUrl = "https://localhost:44374/api/Team/names";
  const memberUrl = "https://localhost:44374/api/Member/available-leaders";

  // Fetch squads
  const fetchSquads = async () => {
    try {
      const url = searchName.trim()
      ? `${baseUrl}?search=${encodeURIComponent(searchName)}`
      : baseUrl;

      const res = await fetch(url);
      const data = await res.json();
      setSquads(data);
    } catch (err) {
      console.error("Error fetching squads:", err);
    }
  };

  // Fetch teams
  const fetchTeams = async () => {
    try {
      const res = await fetch(teamUrl);
      const data = await res.json();
      setTeams(data);
    } catch (err) {
      console.error("Error fetching teams:", err);
    }
  };

  // Fetch members
  const fetchMembers = async () => {
    try {
      const res = await fetch(memberUrl);
      const data = await res.json();
      setMembers(data);
    } catch (err) {
      console.error("Error fetching members:", err);
    }
  };

  // Load teams & members when creating or updating
  useEffect(() => {
    if (view === "create" || showUpdateDialog) {
      fetchTeams();
      fetchMembers();
    }
  }, [view, showUpdateDialog]);

  // Delete squad
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete squad.");

      setSquads(squads.filter((s) => s.id !== id));
      setShowDeleteDialog({ open: false });
      setMessageDialog({ open: true, text: "✅ Squad deleted successfully!" });
    } catch (err) {
      console.error("Delete failed:", err);
      setMessageDialog({
        open: true,
        text: "❌ Error deleting squad. Please try again.",
      });
    }
  };

  // Update squad
  const handleUpdate = async (id: string) => {
    try {
      const updatedSquad = { ...editData, id };
      const res = await fetch(baseUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSquad),
      });
      if (!res.ok) throw new Error("Failed to update squad.");

      setSquads(
        squads.map((s) =>
          s.id === id ? ({ ...s, ...editData } as Squad) : s
        )
      );
      setEditRow(null);
      setEditData({});
      setShowUpdateDialog(false);
      setMessageDialog({ open: true, text: "✅ Squad updated successfully!" });
    } catch (err) {
      console.error("Update failed:", err);
      setMessageDialog({
        open: true,
        text: "❌ Error updating squad. Please try again.",
      });
    }
  };



// Create new squad
// Create new squad
const handleCreate = async () => {
  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSquad),
    });

    if (!res.ok) throw new Error("Failed to create squad");

    setMessageDialog({ open: true, text: "✅ Squad created successfully!" });
    setNewSquad({ name: "", description: "", teamId: "", leaderId: "" });
    setView("menu");
  } catch (err) {
    console.error("Create failed:", err);
    setMessageDialog({ open: true, text: "❌ Failed to create squad." });
  }
};



    useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchSquads();
    }, 100); // wait 100ms after typing
  
    return () => clearTimeout(delayDebounce);
  }, [searchName]);
  return (
    <div className="p-6">
      {/* ✅ Title */}
      {view !== "create" && (
        <h1 className="text-2xl font-bold text-red-600 mb-6">
          Squad Management
        </h1>
      )}

      {/* Update Dialog */}
      {showUpdateDialog && editRow && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-red-600">Update Squad</h2>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={editData.name || ""}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
              placeholder="Name"
              className="p-2 rounded w-full mb-2 border border-gray-300"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              value={editData.description || ""}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
              placeholder="Description"
              className="p-2 rounded w-full mb-2 border border-gray-300"
            />

            {/* ✅ Team Dropdown */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Team
            </label>
            <select
              value={editData.teamId || ""}
              onChange={(e) =>
                setEditData({ ...editData, teamId: e.target.value })
              }
              className="p-2 rounded w-full mb-2 border border-gray-300"
            >
              <option value="">Select Team</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>

            {/* ✅ Leader Dropdown */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Leader
            </label>
            <select
              value={editData.leaderId || ""}
              onChange={(e) =>
                setEditData({ ...editData, leaderId: e.target.value })
              }
              className="p-2 rounded w-full mb-4 border border-gray-300"
            >
              <option value="">Select Leader</option>
              {members.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleUpdate(editRow)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowUpdateDialog(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Dialog */}
      {showDeleteDialog.open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-lg font-bold text-red-600 mb-4">
              Confirm Delete
            </h2>
            <p>
              Are you sure you want to delete squad{" "}
              <span className="font-semibold">{showDeleteDialog.name}</span>?
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => handleDelete(showDeleteDialog.id!)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteDialog({ open: false })}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Message Dialog */}
      {messageDialog.open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <p className="mb-4 text-gray-700">{messageDialog.text}</p>
            <button
              onClick={() => setMessageDialog({ open: false, text: "" })}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Menu */}
      {view === "menu" && (
        <div className="flex gap-50 justify-center mt-20">
          {/* List All Squads */}
          <button
            onClick={() => {
              fetchSquads();
              setView("list");
            }}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            <img src="public/images/list.svg" alt="list" className="w-38 h-38" />
            <span className="mt-4 text-lg font-bold">List All Squads</span>
          </button>

          {/* Create Squad */}
          <button
            onClick={() => setView("create")}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            <img
              src="public/images/Create.svg"
              alt="create"
              className="w-38 h-38"
            />
            <span className="mt-4 text-lg font-bold">Create Squad</span>
          </button>
        </div>
      )}

      {/* List View */}
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

          {/* Squad table */}
          <div className="bg-white rounded-xl shadow">
            <table className="w-full text-sm text-left text-gray-600">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-xs uppercase">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Team Name</th>
                  <th className="px-6 py-3">Leader Name</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {squads.map((squad) => (
                  <tr
                    key={squad.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {squad.name}
                    </td>
                    <td className="px-6 py-4">{squad.description}</td>
                    <td className="px-6 py-4">{squad.teamName}</td>
                    <td className="px-6 py-4">{squad.leaderName}</td>
                    <td className="px-6 py-4 text-center relative">
                      <button
                        onClick={() =>
                          setMenuOpen(menuOpen === squad.id ? null : squad.id)
                        }
                        className="p-2 rounded-full hover:bg-gray-200 transition"
                      >
                        ⋮
                      </button>
                      {menuOpen === squad.id && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg z-50 overflow-hidden">
                          <button
                            onClick={() => {
                              setEditRow(squad.id);
                              setEditData(squad);
                              setShowUpdateDialog(true);
                              setMenuOpen(null);
                            }}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            <img
                              src="public/images/update.svg"
                              alt="update"
                              className="w-4 h-4"
                            />{" "}
                            Update
                          </button>
                          <button
                            onClick={() =>
                              setShowDeleteDialog({
                                open: true,
                                id: squad.id,
                                name: squad.name,
                              })
                            }
                            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-red-50 text-red-600"
                          >
                            <img
                              src="public/images/Delete.svg"
                              alt="delete"
                              className="w-6 h-6"
                            />{" "}
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

{/* Create View */}
{view === "create" && (
  <div className="max-w-2xl mx-0 mt-6 pl-6">
    <h2 className="text-3xl font-bold mb-10 text-red-600">Create Squad</h2>

    <div className="space-y-6">
      <input
        type="text"
        placeholder="Name"
        value={newSquad.name}
        onChange={(e) => setNewSquad({ ...newSquad, name: e.target.value })}
        className="w-96 p-4 rounded-lg shadow-md focus:outline-none"
      />
      <input
        type="text"
        placeholder="Description"
        value={newSquad.description}
        onChange={(e) =>
          setNewSquad({ ...newSquad, description: e.target.value })
        }
        className="w-96 p-4 rounded-lg shadow-md focus:outline-none"
      />

      {/* ✅ Team Dropdown */}
      <select
        value={newSquad.teamId}
        onChange={(e) => setNewSquad({ ...newSquad, teamId: e.target.value })}
        className="w-96 p-4 rounded-lg shadow-md focus:outline-none bg-white"
      >
        <option value="">Select Team</option>
        {teams.map((team) => (
          <option
            key={team.id}
            value={team.id}
            className="whitespace-normal break-words"
          >
            {team.name}
          </option>
        ))}
      </select>

      {/* ✅ Leader Dropdown */}
      <select
        value={newSquad.leaderId}
        onChange={(e) =>
          setNewSquad({ ...newSquad, leaderId: e.target.value })
        }
        className="w-96 p-4 rounded-lg shadow-md focus:outline-none bg-white mt-4"
      >
        <option value="">Select Leader</option>
        {members.map((member) => (
          <option
            key={member.id}
            value={member.id}
            className="whitespace-normal break-words"
          >
            {member.name}
          </option>
        ))}
      </select>
    </div>

    {/* Action Buttons */}
    <div className="mt-8 flex gap-3">
      <button
        onClick={handleCreate}
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
      >
        Create
      </button>
      <button
        onClick={() => setView("menu")}
        className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
      >
        Cancel
      </button>
    </div>
{/* ✅ Message Dialog */}
{messageDialog.open && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
      <p className="text-gray-800 mb-4">{messageDialog.text}</p>
      <button
        onClick={() => setMessageDialog({ open: false, text: "" })}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        OK
      </button>
    </div>
  </div>
)}

  </div>
)}

    </div>
  );
};

export default SquadList;
