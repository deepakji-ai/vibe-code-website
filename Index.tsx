import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ToolsExplorer from "@/components/ToolsExplorer";
import Analytics from "@/components/Analytics";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SubmitToolModal from "@/components/SubmitToolModal";

const Index = () => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Tools Explorer */}
      <ToolsExplorer />

      {/* Analytics Dashboard */}
      <Analytics />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating Submit Tool Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          size="lg"
          onClick={() => setIsSubmitModalOpen(true)}
          className="rounded-full w-16 h-16 shadow-premium bg-primary hover:bg-primary/90 text-primary-foreground animate-glow-pulse"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Submit Tool Modal */}
      <SubmitToolModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
};

export default Index;
