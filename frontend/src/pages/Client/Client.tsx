import { StylesProvider } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IFleaItem } from "../../components/interfaces/vendor-interfaces";
import { Listview } from "../../components/Listview";
import PriceFilter from "../../components/PriceFilter";
import Search from "../../components/Search";
import { fleaItemKey } from "../../constants/constant";
import { getFleaItemsFromLocalstorage } from "../../utils/utils";
import "./Client.css";

export default function Client() {
  const fleaArticles: IFleaItem[] = getFleaItemsFromLocalstorage();

  // Sortiere Elemente
  //fleaArticles.sort((a, b) => b.id - a.id);
  const [filteredItems, setFilteredItems] = useState(fleaArticles);

  const handleDeleteItem = (fleaItem: IFleaItem) => {
    //TODO Bug eingebaut - > ware loeschen funktioniert nicht
    //console.log(fleaItem.name);
    //const filteredFleaArticles = fleaArticles.filter((x) => {
    //  return x.id !== fleaItem.id;
    //});

    //localStorage.setItem(fleaItemKey, JSON.stringify(filteredFleaArticles));
    //setFilteredItems([...filteredFleaArticles]);
  };

  // Filter nach Preis (Warenpreis darf Filter nicht überschreiten)
  const handlePriceFilter = (price: number) => {
    const foundItems = fleaArticles.filter((x) => {
      // Filter Preis innerhalb des PreisFilters.
      return x.price >= price;
    });

    if (foundItems.length !== 0) {
      setFilteredItems([...foundItems]);
    } else {
      setFilteredItems([]);
    }
  };

  // Filter nach Artikelname
  const handleNameFilter = (nameFilter: string) => {
    const foundItems = fleaArticles.filter((x) => {
      const nameInLowerCase = x.name.toLocaleLowerCase();
      return nameInLowerCase.includes(nameFilter);
    });

    if (foundItems.length !== 0) {
      setFilteredItems([...foundItems]);
    } else {
      setFilteredItems([]);
    }
  };

  useEffect(() => {}, [filteredItems]);
//Bug eingefuegt - > Link zu willhaben.at 
  return (
    <StylesProvider injectFirst>
      <div className="client-container">
        <div className="page-header">
          <p
            id="client__container__description"
            className="client-container-description"
          >
            In Marktplatz findest du alle Artikel, die deine Kollegen nicht mehr
            brauchen und gerne verkaufen oder verschenken wollen!
            <br />
            <br />
            Schau doch mal ob etwas für dich dabei ist!
            <br />
            <br />
            <Link className="nav-link" to="/vendors">
              Willst du selber etwas verkaufen dann geht zur Artikelanlage
            </Link>

          </p>
        </div>
        <div className="client-container-searchbar">
          <PriceFilter onHandleSearch={handlePriceFilter} />
          <Search onHandleSearch={handleNameFilter} />
        </div>
        <div className="search-result-container">
          <Listview onDelete={handleDeleteItem} fleaItems={filteredItems} />
        </div>
      </div>
    </StylesProvider>
  );
}
