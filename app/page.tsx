import FloatingNavbar from './components/FloatingNavbar';
import WhoWeAre from './sections/who-we-are/WhoWeAre';
import WhatWeDo from './sections/what-we-do/WhatWeDo';
import Donors from './sections/donors/Donors';
import Partners from './sections/partners/Partners';
import Resources from './sections/resources/Resources';
import ContactUs from './sections/contact-us/ContactUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNavbar />
      
      <section id="who-we-are" className="py-20">
        <WhoWeAre />
      </section>
      
      <section id="what-we-do" className="py-20 bg-gray-50 dark:bg-gray-900">
        <WhatWeDo />
      </section>
      
      <section id="donors" className="py-20">
        <Donors />
      </section>
      
      <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-900">
        <Partners />
      </section>
      
      <section id="resources" className="py-20">
        <Resources />
      </section>
      
      <section id="contact-us" className="py-20 bg-gray-50 dark:bg-gray-900">
        <ContactUs />
      </section>
      
      <Footer />
    </main>
  );
}