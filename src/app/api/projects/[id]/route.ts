import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

type Project = {
  id: number;
  nama_project: string;
  link: string;
  deskripsi: string;
  image: string;
};

// Path to the data file
const DATA_DIR = path.resolve("data")
const dataFilePath = path.join(DATA_DIR, "data.json");

const readData = (): Project[] => {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const jsonData = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(jsonData) as Project[];
  } catch (error: unknown) {
    console.error("Error reading data file:", error);
    throw new Error("Failed to read data from file");
  }
};

// GET: Retrieve a specific project by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const projectId = Number(id);
  const projects = readData();

  const project = projects.find(({ id }) => id === projectId);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
