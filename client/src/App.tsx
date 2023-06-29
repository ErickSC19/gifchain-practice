import { Navbar, Footer, Welcome, Services, Transactions } from './components';

function App() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </>
  );
}

export default App;
