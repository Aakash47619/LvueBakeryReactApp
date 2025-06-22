import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logoPath from "@assets/Lvue glow logo_1750583470423.png";

declare global {
  interface Window {
    AOS: any;
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize AOS when component mounts
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
      
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scroll for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/lvuebakery', '_blank');
  };

  const handleVisitUsClick = () => {
    window.open('https://goo.gl/maps/Akmcd8nqT2QjCFZx7', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bakery-navbar" id="navbar">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logoPath} 
              alt="L'vue Bakery Logo" 
              className="h-12 w-auto"
            />
          </div>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="nav-link text-white hover:text-gold transition-colors font-medium">Home</a></li>
            <li><a href="#about" className="nav-link text-white hover:text-gold transition-colors font-medium">About</a></li>
            <li><a href="#specialties" className="nav-link text-white hover:text-gold transition-colors font-medium">Specialties</a></li>
            <li><a href="#instagram" className="nav-link text-white hover:text-gold transition-colors font-medium">Instagram</a></li>
            <li><a href="#contact" className="nav-link text-white hover:text-gold transition-colors font-medium">Contact</a></li>
          </ul>
          <button className="md:hidden text-2xl text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bakery-hero" id="home">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col items-center mb-6">
            <img 
              src={logoPath} 
              alt="L'vue Bakery Logo" 
              className="h-20 w-auto mb-4"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg font-serif">
              L'vue Bakery
            </h1>
          </div>
          <p className="text-xl md:text-2xl italic mb-8 opacity-90">
            Baking memories daily
          </p>
          <Button 
            onClick={handleVisitUsClick}
            className="bakery-btn-primary text-lg px-8 py-4"
          >
            Visit Us
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bakery-section bg-white" id="about">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="bakery-section-title" data-aos="fade-up">Our Story</h2>
          <p className="bakery-section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Crafted with love, served with passion
          </p>
          <div className="text-center space-y-6 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            <p>
              At L'vue Bakery, we believe that every moment deserves to be sweetened with the finest baked goods. 
              Our artisan bakers start each day before dawn, carefully crafting each pastry, cake, and bread with 
              traditional techniques passed down through generations.
            </p>
            <p>
              From our signature croissants that melt in your mouth to our custom celebration cakes that make every 
              occasion special, we take pride in using only the finest ingredients and time-honored methods. Every 
              bite tells a story of dedication, creativity, and the pure joy of baking.
            </p>
            <p>
              Whether you're starting your morning with a fresh-baked coffee cake or celebrating life's sweetest 
              moments with our custom creations, L'vue Bakery is here to make every day a little more delicious.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="bakery-section bg-light-gray" id="specialties">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="bakery-section-title" data-aos="fade-up">Our Specialties</h2>
          <p className="bakery-section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Handcrafted daily with the finest ingredients
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Artisan Croissants */}
            <Card className="bakery-product-card" data-aos="fade-up" data-aos-delay="200">
              <div 
                className="bakery-product-image"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-gray font-serif">Artisan Croissants</h3>
                <p className="text-gray-600">
                  Buttery, flaky perfection made with French techniques. Our signature croissants are laminated 
                  with premium European butter for that perfect golden crisp.
                </p>
              </CardContent>
            </Card>

            {/* Custom Celebration Cakes */}
            <Card className="bakery-product-card" data-aos="fade-up" data-aos-delay="300">
              <div 
                className="bakery-product-image"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-gray font-serif">Custom Celebration Cakes</h3>
                <p className="text-gray-600">
                  From birthdays to weddings, our custom cakes are works of art. Each cake is uniquely designed 
                  and crafted to make your special moments unforgettable.
                </p>
              </CardContent>
            </Card>

            {/* Gourmet Pastries */}
            <Card className="bakery-product-card" data-aos="fade-up" data-aos-delay="400">
              <div 
                className="bakery-product-image"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-gray font-serif">Gourmet Pastries</h3>
                <p className="text-gray-600">
                  Delicate macarons, rich éclairs, and seasonal fruit tarts. Our pastry collection showcases 
                  the artistry of French patisserie with modern flavors.
                </p>
              </CardContent>
            </Card>

            {/* Artisan Breads */}
            <Card className="bakery-product-card" data-aos="fade-up" data-aos-delay="500">
              <div 
                className="bakery-product-image"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-gray font-serif">Artisan Breads</h3>
                <p className="text-gray-600">
                  Hand-shaped sourdough, rustic country loaves, and specialty breads. Each loaf is naturally 
                  leavened and baked to create the perfect crust and crumb.
                </p>
              </CardContent>
            </Card>

            {/* Seasonal Specialties */}
            <Card className="bakery-product-card" data-aos="fade-up" data-aos-delay="600">
              <div 
                className="bakery-product-image"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-gray font-serif">Seasonal Specialties</h3>
                <p className="text-gray-600">
                  Fresh fruit tarts, holiday cookies, and limited-time creations featuring the finest seasonal 
                  ingredients sourced from local farms.
                </p>
              </CardContent>
            </Card>

            {/* Coffee & Beverages */}
            <Card className="bakery-product-card" data-aos="fade-up" data-aos-delay="700">
              <div 
                className="bakery-product-image"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-gray font-serif">Coffee & Beverages</h3>
                <p className="text-gray-600">
                  Expertly crafted espresso drinks, premium teas, and house-made hot chocolate. The perfect 
                  complement to our baked goods for any time of day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bakery-section bg-white" id="instagram">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="bakery-section-title" data-aos="fade-up">Follow Our Journey</h2>
          <p className="bakery-section-subtitle" data-aos="fade-up" data-aos-delay="100">
            See our daily creations on Instagram
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Instagram Post 1 */}
            <div 
              className="bakery-instagram-post cursor-pointer" 
              data-aos="zoom-in" 
              data-aos-delay="200"
              onClick={handleInstagramClick}
            >
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Baker kneading dough" 
                className="w-full h-full object-cover"
              />
              <div className="bakery-instagram-overlay">
                <i className="fab fa-instagram text-white text-3xl"></i>
              </div>
            </div>

            {/* Instagram Post 2 */}
            <div 
              className="bakery-instagram-post cursor-pointer" 
              data-aos="zoom-in" 
              data-aos-delay="300"
              onClick={handleInstagramClick}
            >
              <img 
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Fresh croissants cooling" 
                className="w-full h-full object-cover"
              />
              <div className="bakery-instagram-overlay">
                <i className="fab fa-instagram text-white text-3xl"></i>
              </div>
            </div>

            {/* Instagram Post 3 */}
            <div 
              className="bakery-instagram-post cursor-pointer" 
              data-aos="zoom-in" 
              data-aos-delay="400"
              onClick={handleInstagramClick}
            >
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Birthday cake decoration" 
                className="w-full h-full object-cover"
              />
              <div className="bakery-instagram-overlay">
                <i className="fab fa-instagram text-white text-3xl"></i>
              </div>
            </div>

            {/* Instagram Post 4 */}
            <div 
              className="bakery-instagram-post cursor-pointer" 
              data-aos="zoom-in" 
              data-aos-delay="500"
              onClick={handleInstagramClick}
            >
              <img 
                src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bakery interior with customers" 
                className="w-full h-full object-cover"
              />
              <div className="bakery-instagram-overlay">
                <i className="fab fa-instagram text-white text-3xl"></i>
              </div>
            </div>
          </div>

          <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="600">
            <a 
              href="https://www.instagram.com/lvuebakery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold text-xl font-semibold hover:underline inline-flex items-center gap-2"
            >
              <i className="fab fa-instagram"></i>
              @lvuebakery
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bakery-section bg-light-gray" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="bakery-section-title" data-aos="fade-up">Visit Us Today</h2>
          <p className="bakery-section-subtitle" data-aos="fade-up" data-aos-delay="100">
            We can't wait to serve you
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-gray font-serif">Location & Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-3">
                    <i className="fas fa-map-marker-alt text-gold w-5"></i>
                    123 Main Street, Your City, ST 12345
                  </p>
                  <p className="flex items-center gap-3">
                    <i className="fas fa-phone text-gold w-5"></i>
                    (555) 123-4567
                  </p>
                  <p className="flex items-center gap-3">
                    <i className="fas fa-envelope text-gold w-5"></i>
                    hello@lvuebakery.com
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-gray font-serif">Opening Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-3">
                    <i className="fas fa-clock text-gold w-5"></i>
                    Monday - Friday: 7:00 AM - 7:00 PM
                  </p>
                  <p className="flex items-center gap-3">
                    <i className="fas fa-clock text-gold w-5"></i>
                    Saturday: 8:00 AM - 8:00 PM
                  </p>
                  <p className="flex items-center gap-3">
                    <i className="fas fa-clock text-gold w-5"></i>
                    Sunday: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-gray font-serif">Connect With Us</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-3">
                    <i className="fab fa-instagram text-gold w-5"></i>
                    <a href="https://www.instagram.com/lvuebakery" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                      @lvuebakery
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <i className="fas fa-globe text-gold w-5"></i>
                    Custom orders welcome - call ahead!
                  </p>
                </div>
              </div>
            </div>

            <div className="h-96 lg:h-auto" data-aos="fade-left" data-aos-delay="300">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="L'vue Bakery Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bakery-footer">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoPath} 
                alt="L'vue Bakery Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-center text-white/80">
              &copy; 2024 L'vue Bakery. All rights reserved. Baking memories daily.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/lvuebakery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors text-xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-gold transition-colors text-xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-gold transition-colors text-xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
