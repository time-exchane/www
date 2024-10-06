import React, { useState, useEffect } from 'react';
import { Clock, Users, Book, Star } from 'lucide-react';

const translations = {
  en: {
    title: "Time Exchange",
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      signUp: "Sign Up"
    },
    hero: {
      headline: "Share Skills, Grow Together",
      subheadline: "Exchange your time and expertise with others in your community.",
      cta: "Get Started"
    },
    features: {
      title: "Why Choose Time Exchange?",
      items: [
        { title: "Value Your Time", description: "Every hour counts, regardless of the skill." },
        { title: "Build Community", description: "Connect with like-minded individuals near you." },
        { title: "Learn Anything", description: "Access a diverse range of skills and knowledge." },
        { title: "Share Your Expertise", description: "Teach others and reinforce your own skills." }
      ]
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        "Create your profile and list your skills",
        "Search for skills you want to learn",
        "Request a time exchange with another user",
        "Meet up and share your knowledge",
        "Rate your experience and build your reputation"
      ]
    },
    signup: {
      title: "Join Time Exchange Today",
      subtitle: "Be part of a growing community of learners and teachers.",
      placeholder: "Enter your email",
      button: "Get Early Access"
    },
    footer: "© 2024 Time Exchange. All rights reserved."
  },
  el: {
    title: "ΤράπεζαΧρόνου",
    nav: {
      features: "Χαρακτηριστικά",
      howItWorks: "Πώς λειτουργεί",
      signUp: "Εγγραφή"
    },
    hero: {
      headline: "Μοιραστείτε Δεξιότητες, Μεγαλώστε Μαζί",
      subheadline: "Ανταλλάξτε τον χρόνο και την εμπειρία σας με άλλους στην κοινότητά σας.",
      cta: "Ξεκινήστε"
    },
    features: {
      title: "Γιατί να επιλέξετε την ΤράπεζαΧρόνου;",
      items: [
        { title: "Αξιοποιήστε τον Χρόνο σας", description: "Κάθε ώρα μετράει, ανεξάρτητα από τη δεξιότητα." },
        { title: "Χτίστε Κοινότητα", description: "Συνδεθείτε με άτομα με κοινά ενδιαφέροντα κοντά σας." },
        { title: "Μάθετε Οτιδήποτε", description: "Αποκτήστε πρόσβαση σε ένα ευρύ φάσμα δεξιοτήτων και γνώσεων." },
        { title: "Μοιραστείτε την Εμπειρία σας", description: "Διδάξτε άλλους και ενισχύστε τις δικές σας δεξιότητες." }
      ]
    },
    howItWorks: {
      title: "Πώς Λειτουργεί",
      steps: [
        "Δημιουργήστε το προφίλ σας και καταχωρίστε τις δεξιότητές σας",
        "Αναζητήστε δεξιότητες που θέλετε να μάθετε",
        "Ζητήστε ανταλλαγή χρόνου με άλλο χρήστη",
        "Συναντηθείτε και μοιραστείτε τις γνώσεις σας",
        "Αξιολογήστε την εμπειρία σας και χτίστε τη φήμη σας"
      ]
    },
    signup: {
      title: "Γίνετε Μέλος της ΤράπεζαΧρόνου Σήμερα",
      subtitle: "Γίνετε μέρος μιας αναπτυσσόμενης κοινότητας μαθητών και δασκάλων.",
      placeholder: "Εισάγετε το email σας",
      button: "Αποκτήστε Πρόσβαση"
    },
    footer: "© 2024 ΤράπεζαΧρόνου. Όλα τα δικαιώματα διατηρούνται."
  }
};

export default function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    setLanguage(userLanguage.startsWith('el') ? 'el' : 'en');
  }, []);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">{t.title}</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-blue-600 hover:text-blue-800">{t.nav.features}</a></li>
            <li><a href="#how-it-works" className="text-blue-600 hover:text-blue-800">{t.nav.howItWorks}</a></li>
            <li><a href="#signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{t.nav.signUp}</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold mb-4">{t.hero.headline}</h2>
          <p className="text-xl mb-8">{t.hero.subheadline}</p>
          <a href="#signup" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">{t.hero.cta}</a>
        </section>

        <section id="features" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t.features.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                <div className="mb-4">
                  {[<Clock />, <Users />, <Book />, <Star />][index]}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="signup" className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.signup.title}</h2>
          <p className="text-xl mb-8">{t.signup.subtitle}</p>
          <form className="max-w-md mx-auto" data-netlify="true">
            <input type="email" placeholder={t.signup.placeholder} className="w-full p-3 mb-4 border rounded" required />
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300">
              {t.signup.button}
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}