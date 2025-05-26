import Header from './Header';
import Footer from './Footer';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const RootLayout = ({ children }) => {
  return (
    <div className="app-layout bg-[#F0F0F0]">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;