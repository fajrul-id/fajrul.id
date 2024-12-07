"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [namaProject, setNamaProject] = useState("");
  const [link, setLink] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState(""); // URL gambar
  const router = useRouter();

  useEffect(() => {
    // Periksa apakah user sudah login
    if (localStorage.getItem("isAdmin") !== "true") {
      router.push("/admin/login");
    }

    // Ambil data proyek
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, [router]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmitFile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      // Parse the JSON response to get the filePath
      const data = await response.json();

      // Check if filePath is available in the response
      if (data.filePath) {
        alert(`File uploaded successfully. File path: ${data.filePath}`);
      } else {
        alert("File uploaded successfully, but file path is missing.");
      }
    } catch (error) {
      alert("File upload failed");
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      nama_project: namaProject,
      link,
      deskripsi,
      image,
    };

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) {
        throw new Error("Failed to add project");
      }

      // Setelah menambahkan proyek, ambil data proyek terbaru
      const updatedProjects = await response.json();
      setProjects(updatedProjects);
      setNamaProject("");
      setLink("");
      setDeskripsi("");
      setImage(""); // Reset image URL field
      alert("Project added successfully");
    } catch (error) {
      alert("Failed to add project");
    }
  };

  const handleDeleteProject = async (id: number) => {
    try {
      // Send DELETE request to the API
      const response = await fetch(`/api/projects/`, {
        method: "DELETE", // DELETE request
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({ id }), // Send the id in the request body as JSON
      });

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      // If deletion is successful, update the UI
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );
    } catch (error) {
      console.log("Error deleting project:", error);
    }
  };

  const handleEditProject = (id: string) => {
    // Handle the logic for editing a project (e.g., show a modal or navigate to edit page)
    router.push(`/admin/dashboard/edit/${id}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Form untuk Upload File */}
      <form onSubmit={handleSubmitFile} className="mb-4">
        <input
          type="file"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500"
        />
        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload File
        </button>
      </form>

      {/* Form untuk Menambah Proyek */}
      <form onSubmit={handleAddProject} className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nama Proyek
          </label>
          <input
            type="text"
            value={namaProject}
            onChange={(e) => setNamaProject(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Link Proyek
          </label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Deskripsi
          </label>
          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            URL Gambar
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Project
        </button>
      </form>

      {/* Daftar Proyek */}
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <div key={project.id} className="border rounded-lg shadow-md p-4">
            <div className="font-semibold text-lg">{project.nama_project}</div>
            <div className="text-gray-500 text-sm">{project.link}</div>
            <div className="mt-2 text-sm">{project.deskripsi}</div>
            <div className="mt-2">
              {project.image ? (
                <img
                  src={project.image}
                  alt="Project image"
                  className="w-20 h-20 object-cover mt-2"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleEditProject(project.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
