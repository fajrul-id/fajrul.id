"use client";

import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

// Type definition for a Project
type Project = {
  id: number;
  nama_project: string;
  link: string;
  deskripsi: string;
  image: string;
};

export default function EditProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Unwrap params using React.use()
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Unwrap params and set the ID
    const fetchId = async () => {
      const unwrappedParams = await params; // unwrap Promise
      setId(unwrappedParams.id);
    };

    fetchId();
  }, [params]);

  // Fetch the project when the `id` is available
  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
        setError("Error fetching project data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;

    try {
      const response = await fetch(`/api/projects`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });

      if (!response.ok) {
        throw new Error("Failed to update project");
      }

      const updatedProject = await response.json();
      alert("Project updated successfully!");
      router.push("/admin/dashboard"); // Redirect after success
    } catch (error) {
      alert("Failed to update project");
      console.error(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Edit Project</h1>

      {/* Form to edit the project */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Project Name
          </label>
          <input
            type="text"
            value={project?.nama_project || ""}
            onChange={(e) =>
              setProject({ ...project!, nama_project: e.target.value })
            }
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Project Link
          </label>
          <input
            type="text"
            value={project?.link || ""}
            onChange={(e) => setProject({ ...project!, link: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Project Description
          </label>
          <textarea
            value={project?.deskripsi || ""}
            onChange={(e) =>
              setProject({ ...project!, deskripsi: e.target.value })
            }
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            value={project?.image || ""}
            onChange={(e) => setProject({ ...project!, image: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded"
        >
          Update Project
        </button>
      </form>
    </div>
  );
}
