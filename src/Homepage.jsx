import React, { useState } from 'react';
import { ArrowLeft, Calendar, Plus, Clock, MapPin, Package, X, DollarSign, Weight, User } from 'lucide-react';
import './style/CalendrierPage.css';
import './App.css';
import Navigation from '../src/Navigation';
const CalendrierPage = ({ onNavigateHome }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [newSlot, setNewSlot] = useState({
    time: '',
    departure: '',
    destination: '',
    capacity: '',
    feePerKg: '',
    maxWeight: '',
    transportType: 'standard'
  });
  const [newPackage, setNewPackage] = useState({
    senderName: '',
    senderPhone: '',
    senderAddress: '',
    recipientName: '',
    recipientPhone: '',
    recipientAddress: '',
    packageType: 'document',
    weight: '',
    description: '',
    declaredValue: '',
    insurance: false,
    paymentMethod: 'cash'
  });

  const mockSlots = [
    { 
      id: 1, 
      time: '09:00', 
      departure: 'Dakar', 
      destination: 'Paris', 
      capacity: 5, 
      used: 2,
      feePerKg: 5000,
      maxWeight: 25,
      transportType: 'express'
    },
    { 
      id: 2, 
      time: '14:00', 
      departure: 'Dakar', 
      destination: 'Lyon', 
      capacity: 8, 
      used: 6,
      feePerKg: 4500,
      maxWeight: 30,
      transportType: 'standard'
    },
    { 
      id: 3, 
      time: '16:30', 
      departure: 'Dakar', 
      destination: 'Marseille', 
      capacity: 3, 
      used: 1,
      feePerKg: 4800,
      maxWeight: 20,
      transportType: 'express'
    },
  ];

  const handleOpenModal = (type, slot = null) => {
    setModalType(type);
    if (slot) setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType('');
    setSelectedSlot(null);
  };

  const handleAddSlot = () => {
    console.log("Nouveau créneau:", newSlot);
    setNewSlot({
      time: '',
      departure: '',
      destination: '',
      capacity: '',
      feePerKg: '',
      maxWeight: '',
      transportType: 'standard'
    });
    handleCloseModal();
  };

  const handleAddPackage = () => {
    console.log("Nouveau colis:", newPackage);
    setNewPackage({
      senderName: '',
      senderPhone: '',
      senderAddress: '',
      recipientName: '',
      recipientPhone: '',
      recipientAddress: '',
      packageType: 'document',
      weight: '',
      description: '',
      declaredValue: '',
      insurance: false,
      paymentMethod: 'cash'
    });
    handleCloseModal();
  };

  return (
    <div className="calendrier-page">
      <Navigation  />
      <div className="background-gradient"></div>
      
     

      <div className="content-container">
        <div className="page-header">
          <div className="header-icon">
            <Calendar size={48} />
          </div>
          <h1 className="page-title">Calendrier d'envoi de GP</h1>
          <p className="page-subtitle">
            Gérez vos créneaux d'envoi et planifiez vos livraisons
          </p>
        </div>

        <div className="calendar-container">
          <div className="calendar-header">
            <h3>Sélectionner une date</h3>
            <button 
              className="add-slot-btn"
              onClick={() => handleOpenModal('slot')}
            >
              <Plus size={20} />
              Ajouter un créneau
            </button>
          </div>

          <div className="calendar-content">
            <div className="date-picker-section">
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-input"
              />
            </div>

            <div className="slots-section">
              <h4>Créneaux disponibles</h4>
              <div className="slots-grid">
                {mockSlots.map((slot) => (
                  <div key={slot.id} className="slot-card">
                    <div className="slot-header">
                      <div className="slot-time">
                        <Clock size={18} />
                        {slot.time}
                      </div>
                      <div className="slot-capacity">
                        {slot.used}/{slot.capacity}
                      </div>
                    </div>
                    <div className="slot-destination">
                      <MapPin size={16} />
                      {slot.departure} → {slot.destination}
                    </div>
                    <div className="slot-details">
                      <div className="slot-detail">
                        <DollarSign size={14} />
                        {slot.feePerKg} FCFA/kg
                      </div>
                      <div className="slot-detail">
                        <Weight size={14} />
                        Max: {slot.maxWeight}kg
                      </div>
                    </div>
                    <div className="slot-progress">
                      <div 
                        className="progress-bar"
                        style={{ width: `${(slot.used / slot.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <button 
                      className="add-package-btn"
                      onClick={() => handleOpenModal('package', slot)}
                    >
                      <Package size={16} />
                      Ajouter un colis
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pour les formulaires */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <X size={20} />
            </button>
            
            {modalType === 'slot' && (
              <>
                <h2 className="modal-title">Nouveau créneau d'expédition</h2>
                <div className="modal-form">
                  <div className="modal-form-section">
                    <div className="modal-form-grid">
                      <div className="modal-form-group">
                        <label>Heure de départ</label>
                        <input 
                          type="time" 
                          value={newSlot.time}
                          onChange={(e) => setNewSlot({...newSlot, time: e.target.value})}
                          className="modal-form-input" 
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Point de départ</label>
                        <input 
                          type="text" 
                          placeholder="Ex: Dakar, Sénégal"
                          value={newSlot.departure}
                          onChange={(e) => setNewSlot({...newSlot, departure: e.target.value})}
                          className="modal-form-input" 
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Destination</label>
                        <input 
                          type="text" 
                          placeholder="Ex: Paris, France"
                          value={newSlot.destination}
                          onChange={(e) => setNewSlot({...newSlot, destination: e.target.value})}
                          className="modal-form-input" 
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Capacité maximale (colis)</label>
                        <input 
                          type="number" 
                          value={newSlot.capacity}
                          onChange={(e) => setNewSlot({...newSlot, capacity: e.target.value})}
                          className="modal-form-input" 
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Frais d'envoi par kilo (FCFA)</label>
                        <input 
                          type="number" 
                          value={newSlot.feePerKg}
                          onChange={(e) => setNewSlot({...newSlot, feePerKg: e.target.value})}
                          className="modal-form-input" 
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Poids maximum par colis (kg)</label>
                        <input 
                          type="number" 
                          value={newSlot.maxWeight}
                          onChange={(e) => setNewSlot({...newSlot, maxWeight: e.target.value})}
                          className="modal-form-input" 
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Type de transport</label>
                        <select 
                          value={newSlot.transportType}
                          onChange={(e) => setNewSlot({...newSlot, transportType: e.target.value})}
                          className="modal-form-input"
                        >
                          <option value="standard">Standard</option>
                          <option value="express">Express</option>
                          <option value="priority">Prioritaire</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {modalType === 'package' && selectedSlot && (
              <>
                <h2 className="modal-title">Enregistrement d'un nouveau colis</h2>
                <p className="modal-subtitle">
                  Pour le créneau: {selectedSlot.time} - {selectedSlot.departure} → {selectedSlot.destination}
                </p>
                <div className="modal-form">
                  <div className="modal-form-section">
                    <h5><User size={18} /> Informations de l'expéditeur</h5>
                    <div className="modal-form-grid">
                      <div className="modal-form-group">
                        <label>Nom complet</label>
                        <input 
                          type="text" 
                          value={newPackage.senderName}
                          onChange={(e) => setNewPackage({...newPackage, senderName: e.target.value})}
                          className="modal-form-input" 
                          placeholder="Nom et prénom"
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Téléphone</label>
                        <input 
                          type="tel" 
                          value={newPackage.senderPhone}
                          onChange={(e) => setNewPackage({...newPackage, senderPhone: e.target.value})}
                          className="modal-form-input" 
                          placeholder="+221 XX XXX XX XX"
                        />
                      </div>
                      
                      <div className="modal-form-group modal-full-width">
                        <label>Adresse complète</label>
                        <input 
                          type="text" 
                          value={newPackage.senderAddress}
                          onChange={(e) => setNewPackage({...newPackage, senderAddress: e.target.value})}
                          className="modal-form-input" 
                          placeholder="Adresse de l'expéditeur"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="modal-form-section">
                    <h5><User size={18} /> Informations du destinataire</h5>
                    <div className="modal-form-grid">
                      <div className="modal-form-group">
                        <label>Nom complet</label>
                        <input 
                          type="text" 
                          value={newPackage.recipientName}
                          onChange={(e) => setNewPackage({...newPackage, recipientName: e.target.value})}
                          className="modal-form-input" 
                          placeholder="Nom et prénom"
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Téléphone</label>
                        <input 
                          type="tel" 
                          value={newPackage.recipientPhone}
                          onChange={(e) => setNewPackage({...newPackage, recipientPhone: e.target.value})}
                          className="modal-form-input" 
                          placeholder="Numéro du destinataire"
                        />
                      </div>
                      
                      <div className="modal-form-group modal-full-width">
                        <label>Adresse complète</label>
                        <input 
                          type="text" 
                          value={newPackage.recipientAddress}
                          onChange={(e) => setNewPackage({...newPackage, recipientAddress: e.target.value})}
                          className="modal-form-input" 
                          placeholder="Adresse de livraison"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="modal-form-section">
                    <h5><Package size={18} /> Détails du colis</h5>
                    <div className="modal-form-grid">
                      <div className="modal-form-group">
                        <label>Type de colis</label>
                        <select 
                          value={newPackage.packageType}
                          onChange={(e) => setNewPackage({...newPackage, packageType: e.target.value})}
                          className="modal-form-input"
                        >
                          <option value="document">Documents</option>
                          <option value="clothing">Vêtements</option>
                          <option value="electronics">Électronique</option>
                          <option value="food">Nourriture</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Poids (kg)</label>
                        <input 
                          type="number" 
                          step="0.1"
                          value={newPackage.weight}
                          onChange={(e) => setNewPackage({...newPackage, weight: e.target.value})}
                          className="modal-form-input" 
                          placeholder="0.0"
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Valeur déclarée (FCFA)</label>
                        <input 
                          type="number" 
                          value={newPackage.declaredValue}
                          onChange={(e) => setNewPackage({...newPackage, declaredValue: e.target.value})}
                          className="modal-form-input" 
                          placeholder="Optionnel"
                        />
                      </div>
                      
                      <div className="modal-form-group">
                        <label>Méthode de paiement</label>
                        <select 
                          value={newPackage.paymentMethod}
                          onChange={(e) => setNewPackage({...newPackage, paymentMethod: e.target.value})}
                          className="modal-form-input"
                        >
                          <option value="cash">Espèces</option>
                          <option value="card">Carte bancaire</option>
                          <option value="transfer">Virement</option>
                          <option value="mobile">Paiement mobile</option>
                        </select>
                      </div>
                      
                      <div className="modal-form-group modal-checkbox-group">
                        <label>
                          <input 
                            type="checkbox" 
                            checked={newPackage.insurance}
                            onChange={(e) => setNewPackage({...newPackage, insurance: e.target.checked})}
                          />
                          Assurance colis
                        </label>
                      </div>
                      
                      <div className="modal-form-group modal-full-width">
                        <label>Description du contenu</label>
                        <textarea 
                          value={newPackage.description}
                          onChange={(e) => setNewPackage({...newPackage, description: e.target.value})}
                          className="modal-form-input" 
                          placeholder="Décrivez le contenu du colis"
                          rows="3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            <div className="modal-form-actions">
              <button className="modal-cancel-btn" onClick={handleCloseModal}>
                Annuler
              </button>
              <button 
                className="modal-submit-btn" 
                onClick={modalType === 'slot' ? handleAddSlot : handleAddPackage}
              >
                {modalType === 'slot' ? 'Créer le créneau' : 'Enregistrer le colis'}
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default CalendrierPage;