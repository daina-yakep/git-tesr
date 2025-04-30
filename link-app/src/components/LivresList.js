
// import { useState } from 'react'
// import { ListeBook } from '../components/ListBook'

// import LivresItem from './LivresItem'
// import Categories from './categories'
  
// function LivreList({ card, updateCard }) {
// 	const [activeCategory, setActiveCategory] = useState('')
// 	const categories = ListePlante.reduce(
// 		(acc, elem) =>
// 			acc.includes(elem.category) ? acc : acc.concat(elem.category),
// 		[]
// 	)

// 	function addToCard(titre,auteur, price) {
// 		const currentPlantAdded = card.find((plant) => plant.name === name)
// 		if (currentPlantAdded) {
// 			const cartFilteredCurrentPlant = card.filter(
// 				(plante) => plante.name !== name
// 			)
// 			updateCard([
// 				...cartFilteredCurrentPlant,
// 				{ name, price, amount: currentPlantAdded.amount + 1 }
// 			])
// 		} else {
// 			updateCard([...card, { name, price, amount: 1 }])
// 		}
// 	}

// 	return (
// 		<div className='lmj-book-list'>
// 			<Categories
// 				categories={categories}
// 				setActiveCategory={setActiveCategory}
// 				activeCategory={activeCategory}
// 			/>

// 			<ul className='lmj-plant-list'>
// 				{ListePlante.map(({ id, cover, titre, auteur, price, category }) =>
// 					!activeCategory || activeCategory === category ? (
// 						<div key={id}>
// 							<Planteitem
// 								cover={cover}
// 								titre={titre}
// 								auteur={auteur}
// 								price={price}
// 							/>
// 							<button className='ajout' onClick={() => addToCard(titre, price)}>Ajouter</button>
// 						</div>
// 					) : null
// 				)}
// 			</ul>
// 		</div>
// 	)
// }

// export default ShoppingList
















// // import React from "react";
// // import LivreItem from "./LivreItem";

// // function LivreList({ livres, emprunterLivre, retournerLivre }) {
// //   return (
// //     <ul>
// //       {livres.map((livre, index) => (
// //         <LivreItem
// //           key={index}
// //           livre={livre}
// //           onEmprunter={() => emprunterLivre(index)}
// //           onRetourner={() => retournerLivre(index)}
// //         />
// //       ))}
// //     </ul>
// //   );
// // }

// // export default LivreList;
