import TheLayout from "./components/TheLayout";
import TheWelcome from "./components/TheWelcome";

function App() {
  return (
    <TheLayout>
      <main className="min-h-screen">
        <TheWelcome />
      </main>
    </TheLayout>
  );
}

export default App;
