import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InsightsPageContent from "@/components/sections/InsightsPageContent";

export const metadata: Metadata = {
  title: "Insights | AscendWorksNow",
  description:
    "Product notes and implementation context for ServiceNow AI Control Tower, Otto and Moveworks, Flow Designer, Now Assist, and enterprise workflows.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <InsightsPageContent />
      </main>
      <Footer />
    </>
  );
}
