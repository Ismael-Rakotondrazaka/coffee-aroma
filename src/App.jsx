import TheAbout from "./components/TheAbout";
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
      </main>
    </TheLayout>
  );
}

export default App;
