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

// Menggunakan process.env.ROOT_PATH untuk menentukan lokasi file data.json
const DATA_DIR = path.resolve(process.env.ROOT_PATH ?? "", "src/data");
const dataFilePath = path.join(DATA_DIR, "data.json");

// Pastikan folder `DATA_DIR` ada
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper untuk membaca data
const readData = (): Project[] => {
  try {
    if (!fs.existsSync(dataFilePath)) {
      // Jika file belum ada, kembalikan array kosong
      return [];
    }
    const jsonData = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(jsonData) as Project[];
  } catch (error: unknown) {
    console.error("Error reading data file:", error);
    throw new Error("Failed to read data from file");
  }
};

// Helper untuk menulis data
const writeData = (data: Project[]): void => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error: unknown) {
    console.error("Error writing data to file:", error);
    throw new Error("Failed to write data to file");
  }
};

// GET: Ambil semua data
export async function GET() {
  try {
    const data = readData();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// POST: Tambah data baru
export async function POST(request: Request) {
  try {
    const body: Omit<Project, "id"> = await request.json();
    const data = readData();

    const newItem: Project = { id: Date.now(), ...body };
    data.push(newItem);
    writeData(data);

    return NextResponse.json(newItem, { status: 201 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// PUT: Update data berdasarkan ID
export async function PUT(request: Request) {
  try {
    const body: Project = await request.json();
    const data = readData();

    // Cek jika data kosong
    if (data.length === 0) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }

    // Jika hanya ada satu data, langsung perbarui data tersebut
    if (data.length === 1) {
      // Update data pertama (satu-satunya data)
      data[0] = { ...data[0], ...body };
      writeData(data);
      return NextResponse.json(data[0]);
    }

    // Jika ada lebih dari satu data, lanjutkan dengan logika biasa
    const index = data.findIndex((item) => item.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Update data
    data[index] = { ...data[index], ...body };
    writeData(data);

    return NextResponse.json(data[index]);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// DELETE: Hapus data berdasarkan ID
export async function DELETE(request: Request) {
  try {
    const { id }: { id: number } = await request.json();
    const data = readData();

    const newData = data.filter((item) => item.id !== id);
    if (newData.length === data.length) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    writeData(newData);

    return NextResponse.json({ message: "Item deleted" });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
