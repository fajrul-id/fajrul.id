"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";

// Type definition for a Project
type Project = {
  id: number;
  nama_project: string;
  link: string;
  deskripsi: string;
  image: string;
};

function getQueryParam(param: string): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function EditProjectContent({ id }: { id: string }) {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/id?id=${id}`);
        if (!response.ok) throw new Error("Failed to fetch project data");
        setProject(await response.json());
      } catch (error) {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
      if (!response.ok) throw new Error("Failed to update project");
      alert("Project updated successfully!");
      router.push("/admin/dashboard");
    } catch {
      alert("Failed to update project");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Edit Project</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        {["nama_project", "link", "deskripsi", "image"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-sm font-medium text-gray-700">
              {field.replace("_", " ").toUpperCase()}
            </label>
            <input
              type="text"
              value={(project as any)?.[field] || ""}
              onChange={(e) => setProject({ ...project!, [field]: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required={field !== "image"}
            />
          </div>
        ))}
        <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded">
          Update Project
        </button>
      </form>
    </div>
  );
}

export default function EditProject() {
  const id = getQueryParam("id");
  return <Suspense fallback={<div>Loading...</div>}>{id ? <EditProjectContent id={id} /> : <div>ID tidak ditemukan.</div>}</Suspense>;
}
