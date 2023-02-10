import TheAbout from "./components/TheAbout";
import TheContact from "./components/TheContact";
import TheFAQ from "./components/TheFAQ";
import TheLayout from "./components/TheLayout";
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
      </main>
    </TheLayout>
  );
}

export default App;
