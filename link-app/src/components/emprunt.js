import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BookBorrowingComponent = () => {
  const location = useLocation();
  const passedBook = location.state?.book;

  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    available: true,
    coverImage: '/api/placeholder/200/300',
    dueDate: '',
    loanPeriod: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    id: '',
    returnDate: ''
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (passedBook) {
      setBook(passedBook);
    }
  }, [passedBook]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Affiche la modale au lieu de alert()
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const styles = {
    container: {
      maxWidth: '900px',
      margin: '40px auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      gap: '30px',
      padding: '30px',
    },
    leftPanel: {
      flex: 1,
      textAlign: 'center',
    },
    rightPanel: {
      flex: 2,
    },
    cover: {
      width: '180px',
      height: '260px',
      objectFit: 'cover',
      borderRadius: '6px',
      marginBottom: '15px',
    },
    title: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    author: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '10px',
    },
    isbn: {
      fontSize: '14px',
      color: '#888',
      marginBottom: '10px',
    },
    infoRow: {
      fontSize: '15px',
      marginBottom: '8px',
      color: '#444',
    },
    formTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '15px'
    },
    formGroup: {
      marginBottom: '15px'
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#444',
      marginBottom: '5px'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px'
    },
    button: {
      width: '100%',
      backgroundColor: '#3366cc',
      color: 'white',
      border: 'none',
      padding: '12px 15px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '20px'
    },
    termsInfo: {
      fontSize: '14px',
      color: '#666',
      marginTop: '15px',
    },
    termsList: {
      listStyleType: 'disc',
      paddingLeft: '20px',
      marginTop: '5px'
    },

    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      width: '400px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    modalButton: {
      marginTop: '20px',
      backgroundColor: '#3366cc',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.leftPanel}>
            <img src={book.coverImage} alt="Couverture" style={styles.cover} />
            <div style={styles.title}>{book.title}</div>
            <div style={styles.author}>{book.author}</div>
            <div style={styles.isbn}>ISBN : {book.isbn}</div>
            <div style={styles.infoRow}>📅 Retour prévu : {book.dueDate}</div>
            <div style={styles.infoRow}>🕒 Durée du prêt : {book.loanPeriod}</div>
          </div>

          <div style={styles.rightPanel}>
            <h2 style={styles.formTitle}>Emprunter ce livre</h2>

            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  style={styles.input}
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="id">Numéro d'identification</label>
                <input
                  id="id"
                  name="id"
                  type="text"
                  required
                  style={styles.input}
                  value={formData.id}
                  onChange={handleInputChange}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="returnDate">Date de retour prévue</label>
                <input
                  id="returnDate"
                  name="returnDate"
                  type="date"
                  required
                  style={styles.input}
                  value={formData.returnDate}
                  onChange={handleInputChange}
                />
              </div>

              <div style={styles.termsInfo}>
                <p>En empruntant ce livre, vous acceptez les conditions suivantes :</p>
                <ul style={styles.termsList}>
                  <li>Retourner le livre à temps</li>
                  <li>Ne pas l’endommager</li>
                  <li>Payer des frais si nécessaire</li>
                </ul>
              </div>

              <button type="submit" style={styles.button}>
                Confirmer l'emprunt
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Popup de confirmation */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalTitle}>Livre emprunté avec succès !</div>
            <p><strong>Livre :</strong> {book.title}</p>
            <p><strong>Emprunteur :</strong> {formData.name}</p>
            <p><strong>ID :</strong> {formData.id}</p>
            <p><strong>Date de retour :</strong> {formData.returnDate}</p>
            <button style={styles.modalButton} onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookBorrowingComponent;
