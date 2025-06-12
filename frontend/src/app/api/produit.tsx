import localhost from "../localhost/localhost";

//AFFICHAGE PRODUITS
export const getProduits = async ()=>{
    const response = await localhost.get('/prodits');
    return response.data;
}

//AFFICHAGE PRODUIT (nom, detail, description, prix, photo)
export const getLitsePro = async ()=>{
    const response = await localhost.get('/produits/liste');
    return response.data;
}