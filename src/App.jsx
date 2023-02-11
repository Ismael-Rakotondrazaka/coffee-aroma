import TheAbout from "./components/TheAbout";
import TheContact from "./components/TheContact";
import TheFAQ from "./components/TheFAQ";
import TheLayout from "./components/TheLayout";
import ThePartner from "./components/ThePartner";
import TheService from "./components/TheService";
import TheWelcome from "./components/TheWelcome";

function App() {
  return (
    <TheLayout>
      <main className="min-h-screen">
        <TheWelcome />

        <TheService />

        <TheAbout />

        <TheFAQ />

        <TheContact />

        <ThePartner />
      </main>
    </TheLayout>
  );
}

export default App;
