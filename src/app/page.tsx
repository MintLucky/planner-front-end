import type { Metadata } from "next";

import { Button } from "@/components/ui/buttons/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lucky Planner Home",
};


export default function Home() {
  
  return (
    <div className="container mx-auto my-24 px-4">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold text-azure">Lucky planner</h1>
      </div>
      
      <p className="text-center text-lg">
        A simple Application to organize better your day and week... and the whole life
      </p>
      <div className="text-center mt-24">
        <Link href="/i">
          <Button>
            Start using the app
          </Button>
        </Link>
      </div>
    </div>
  );
}
