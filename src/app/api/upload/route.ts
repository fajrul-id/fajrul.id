import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const UPLOAD_DIR = path.join(path.resolve("public", "uploads"));

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const generateUniqueFileName = (fileName: string): string => {
  const fileExt = path.extname(fileName);
  const baseName = path.basename(fileName, fileExt);

  let uniqueName = fileName;
  let counter = 1;

  while (fs.existsSync(path.join(UPLOAD_DIR, uniqueName))) {
    uniqueName = `${baseName}${counter}${fileExt}`;
    counter++;
  }

  return uniqueName;
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const uniqueName = generateUniqueFileName(file.name);
  const filePath = path.join(UPLOAD_DIR, uniqueName);
  const fileBuffer = Buffer.from(await file.arrayBuffer());

  fs.writeFileSync(filePath, new Uint8Array(fileBuffer));

  return NextResponse.json(
    { filePath: `/uploads/${uniqueName}` },
    { status: 201 }
  );
}
