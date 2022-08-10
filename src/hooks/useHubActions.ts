/* eslint-disable no-console */
import { useHub } from "./useHub";
import { ApiLocation } from "../types/apiTypes/apiLocation";
import { ApiFlightplan } from "../types/apiTypes/apiFlightplan";

export const useHubActions = () => {
  const hubConnection = useHub();

  const generateFrd = (location: ApiLocation) =>
    hubConnection?.invoke<string>("generateFrd", location).catch(error => {
      console.log(error);
      return null;
    }) ?? null;

  const amendFlightplan = async (fp: ApiFlightplan) => {
    hubConnection?.invoke<void>("amendFlightPlan", fp).catch(e => {
      console.log("error amending flightplan:", e);
    });
  };

  return {
    generateFrd,
    amendFlightplan
  };
};
/* eslint-enable no-console */
