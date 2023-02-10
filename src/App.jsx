import TheLayout from "./components/TheLayout";
import TheService from "./components/TheService";
import TheWelcome from "./components/TheWelcome";

function App() {
  return (
    <TheLayout>
      <main className="min-h-screen">
        <TheWelcome />

        <TheService />
      </main>
    </TheLayout>
  );
}

export default App;
