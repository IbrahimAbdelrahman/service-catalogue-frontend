import React, { useState } from "react";
import axios from "axios";

const API_BASE = "https://localhost:44374/api/Service";

const ServicePage: React.FC = () => {
  const [mode, setMode] = useState<null | string>(null);
  const [serviceId] = useState("");
  const [name, setName] = useState("");
  const [description,setDescription] = useState("")
  const [squadId, setSquadId] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // CRUD Functions
  const listServices = async () => {
    try {
      const res = await axios.get(API_BASE);
      setServices(res.data);
      console.log(res.data)
      setMessage("Fetched all services ✅");
      setMode("list");
    } catch (err: any) {
      setMessage(`Error fetching services ❌: ${err.message}`);
    }
  };

  const getService = async () => {
    try {
      const res = await axios.get(`${API_BASE}/${squadId}`);
      setSelectedService(res.data);
      setMessage(`Service fetched: ${res.data.name}`);
    } catch {
      setMessage("Error fetching service ❌");
    }
  };

  const createService = async () => {
    try {
      await axios.post(API_BASE, { name, description, squadId});
      setMessage("Service created ✅");
    } catch {
      setMessage("Error creating service ❌");
    }
  };

  const updateService = async () => {
    try {
      await axios.put(API_BASE, { id: serviceId, name, description, squadId});
      setMessage("Service updated ✅");
    } catch {
      setMessage("Error updating service ❌");
    }
  };

  const deleteservice = async () => {
    try {
      await axios.delete(`${API_BASE}/${serviceId}`);
      setMessage("Service deleted ✅");
    } catch {
      setMessage("Error deleting service ❌");
    }
  };

  // Form Renderer
  const renderForm = () => {
    const backButton = (
      <button
        onClick={() => {
          setMode(null);
          setSelectedService(null);
        }}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Back
      </button>
    );

    switch (mode) {
      case "create":
        return (
          <div className="mt-4">
            <input
              placeholder="Service Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Service Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              placeholder="Squad ID"
              value={squadId}
              onChange={(e) => setSquadId(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={createService}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Create Service
            </button>
            {backButton}
          </div>
        );

      case "list":
        return (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">All Services</h2>
            {services.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Description</th>
                      <th className="border px-4 py-2">Squad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((s) => (
                      <tr key={s.id} className="hover:bg-gray-50">
                        <td className="border px-4 py-2">{s.id}</td>
                        <td className="border px-4 py-2">{s.name}</td>
                        <td className="border px-4 py-2">{s.description}</td>
                        <td className="border px-4 py-2">{s.squad?.name ?? "No Squad"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No services found.</p>
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
      <h1 className="text-2xl font-bold mb-6">Service Management</h1>

      {!mode && (
        <div className="grid grid-cols-2 gap-6">
          <button
            onClick={listServices}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            <img src="public/Images/List.svg" alt="List" className="w-10 h-10 mb-2" />
            <span className="font-medium">List All Services</span>
          </button>

          <button
            onClick={() => setMode("create")}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow p-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            <img src="public/Images/Create.svg" alt="Create" className="w-10 h-10 mb-2" />
            <span className="font-medium">Create Service</span>
          </button>
        </div>
      )}

      {renderForm()}

      {message && <p className="mt-4 font-semibold">{message}</p>}
    </div>
  );
};

export default ServicePage;
