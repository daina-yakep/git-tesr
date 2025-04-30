import React, { useEffect, useState } from 'react';
import '../styles/catalogues.css';
import propos from '../Assets/tt.jpg'; // Image de couverture

const BookSearchApp = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState({ name: '', id: '', borrowDate: '', returnDate: '' });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const booksData = [
          { id: 1, title: "L'Étranger", author: "Albert Camus", isbn: "9782070360024", category: "Roman", year: 1942 },
          { id: 2, title: "Candide", author: "Voltaire", isbn: "9782080701730", category: "Philosophie", year: 1759 },
          { id: 3, title: "Les Misérables", author: "Victor Hugo", isbn: "9782253004226", category: "Roman", year: 1862 },
          { id: 4, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", isbn: "9780156013987", category: "Conte", year: 1943 },
          { id: 5, title: "Zadig", author: "Voltaire", isbn: "9782070401406", category: "Philosophie", year: 1747 },
          { id: 6, title: "Notre-Dame de Paris", author: "Victor Hugo", isbn: "9782070401895", category: "Roman", year: 1831 },
        ];
        const uniqueCategories = [...new Set(booksData.map(book => book.category))];
        setBooks(booksData);
        setFilteredBooks(booksData);
        setCategories(uniqueCategories);
        setIsLoading(false);
      } catch {
        setError("Erreur lors du chargement des livres");
        setIsLoading(false);
      }
    }, 800);
  }, []);

  useEffect(() => {
    setFilteredBooks(
      selectedCategory === ''
        ? books
        : books.filter(book => book.category === selectedCategory)
    );
  }, [selectedCategory, books]);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const openBorrowModal = (book) => {
    const today = new Date();
    const returnDate = new Date(today);
    returnDate.setDate(today.getDate() + 14);

    const formattedBorrowDate = today.toISOString().split('T')[0];
    const formattedReturnDate = returnDate.toISOString().split('T')[0];

    setSelectedBook(book);
    setFormData({ name: '', id: '', borrowDate: formattedBorrowDate, returnDate: formattedReturnDate });
    setShowConfirmation(false);
    setShowSuccessPopup(false);
  };

  const closeBorrowModal = () => setSelectedBook(null);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => setShowSuccessPopup(true), 1000);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    closeBorrowModal();
  };

  const modalStyles = {
    overlay: {
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 999
    },
    modal: {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '8px',
      width: '400px',
      maxWidth: '90%',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      width: '100%', marginBottom: '10px',
      padding: '8px', border: '1px solid #ccc', borderRadius: '4px'
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#3366cc',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px'
    }
  };

  if (isLoading) return <div>Chargement des livres...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Bibliothèque</h1>

      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="block w-full p-2 mb-6 border rounded-md"
      >
        <option value="">Toutes les catégories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.map(book => (
          <div key={book.id} className="bg-white rounded shadow p-4">
            <img src={propos} alt="Couverture" className="h-48 object-cover mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p>{book.author} ({book.year})</p>
            <p className="text-sm text-gray-600">{book.category}</p>
            <button onClick={() => openBorrowModal(book)} className="btnn mt-4">
              Emprunter
            </button>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            {!showConfirmation ? (
              <>
                <h2>Emprunter : {selectedBook.title}</h2>
                <form onSubmit={handleSubmit}>
                  <input style={modalStyles.input} placeholder="Nom complet" name="name" value={formData.name} onChange={handleInputChange} required />
                  <input style={modalStyles.input} placeholder="ID" name="id" value={formData.id} onChange={handleInputChange} required />
                  <input style={modalStyles.input} type="date" name="returnDate" value={formData.returnDate} readOnly />

                  <div>
                    <p>En empruntant ce livre, vous acceptez :</p>
                    <ul>
                      <li>Retourner le livre sous 14 jours</li>
                      <li>Le maintenir en bon état</li>
                      <li>payer une amande de 500 en cas de non respect du delais</li>
                    </ul>
                  </div>

                  <button type="submit" style={modalStyles.button}>Confirmer</button>
                  <button onClick={closeBorrowModal} style={{ ...modalStyles.button, backgroundColor: '#888', marginLeft: '10px' }}>Annuler</button>
                </form>
              </>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-700">✔ Emprunt Confirmé</h3>
                <p><strong>📘 Titre :</strong> {selectedBook.title}</p>
                <p><strong>✍️ Auteur :</strong> {selectedBook.author}</p>
                <p><strong>🔢 ISBN :</strong> {selectedBook.isbn}</p>
                <p><strong>📂 Catégorie :</strong> {selectedBook.category}</p>
                <p><strong>🧑 Nom :</strong> {formData.name}</p>
                <p><strong>🆔 ID :</strong> {formData.id}</p>
                <p><strong>📅 Emprunté le :</strong> {formData.borrowDate}</p>
                <p><strong>📅 Retour prévu :</strong> {formData.returnDate}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h2 style={{ color: 'green' }}>✅ Livre emprunté avec succès !</h2>
            <p className="mt-4">
              Merci <strong>{formData.name}</strong>, vous avez emprunté <strong>{selectedBook.title}</strong>.<br />
              📅 <strong>Date d'emprunt :</strong> {formData.borrowDate}<br />
              📅 <strong>Date de retour :</strong> {formData.returnDate}
            </p>
            <p style={{ fontSize: '13px', marginTop: '20px', color: '#666' }}>
              <strong>NB :</strong> Un retard dans le retour peut entraîner des pénalités. Merci de respecter les délais.
            </p>
            <button onClick={closeSuccessPopup} style={{ ...modalStyles.button, marginTop: '20px' }}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSearchApp;
