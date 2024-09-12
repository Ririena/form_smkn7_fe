"use client";
import { ModeToggle } from "@/components/function/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Book, BookDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "@/components/navigation/Header";
export default function Home() {
  const router = useRouter();

  const redRepo = () => {
    router.push("https://www.github.com/Ririena");
  };

  const redJobDesk = () => {
    router.push("https://trello.com/b/lfwUzUsm/forum-diskusi-workspace");
  };
  return (
    <>
    <Header/>
      <main className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <Image src="/logo.jpeg" width={500} height={500}/>
          <h1 className="text-4xl font-medium mb-2">Forum Diskusi Siswa</h1>
          <h3 className="text-2xl font-thin mb-4">
            Selamat Datang && Let's Get To Work!!
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={redRepo}>
              Repositories
            </Button>
            <Button variant="outline" onClick={redJobDesk}>
              Job Desk List
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
