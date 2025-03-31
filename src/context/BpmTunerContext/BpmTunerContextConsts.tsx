import { IBpmTunerContext } from "./BpmTunerContextInterfaces";
import { createContext } from "react";

export const BpmTunerContext = createContext<IBpmTunerContext>(null);
