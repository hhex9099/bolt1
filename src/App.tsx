import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
      </main>
      <Footer />
    </div>
  );
}
