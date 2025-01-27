import { Fournisseur } from "../../../models/Fournisseur/fournisseur";


export interface FournisseurState {
    fournisseurs: Fournisseur[];  // Liste des fournisseurs
    loading: boolean;             // Indicateur de chargement
    error: string | null;         // Message d'erreur
}

export const initialFournisseurState: FournisseurState = {
    fournisseurs: [],
    loading: false,
    error: null,
};
