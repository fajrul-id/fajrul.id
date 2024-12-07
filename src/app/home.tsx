"use client";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import Home from "@/components/Section/Home";
import About from "@/components/Section/About";
import Skill from "@/components/Section/Skill";
import Portfolio from "@/components/Section/Portfolio";
import Contact from "@/components/Section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
const Homes = () => {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 65,
    });
  }, []);

  const router = useRouter();

  const [projects, setProjects] = useState<any[]>([]);

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
  return (
    <main className="container max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-20 space-y-14">
      <Home total={String(projects.length - 1)} />
      <About />
      <Skill />
      <Portfolio props={projects} />
      <Contact />
    </main>
  );
};

export default Homes;
