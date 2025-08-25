import React, { useState } from "react";
import axios from "axios";

const API_BASE = "https://localhost:44374/api/Service";

const ServicePage: React.FC = () => {
  const [mode, setMode] = useState<null | string>(null);
  const [serviceId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [squadId, setSquadId] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // CRUD Functions
  const listServices = async () => {
    try {
      const res = await axios.get(API_BASE);
      setServices(res.data);
      console.log(res.data);
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
      await axios.post(API_BASE, { name, description, squadId });
      setMessage("Service created ✅");
    } catch {
      setMessage("Error creating service ❌");
    }
  };

  const updateService = async () => {
    try {
      await axios.put(API_BASE, { id: serviceId, name, description, squadId });
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
    switch (mode) {
      case "create":
  return (
    <div className="mt-4 flex flex-col items-start">
      <input
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-96 mb-2 rounded"
      />
      <input
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-96 mb-2 rounded"
      />
      <input
        placeholder="Squad ID"
        value={squadId}
        onChange={(e) => setSquadId(e.target.value)}
        className="border p-2 w-96 mb-4 rounded"
      />
      <button
        onClick={createService}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Create Service
      </button>
    </div>
  );

      case "list":
        return (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4 text-red-600">All Services</h2>
            {services.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border border-red-600 rounded-lg">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="p-2 text-left">ID</th>
                      <th className="p-2 text-left">Name</th>
                      <th className="p-2 text-left">Description</th>
                      <th className="p-2 text-left">Squad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((s) => (
                      <tr key={s.id} className="border-t border-red-600 hover:bg-gray-50">
                        <td className="p-2">{s.id}</td>
                        <td className="p-2">{s.name}</td>
                        <td className="p-2">{s.description}</td>
                        <td className="p-2">{s.squad?.name ?? "No Squad"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No services found.</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-red-600">
        {mode === "list"
          ? "Service List"
          : mode === "create"
          ? "Create Service"
          : "Service Management"}
      </h1>

      {!mode && (
  <div className="flex justify-between mt-10">
    <button
      onClick={listServices}
      className="flex flex-col items-center bg-white text-red-600 border border-red-600 
                 px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white 
                 transition-all duration-200"
    >
      <img src="public/Images/List.svg" alt="List" className="w-12 h-12" />
      <span className="mt-4 text-lg font-bold">List All Services</span>
    </button>

    <button
      onClick={() => setMode("create")}
      className="flex flex-col items-center bg-white text-red-600 border border-red-600 
                 px-10 py-8 rounded-2xl shadow-xl hover:bg-red-600 hover:text-white 
                 transition-all duration-200"
    >
      <img src="public/Images/Create.svg" alt="Create" className="w-12 h-12" />
      <span className="mt-4 text-lg font-bold">Create Service</span>
    </button>
  </div>
)}

      {renderForm()}

      {message && <p className="mt-4 font-semibold text-red-600">{message}</p>}
    </div>
  );
};

export default ServicePage;
