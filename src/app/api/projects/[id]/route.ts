import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

type Project = {
  id: number;
  nama_project: string;
  link: string;
  deskripsi: string;
  image: string;
};

// Path to the data file
const DATA_DIR = path.resolve(process.env.ROOT_PATH ?? "", "src/data");
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
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = readData();
    const projectId = parseInt(params.id, 10); // Parse the ID to integer

    const project = data.find((item) => item.id === projectId);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Failed to fetch the project" },
      { status: 500 }
    );
  }
}
