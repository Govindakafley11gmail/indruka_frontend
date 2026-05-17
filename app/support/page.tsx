import Navbar from "@/custom-components/navbar/navbar";
import Footer from "@/custom-components/footer/footer";
import { ContactForm } from "./ContactForm";
import { ContactInfoCards } from "./ContactInfoCards";
import { SidePanel } from "./SidePannel";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white  font-[family-name:var(--font-body)]">
      <Navbar isActive={false} />
      <ContactInfoCards />
      <section className="mx-auto mt-16 max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <SidePanel />
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}