import React, { useState, useEffect } from "react";

interface Team {
  id: string;
  name: string;
  description: string;
  leaderId: string;
  leaderName?: string;
}

interface DisplayMember {
  id: string;
  name: string;
}

const TeamPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [members, setMembers] = useState<DisplayMember[]>([]);
  const [view, setView] = useState<"menu" | "list" | "create">("menu");
  const [searchName, setSearchName] = useState("");
  const [newTeam, setNewTeam] = useState<Partial<Team>>({
    name: "",
    description: "",
    leaderId: "",
  });

  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Team>>({});

  // dialogs
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState<{
    open: boolean;
    id?: string;
    name?: string;
  }>({ open: false });

  const [messageDialog, setMessageDialog] = useState<{
    open: boolean;
    text: string;
  }>({ open: false, text: "" });

  const baseUrl = "https://localhost:44374/api/Team";
  const memberUrl = "https://localhost:44374/api/Member/available-leaders";

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
    const delay = setTimeout(() => fetchTeams(), 100);
    return () => clearTimeout(delay);
  }, [searchName]);

  useEffect(() => {
    if (view === "create" || showUpdateDialog) fetchMembers();
  }, [view, showUpdateDialog]);

  // Create
  const handleCreate = async () => {
    try {
      await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTeam),
      });
      setMessageDialog({ open: true, text: "✅ Team created successfully!" });
      setNewTeam({ name: "", description: "", leaderId: "" });
      setView("menu");
    } catch (err) {
      console.error("Create failed:", err);
      setMessageDialog({ open: true, text: "❌ Error creating team." });
    }
  };

  // Update
  const handleUpdate = async (id: string) => {
    try {
      const updatedTeam = { ...editData };
      const res = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTeam),
      });

      if (!res.ok) throw new Error("Failed to update team.");

      setTeams(
        teams.map((t) =>
          t.id === id
            ? {
                ...t,
                ...editData,
                leaderName:
                  members.find((m) => m.id === editData.leaderId)?.name || "",
              }
            : t
        )
      );

      setEditRow(null);
      setEditData({});
      setShowUpdateDialog(false);
      setMessageDialog({ open: true, text: "✅ Team updated successfully!" });
    } catch (err) {
      console.error("Update failed:", err);
      setMessageDialog({ open: true, text: "❌ Error updating team." });
    }
  };

  // Delete
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete team.");

      setTeams(teams.filter((t) => t.id !== id));
      setShowDeleteDialog({ open: false });
      setMessageDialog({ open: true, text: "✅ Team deleted successfully!" });
    } catch (err) {
      console.error("Delete failed:", err);
      setMessageDialog({ open: true, text: "❌ Error deleting team." });
    }
  };

  return (
    <div className="p-6">
      {view !== "create" && (
        <h1 className="text-2xl font-bold text-red-600 mb-6">
          Team Management
        </h1>
      )}

      {/* Update Dialog */}
      {showUpdateDialog && editRow && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-red-600">Update Team</h2>

            <input
              type="text"
              value={editData.name || ""}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              className="p-2 rounded w-full mb-2 border"
              placeholder="Name"
            />

            <input
              type="text"
              value={editData.description || ""}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
              className="p-2 rounded w-full mb-2 border"
              placeholder="Description"
            />

            <select
              value={editData.leaderId || ""}
              onChange={(e) =>
                setEditData({ ...editData, leaderId: e.target.value })
              }
              className="p-2 rounded w-full mb-4 border"
            >
              <option value="">Select Leader</option>
              {members.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
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
            <h2 className="text-lg font-bold text-red-600 mb-4">Confirm Delete</h2>
            <p>
              Are you sure you want to delete team{" "}
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

      {/* Message Dialog */}
      {messageDialog.open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <p className="mb-4">{messageDialog.text}</p>
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
        <div className="flex gap-16 justify-center mt-20">
          <button
            onClick={() => {
              fetchTeams();
              setView("list");
            }}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            <img src="public/images/List.svg" alt="list" className="w-38 h-38" />
            <span className="mt-4 text-lg font-bold">List All Teams</span>
          </button>
          <button
            onClick={() => setView("create")}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            <img src="public/images/Create.svg" alt="create" className="w-38 h-38" />
            <span className="mt-4 text-lg font-bold">Create Team</span>
          </button>
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <div>
          <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by Team Name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="p-2 rounded w-1/3 bg-gray-100"
            />
          </div>

          <table className="w-full text-sm text-left text-gray-600">
            <thead>
              <tr className="bg-gray-100 text-gray-500 text-xs uppercase">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Leader</th>
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
                  <td className="px-6 py-4">
                    {members.find((m) => m.id === team.leaderId)?.name || ""}
                  </td>
                  <td className="px-6 py-4 text-center relative">
                    <img
                      src="public/images/menu.svg"
                      alt="menu"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => setMenuOpen(menuOpen === team.id ? null : team.id)}
                    />
                    {menuOpen === team.id && (
                      <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg z-50">
                        <button
                          onClick={() => {
                            setEditRow(team.id);
                            setEditData(team);
                            setShowUpdateDialog(true);
                            setMenuOpen(null);
                          }}
                          className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                        >
                          <img
                            src="public/images/update.svg"
                            alt="update"
                            className="w-4 h-4"
                          />
                          Update
                        </button>
                        <button
                          onClick={() =>
                            setShowDeleteDialog({ open: true, id: team.id, name: team.name })
                          }
                          className="flex items-center gap-2 w-full px-4 py-2 hover:bg-red-50 text-red-600"
                        >
                          <img
                            src="public/images/Delete.svg"
                            alt="delete"
                            className="w-6 h-6"
                          />
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
      )}

      {/* Create View */}
      {view === "create" && (
        <div className="max-w-2xl mx-0 mt-6 pl-6">
          <h2 className="text-3xl font-bold mb-10 text-red-600">Create Team</h2>
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              value={newTeam.name}
              onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
              className="w-96 p-4 rounded-lg shadow-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Description"
              value={newTeam.description}
              onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
              className="w-96 p-4 rounded-lg shadow-md focus:outline-none"
            />
            <select
              value={newTeam.leaderId}
              onChange={(e) => setNewTeam({ ...newTeam, leaderId: e.target.value })}
              className="w-96 p-4 rounded-lg shadow-md focus:outline-none bg-white"
            >
              <option value="">Select Leader</option>
              {members.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </div>

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
        </div>
      )}
    </div>
  );
};

export default TeamPage;
