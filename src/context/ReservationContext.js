import React, { createContext, useState, useContext } from 'react';

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [currentReservation, setCurrentReservation] = useState(null);
  const [checkinCompleted, setCheckinCompleted] = useState(false);

  const updateReservation = (reservationData) => {
    setCurrentReservation(reservationData);
  };

  const completeCheckin = () => {
    setCheckinCompleted(true);
  };

  const hasActiveReservation = () => {
    return currentReservation !== null;
  };

  return (
    <ReservationContext.Provider 
      value={{
        currentReservation,
        updateReservation,
        checkinCompleted,
        completeCheckin,
        hasActiveReservation
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
};
