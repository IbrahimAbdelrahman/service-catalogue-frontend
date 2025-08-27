import React, { useState, useEffect } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  customer: string;
  squadId: string;
  squadName: string;
}

const ProjectPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Project>>({});
  const [searchName, setSearchName] = useState<string>("");
  const [view, setView] = useState<"menu" | "list" | "create">("menu");
  const [squads, setSquads] = useState<{ id: string; name: string }[]>([]);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    name: "",
    description: "",
    customer: "",
    squadId: "",
  });

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

  const baseUrl = "https://localhost:44374/api/Project";

  // Fetch projects
  const fetchProjects = async () => {
    try {
    const url = searchName.trim()
      ? `${baseUrl}?search=${encodeURIComponent(searchName)}`
      : baseUrl;

    const res = await fetch(url);
    const data: Project[] = await res.json();

    // Map squadName
    const mapped = data.map((m) => ({
      ...m,
      squadName: squads.find((s) => s.id === m.squadId)?.name || ""
    }));

    setProjects(mapped);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  //Displaying the Squad names
  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await fetch("https://localhost:44374/api/squad/names");
      const data = await res.json();
      
      setSquads(data);
    } catch (err) {
      console.error("Error fetching squads:", err);
    }
  };

  fetchProjects();
}, []);

  // Delete project
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete project.");

      setProjects(projects.filter((s) => s.id !== id));
      setShowDeleteDialog({ open: false });
      setMessageDialog({ open: true, text: "✅ Project deleted successfully!" });
    } catch (err) {
      console.error("Delete failed:", err);
      setMessageDialog({ open: true, text: "❌ Error deleting project." });
    }
  };

  // Update project
const handleUpdate = async (id: string) => {
  try {
    const updatedProject = { ...editData }; 
    const res = await fetch(`${baseUrl}/${id}`, { 
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    });

    if (!res.ok) throw new Error("Failed to update project.");

    setProjects(
      projects.map((s) =>
        s.id === id
          ? {
              ...s,
              ...editData,
              squadName: squads.find((sq) => sq.id === editData.squadId)?.name || "",
            }
          : s
      )
    );

    setEditRow(null);
    setEditData({});
    setShowUpdateDialog(false);
    setMessageDialog({ open: true, text: "✅ Project updated successfully!" });
  } catch (err) {
    console.error("Update failed:", err);
    setMessageDialog({ open: true, text: "❌ Error updating project." });
  }
};


  // Create project
  const handleCreate = async () => {
    try {
      await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });
      setMessageDialog({ open: true, text: "✅ Project created successfully!" });
      setNewProject({ name: "", description: "", customer: "", squadId: "" });
      setView("menu");
    } catch (err) {
      console.error("Create failed:", err);
      setMessageDialog({ open: true, text: "❌ Error creating project." });
    }
  };

  useEffect(() => {
  const delayDebounce = setTimeout(() => {
    fetchProjects();
  }, 100); 

  return () => clearTimeout(delayDebounce);
}, [searchName]);


  return (
    <div className="p-6">
      {/* Title */}
      {view !== "create" && (
        <h1 className="text-2xl font-bold text-red-600 mb-6">
          Project Management
        </h1>
      )}

      {/* Update Dialog */}
      {showUpdateDialog && editRow && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-red-600">Update Project</h2>

            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={editData.name || ""}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              className="p-2 rounded w-full mb-2 border"
            />

            <label className="block text-sm font-medium mb-1">Description</label>
            <input
              type="text"
              value={editData.description || ""}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
              className="p-2 rounded w-full mb-2 border"
            />
            <label className="block text-sm font-medium mb-1">Customer</label>
            <input
              type="text"
              value={editData.customer || ""}
              onChange={(e) =>
                setEditData({ ...editData, customer: e.target.value })
              }
              className="p-2 rounded w-full mb-2 border"
            />
            <label className="block text-sm font-medium mb-1">Squad Name</label>
            <select
              value={editData.squadId || ""}
              onChange={(e) => setEditData({ ...editData, squadId: e.target.value })}
              className="p-2 rounded w-full mb-4 border"
            >
              <option value="">Select Squad</option>
              {squads.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
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
              Are you sure you want to delete project{" "}
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
        <div className="flex gap-20 justify-center mt-20">
          <button
            onClick={() => {
              fetchProjects();
              setView("list");
            }}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white transition-all"
          >
            <img src="public/images/list.svg" alt="list" className="w-38 h-38" />
            <span className="mt-4 text-lg font-bold">List All Projects</span>
          </button>

          <button
            onClick={() => setView("create")}
            className="flex flex-col items-center bg-white text-red-600 border border-red-600 px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white transition-all"
          >
            <img src="public/images/Create.svg" alt="create" className="w-38 h-38" />
            <span className="mt-4 text-lg font-bold">Create Project</span>
          </button>
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <div>
          {/* Search */}
          <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search By Project Name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="p-2 rounded w-1/3 bg-gray-100"
            />
          </div>


          {/* Table */}
          <div className="bg-white rounded-xl shadow">
            <table className="w-full text-sm text-left text-gray-600">
              <thead>
                <tr className="bg-gray-100 text-gray-500 text-xs uppercase">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Customer</th>
                  <th className="px-6 py-3">Squad Name</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {projects.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">{s.name}</td>
                    <td className="px-6 py-4">{s.description}</td>
                    <td className="px-6 py-4">{s.customer}</td>
                    <td className="px-6 py-4">{s.squadName}</td>
                    <td className="px-6 py-4 text-center relative">
                      <img
                        src="public/images/menu.svg"
                        alt="menu"
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setMenuOpen(menuOpen === s.id ? null : s.id)}
                      />
                      {menuOpen === s.id && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg z-50">
                          <button
                            onClick={() => {
                              setEditRow(s.id);
                              setEditData(s);
                              setShowUpdateDialog(true);
                              setMenuOpen(null);
                            }}
                            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                          >
                            <img src="public/images/update.svg" alt="update" className="w-4 h-4" />
                            Update
                          </button>
                          <button
                            onClick={() =>
                              setShowDeleteDialog({ open: true, id: s.id, name: s.name })
                            }
                            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-red-50 text-red-600"
                          >
                            <img src="public/images/Delete.svg" alt="delete" className="w-6 h-6" />
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
          <h2 className="text-3xl font-bold mb-10 text-red-600">Create Project</h2>
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              className="w-96 p-4 rounded-lg shadow-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              className="w-96 p-4 rounded-lg shadow-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Customer"
              value={newProject.customer}
              onChange={(e) =>
                setNewProject({ ...newProject, customer: e.target.value })
              }
              className="w-96 p-4 rounded-lg shadow-md focus:outline-none"
            />
            <select
              value={newProject.squadId}
              onChange={(e) =>
                setNewProject({ ...newProject, squadId: e.target.value })
              }
              className="w-96 p-4 rounded-lg shadow-md focus:outline-none"
            >
              <option value="">Select Squad</option>
              {squads.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>

          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={handleCreate}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
            >
              Create
            </button>
            <button
              onClick={() => setView("menu")}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
