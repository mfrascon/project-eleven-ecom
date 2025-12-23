import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="font-sans min-h-screen flex flex-col bg-[#292B3A]">
        <Navbar />
        <main className="flex-1">
          {/* routes go here */}
        </main>
      </div>
    </>
  );
}

export default App