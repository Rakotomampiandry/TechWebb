import localhost from "../localhost/localhost";

//AFFICHAGE PANIER
export const getPanier = async ()=>{
    const response = await localhost.get('/paniers');
    return response.data;
}

// Mise à jour
export const updatePanier = async ()=>{
    const response = await localhost.patch('/panier');
    return response.data;
}

// Delete panier
export const deletePanier = async ()=>{
    const response = await localhost.delete('/panier');
    return response.data;
}

// Affichage produit panier client
export const getProPanCli = async ()=>{
    const response = await localhost.get('/paniers/liste');
    return response.data;
}

// Somme produit client
export const getSomme = async ()=>{
    const response = await localhost.get('/paniers/sum');
    return response.data;
}