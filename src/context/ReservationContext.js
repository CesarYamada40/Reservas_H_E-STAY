import React, { createContext, useContext, useReducer } from 'react';

const ReservationContext = createContext();

const initialState = {
  location: '',
  checkInDate: null,
  checkOutDate: null,
  guests: 1,
  rooms: 1,
  preferences: {},
};

const reservationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload };
    case 'SET_CHECK_IN':
      return { ...state, checkInDate: action.payload };
    case 'SET_CHECK_OUT':
      return { ...state, checkOutDate: action.payload };
    case 'SET_GUESTS_AND_ROOMS':
      return {
        ...state,
        guests: action.payload.guests,
        rooms: action.payload.rooms,
      };
    case 'SET_PREFERENCES':
      return { ...state, preferences: action.payload };
    case 'RESET_RESERVATION':
      return initialState;
    default:
      return state;
  }
};

export const ReservationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reservationReducer, initialState);

  const setLocation = (location) => {
    dispatch({ type: 'SET_LOCATION', payload: location });
  };

  const setCheckIn = (date) => {
    dispatch({ type: 'SET_CHECK_IN', payload: date });
  };

  const setCheckOut = (date) => {
    dispatch({ type: 'SET_CHECK_OUT', payload: date });
  };

  const setGuestsAndRooms = (guests, rooms) => {
    dispatch({
      type: 'SET_GUESTS_AND_ROOMS',
      payload: { guests, rooms },
    });
  };

  const setPreferences = (preferences) => {
    dispatch({ type: 'SET_PREFERENCES', payload: preferences });
  };

  const resetReservation = () => {
    dispatch({ type: 'RESET_RESERVATION' });
  };

  return (
    <ReservationContext.Provider
      value={{
        ...state,
        setLocation,
        setCheckIn,
        setCheckOut,
        setGuestsAndRooms,
        setPreferences,
        resetReservation,
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
