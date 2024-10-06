import { create } from 'zustand';

export const flightStore = create((set) => ({
  from: 'DWS', // Default value
  to: 'JBP',   // Default value
  departure: '23/11/2023', // Default value
  returnDate: '30/11/2023', // Default value

  // Action to update the 'from' value
  setFrom: (newFrom:any) => set((state:any) => ({ from: newFrom })),
  
  // Action to update the 'to' value
  setTo: (newTo:any) => set((state:any) => ({ to: newTo })),
  
  // Action to update the 'departure' value
  setDeparture: (newDeparture:any) => set((state:any) => ({ departure: newDeparture })),
  
  // Action to update the 'returnDate' value
  setReturnDate: (newReturnDate:any) => set((state:any) => ({ returnDate: newReturnDate }))
}));

