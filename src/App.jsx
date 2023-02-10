import TheAbout from "./components/TheAbout";
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
      </main>
    </TheLayout>
  );
}

export default App;
