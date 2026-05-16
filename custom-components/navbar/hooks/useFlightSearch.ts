/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { DEFAULT_TRIP_TYPE, DEFAULT_FROM, DEFAULT_TO, DEFAULT_TRAVELLERS, DEFAULT_FARE_TYPE } from "../constants";
import type { FlightSearchState } from "../types";
import type { Location } from "../types";

export function useFlightSearch() {
  const [state, setState] = useState<FlightSearchState>({
    tripType: DEFAULT_TRIP_TYPE,
    from: DEFAULT_FROM,
    to: DEFAULT_TO,
    departureDate: new Date("2026-04-24"),
    returnDate: undefined,
    travellers: DEFAULT_TRAVELLERS,
    fareType: DEFAULT_FARE_TYPE,
    nonStop: false,
    
  });

  const setTripType = (tripType: FlightSearchState["tripType"]) =>
    setState((prev:any) => ({ ...prev, tripType }));

  const setFareType = (fareType: FlightSearchState["fareType"]) =>
    setState((prev) => ({ ...prev, fareType }));

  const setNonStop = (nonStop: boolean) =>
    setState((prev:any) => ({ ...prev, nonStop }));

  const setDepartureDate = (departureDate: Date | undefined) =>
    setState((prev:any) => ({ ...prev, departureDate }));

  const setReturnDate = (returnDate: Date | undefined) =>
    setState((prev:any) => ({ ...prev, returnDate }));

  const setFrom = (from: Location) =>
    setState((prev:any) => ({ ...prev, from }));

  const setTo = (to: Location) =>
    setState((prev:any) => ({ ...prev, to }));

  const swapLocations = () =>
    setState((prev:any) => ({ ...prev, from: prev.to, to: prev.from }));

  const setTravellers = (travellers: FlightSearchState["travellers"]) =>
    setState((prev:any) => ({ ...prev, travellers }));

  const handleSearch = () => {
    // integrate with search API here
  };

  return {
    state,
    setTripType,
    setFareType,
    setNonStop,
    setDepartureDate,
    setReturnDate,
    setFrom,
    setTo,
    swapLocations,
    setTravellers,
    handleSearch,
  };
}
