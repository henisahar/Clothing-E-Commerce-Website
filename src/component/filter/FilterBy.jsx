// import React, { useState } from 'react';
// import SortBy from './SortBy';
// import './FilterBy.css'
// import TypeProducts from './TypeProducts';
// import Colors from './Colors';
// import Size from './Size';
// import Button from './Button';
// function FilterBy(props) {
//     const [showModal, setShowModal] = useState(false);
  
//     const handleCloseModal = () => {
//       setShowModal(false);
//     };
  
//     const handleOpenModal = () => {
//       setShowModal(true);
//     };
  
//     return (
//       <div>
//         <button onClick={handleOpenModal}>Filter By</button>
//         {showModal && (
//           <div className="modal">
//             <div className="modal-content">
//               <span className="close" onClick={handleCloseModal}>
//                 &times;
//               </span>
//               <h2>Filters</h2>
//               <SortBy></SortBy>
//               <TypeProducts></TypeProducts>
              
//               <Colors></Colors>
              
//               <Size></Size>
//               <Button></Button>
//               {/* Add your filtering options here */}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default FilterBy;
import React, { useState ,useEffect} from "react";
import "./Colors.css";
import "./TypeProducts.css";
import "./Button.css";
import './FilterBy.css'
import "./SortBy.css"


 
function FilterBy({ onSort }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const [showDropdown, setShowDropdown] = useState(true);
  const [selectedOption1, setSelectedOption1] = useState("");

  function handleToggle() {
    setShowDropdown(!showDropdown);
  }

  function handleOptionClick(option) {
    setSelectedOption1(option);
  }
  const [showDropdown1, setShowDropdown1] = useState(true);
  const [selectedOption2, setSelectedOption2] = useState("");

  function handleTogglee1() {
    setShowDropdown1(!showDropdown1);
  }

  function handleOptionClicke(option) {
    setSelectedOption2(option);
  }
  const [showDropdown2, setShowDropdown2] = useState(true);
  const [selectedOption3, setSelectedOption3] = useState("");

  function handleToggleee2() {
    setShowDropdown2(!showDropdown2);
  }

  function handleOptionClickee(option) {
    setSelectedOption3(option);
  }
  function deleteClickee(option) {
    document.getElementById(option).checked = false;
  }
  const [showDropdown3, setShowDropdown3] = useState(true);
  const [selectedOption24, setSelectedOption24] = useState("");

  function handleTogglee3() {
    setShowDropdown3(!showDropdown3);
  }

  function handleOptionClicke(option) {
    setSelectedOption24(option);
  }
  const [showDropdown4, setShowDropdown4] = useState(true);
  const [selectedOption4, setSelectedOption4] = useState("");

  function handleToggleee() {
    setShowDropdown4(!showDropdown4);
  }

  function handleOptionClickee(option) {
    setSelectedOption4(option);
  }
  function deleteClickee(option) {
    document.getElementById(option).checked = false;
  }
  
  const handleClick = () => {
    
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });
    setSelectedOption1("false")
    
    
  };

  const [products, setProducts] = useState([]);
  
  

  //const [check, setcheck] = useState(false);

  
  //const makeChecked = () => {setcheck(true)};
  
  useEffect(() => {
    fetch("/MOCK_DATA.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  
  const sortByPrice = () => {
    if (selectedOption1 === "false") { // check if no checkbox is checked
      onSort(products); // return the original fetched data
      return;
    }
    
    const sortedProducts = [...products].sort((a, b) => {
      if (selectedOption1 === "option21") {
        return a.price.replace("$", "") - b.price.replace("$", "");
      } else if (selectedOption1 === "option31") {
        return b.price.replace("$", "") - a.price.replace("$", "");
      }
    });
    //console.log(sortedProducts);
    //console.log(products);
    onSort(sortedProducts);
  }
  
/*
  const sortedProducts = [...products].sort((a, b)  => {
    if ((check === true) && (selectedOption1 === "option21")  ) {
      
      return a.price.replace("$", "") - b.price.replace("$", "");
    } else { if((check === true) && (selectedOption1 === "option31")){
      
      return b.price.replace("$", "") - a.price.replace("$", "");
    }
    }
  });
*/
  return (
    <div>
      <button onClick={handleOpenModal}>Filter By</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Filters</h2>
            <div className="sort-by-container">
              <div className="sort-by-toggle">
                Sort By{" "}
                <span className="arrow" onClick={handleToggle}>
                  &#9662;
                </span>
              </div>
              {showDropdown && (
                <div className="sort-options-container">
                  
                  <input
                    className="sortinput"
                    type="radio"
                    id="sort-by-option21"
                    name="sort-by-option1"
                    value="option21"
                    //checked={selectedOption1 === "option21"}
                    onClick={() => handleOptionClick("option21")}
                  />
                  <label className="sortlabel" htmlFor="sort-by-option21">
                    Price low to high
                  </label>
                  <br />
                  <hr />
                  <input
                    className="sortinput"
                    type="radio"
                    id="sort-by-option31"
                    name="sort-by-option1"
                    value="option31"
                    //checked={selectedOption1 === "option31"}
                    onClick={() => handleOptionClick("option31")}
                  />
                  <label className="sortlabel" htmlFor="sort-by-option31">
                    Price High to Low
                  </label>
                  <br />
                  <hr />
                </div>
              )}
            </div>
            <div className="sort-by-container">
              <div className="sort-by-toggle">
                Type Of Products{" "}
                <span className="arrow" onClick={handleTogglee1}>
                  &#9662;
                </span>
              </div>
              {showDropdown1 && (
                <div className="sort-options-containerr">
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option12"
                      name="sort-by-option"
                      value="option12"
                      //checked={selectedOption2 === "option12"}
                      onClick={() => handleOptionClicke("option12")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option12">
                      Tops and tee-shirts
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option22"
                      name="sort-by-option"
                      value="option22"
                      //checked={selectedOption2 === "option22"}
                      onClick={() => handleOptionClicke("option22")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option22">
                      SweatPants
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option32"
                      name="sort-by-option"
                      value="option32"
                      //checked={selectedOption2 === "option32"}
                      onClick={() => handleOptionClicke("option32")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option32">
                      Trousers
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option42"
                      name="sort-by-option"
                      value="option42"
                      //checked={selectedOption2 === "option42"}
                      onClick={() => handleOptionClicke("option42")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option42">
                      Sweaters
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option52"
                      name="sort-by-option"
                      value="option52"
                      //checked={selectedOption2 === "option52"}
                      onClick={() => handleOptionClicke("option52")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option52">
                      Dressers
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option62"
                      name="sort-by-option"
                      value="option62"
                      //checked={selectedOption2 === "option62"}
                      onClick={() => handleOptionClicke("option62")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option62">
                      Shirts
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option72"
                      name="sort-by-option"
                      value="option72"
                      //checked={selectedOption2 === "option72"}
                      onClick={() => handleOptionClicke("option72")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option72">
                      T-shirts
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option82"
                      name="sort-by-option"
                      value="option82"
                      //checked={selectedOption2 === "option82"}
                      onClick={() => handleOptionClicke("option82")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option82">
                      Hats
                    </label>
                    <br />
                  </div>
                </div>
              )}
              {showDropdown1 ? <hr /> : null}
            </div>

            <div className="sort-by-container">
              <div className="sort-by-toggle">
                Colors{" "}
                <span className="arrow" onClick={handleToggleee2}>
                  &#9662;
                </span>
              </div>
              {showDropdown2 && (
                <div className="sort-options-containerr">
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="option13"
                      name="sort-by-option"
                      value="option13"
                      //checked={selectedOption4 === "option13"}
                      onClick={() => handleOptionClickee("option13")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option13">
                      white
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option23"
                      name="sort-by-option"
                      value="option23"
                      //checked={selectedOption4 === "option23"}
                      onClick={() => handleOptionClickee("option23")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option23">
                      Orange
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option33"
                      name="sort-by-option"
                      value="option33"
                      //checked={selectedOption4 === "option33"}
                      onClick={() => handleOptionClickee("option33")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option33">
                      Beige
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option43"
                      name="sort-by-option"
                      value="option43"
                      //checked={selectedOption4 === "option43"}
                      onClick={() => handleOptionClickee("option43")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option43">
                      Pink
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option53"
                      name="sort-by-option"
                      value="option53"
                      //checked={selectedOption4 === "option53"}
                      onClick={() => handleOptionClickee("option53")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option53">
                      Black
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option63"
                      name="sort-by-option"
                      value="option63"
                      //checked={selectedOption4 === "option63"}
                      onClick={() => handleOptionClickee("option63")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option63">
                      Purple
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option73"
                      name="sort-by-option"
                      value="option73"
                      //checked={selectedOption4 === "option73"}
                      onClick={() => handleOptionClickee("option73")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option73">
                      Green
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option83"
                      name="sort-by-option"
                      value="option83"
                      //checked={selectedOption4 === "option83"}
                      onClick={() => handleOptionClickee("option83")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option83">
                      Red
                    </label>
                    <br />
                  </div>
                </div>
              )}
              {showDropdown2 ? <hr /> : null}
            </div>

            <div className="sort-by-container">
              <div className="sort-by-toggle">
                Size{" "}
                <span className="arrow" onClick={handleTogglee3}>
                  &#9662;
                </span>
              </div>
              {showDropdown3 && (
                <div className="sort-options-containerrr">
                  <div>
                    <input
                      className="sortinput"
                      type="radio"
                      id="sort-by-option12"
                      name="sort-by-option4"
                      value="option12"
                      //checked={selectedOption24 === "option12"}
                      onClick={() => handleOptionClicke("option12")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option12">
                      S
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="radio"
                      id="sort-by-option22"
                      name="sort-by-option4"
                      value="option22"
                      //checked={selectedOption24 === "option22"}
                      onClick={() => handleOptionClicke("option22")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option22">
                      M
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="radio"
                      id="sort-by-option32"
                      name="sort-by-option4"
                      value="option32"
                      //checked={selectedOption24 === "option32"}
                      onClick={() => handleOptionClicke("option32")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option32">
                      L
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="radio"
                      id="sort-by-option42"
                      name="sort-by-option4"
                      value="option42"
                      //checked={selectedOption24 === "option42"}
                      onClick={() => handleOptionClicke("option42")}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option42">
                      XL
                    </label>
                    <br />
                  </div>
                </div>
              )}
              {showDropdown3 ? <hr /> : null}
            </div>
            
            <div>
              <button className="deletee" onClick={handleClick}>
                Delete
              </button>
              <button className="show" onClick={() => sortByPrice()}>
                Show The results ({selectedOption1 === "option21" ? "asc" : selectedOption1 === "option22" ? "desc" : ""}
)
              </button>
              
              
            </div>
            {/* Add your filtering options here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBy;
