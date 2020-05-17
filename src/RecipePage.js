import React, { useState, useEffect } from 'react';
import styles from './RecipePage.module.css';
import Recipe from './Recipe';
import { BsClock, BsBook, BsPerson } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default () => {
  const API_KEY = 'ca937a9553324b8d91d651d93a2b2409';
  const location = useLocation();
  // console.log(location.state);
  const [show, setShow] = useState(false);
  const [fridgeIngred, setFridgeIngred] = useState([]);
  const [seasonalIngred, setSeasonalIngred] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [recipeImg, setRecipeImg] = useState('');
  const [ingredAmount, setIngredAmount] = useState(0);
  const [recipeId, setRecipeId] = useState('');
  const [arrOfAllUsedIngred, setarrOfAllUsedIngred] = useState([]);
  const [arrOfInstr, setarrOfInstr] = useState([]);
  const [counter, setCounter] = useState(2);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   console.log('This will run every second!');
    //   setCounter(counter => counter + 1);
    // }, 5000);
    axios
      .all([
        axios.get('http://localhost:3004/groceries'),
        axios.get('http://localhost:3004/inSeasonFood')
      ])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          // use/access the results
          let groceryData = responseOne.data.map(ele => {
            return ele.title;
          });
          console.log('grocery', groceryData);
          // setFridgeIngred(groceryData);
          let inSeasonData = responseTwo.data[0].map(ele => {
            return ele;
          });
          console.log('inseason', inSeasonData);
          // setSeasonalIngred(inSeasonData);

          let tempArr = groceryData.concat(inSeasonData);
          const tempStr = tempArr.join(',+');
          axios
            .get(
              `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${tempStr}&number=100&apiKey=${API_KEY}&vegan=true`
            )
            .then(resp => {
              console.log('hello');
              // console.log('RESPONSE:', resp.data);
              console.log('ALL RECIPIES:', resp.data);
              console.log('COUNTER', counter);
              setRecipeId(resp.data[counter].id);
              // console.log('ID:', resp.data[0].id);
              setRecipeName(resp.data[counter].title);
              setRecipeImg(resp.data[counter].image);
              setIngredAmount(
                resp.data[counter].usedIngredientCount +
                  resp.data[counter].missedIngredientCount
              );
              // console.log('Missing INGR:', resp.data[0].missedIngredients);
              let arrOfIngr = resp.data[counter].missedIngredients.concat(
                resp.data[counter].usedIngredients
              );
              const finalArrOfIngr = arrOfIngr.map(ele => {
                // console.log('ELEEEE:', ele);
                return {
                  imgURL: ele.image,
                  ingredientName: ele.originalString
                };
              });
              setarrOfAllUsedIngred(finalArrOfIngr);
              return resp.data[counter].id;
            })
            .then(resp => {
              // console.log('RESP:', resp);
              axios
                .get(
                  `https://api.spoonacular.com/recipes/${resp}/analyzedInstructions?apiKey=${API_KEY}`
                )
                .then(resp => {
                  console.log('RESP:', resp.data[0].steps);
                  const instructions = resp.data[0].steps;
                  const arrOfInstr = instructions.map(ele => {
                    return ele.step;
                  });
                  setarrOfInstr(arrOfInstr);
                });
            });
        })
      )
      .catch(errors => {
        // react on errors.
      });
    // }, 5000);
    // return () => clearInterval(interval);
  }, []);

  // const getRecipe = () => {
  //   let tempArr = fridgeIngred.slice();
  //   // console.log('SSSS', seasonalIngred);
  //   tempArr = tempArr.concat(seasonalIngred);
  //   const tempStr = tempArr.join(',+');
  //   axios
  //     .get(
  //       `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${tempStr}&number=1&apiKey=42fc9d52bd6243f58f6cce82f2a45c50&vegan=true`
  //     )
  //     .then(resp => {
  //       console.log('RESPONSE:', resp.data);
  //       setRecipeId(resp.data[0].id);
  //       console.log('ID:', resp.data[0].id);
  //       setRecipeName(resp.data[0].title);
  //       setRecipeImg(resp.data[0].image);
  //       setIngredAmount(
  //         resp.data[0].usedIngredientCount + resp.data[0].missedIngredientCount
  //       );
  //       console.log('Missing INGR:', resp.data[0].missedIngredients);
  //       let arrOfIngr = resp.data[0].missedIngredients.concat(
  //         resp.data[0].usedIngredients
  //       );
  //       const finalArrOfIngr = arrOfIngr.map(ele => {
  //         console.log('ELEEEE:', ele);
  //         return { imgURL: ele.image, ingredientName: ele.originalString };
  //       });
  //       setarrOfAllUsedIngred(finalArrOfIngr);
  //     });
  // };

  // getRecipe();
  // axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${tempStr}&number=2&apiKey=42fc9d52bd6243f58f6cce82f2a45c50&vegan=true`)

  const handleClose = () => setShow(false);
  const handleShow = () => {
    // getRecipe();
    setShow(true);
  };
  return (
    <div>
      <NavBar selection={'recipe'} />
      <header style={{ textAlign: 'center', padding: '30px' }}>
        <h1>PUT LOGO HERE</h1>
      </header>
      <div className="container">
        <div
          className="card shadow-lg"
          style={{
            width: '400px',
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: "'Josefin Sans', sans-serif",
            transform: 'none'
          }}
        >
          <img
            // src="https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10131071761-1.jpg"
            src={recipeImg}
            className="card-img-top shadow"
            alt="..."
            style={{ width: '100%' }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: '600' }}>
              {recipeName}
            </h5>
            <hr />
            <div className={styles.iconDisplay}>
              <span>
                <BsClock style={{ marginBottom: '2.8px' }} />{' '}
                <span className={styles.spanDisplay}>20</span>
              </span>
              <span>
                <BsBook style={{ marginBottom: '2.8px' }} />{' '}
                <span className={styles.spanDisplay}>{ingredAmount}</span>
              </span>
              <span>
                <BsPerson style={{ marginBottom: '2.8px' }} />{' '}
                <span className={styles.spanDisplay}>2-4</span>
              </span>
            </div>
            <div className={styles.iconDisplay}>
              <span>Minutes</span>
              <span>Ingredients</span>
              <span>Serving</span>
            </div>
            <br />
            <p className="card-text">
              Here is your personalized vegan recipe! Yum.
            </p>
            <button
              id={styles.recipeButton}
              className="btn btn-primary"
              onClick={handleShow}
            >
              Get Recipe
            </button>
            <Modal show={show} onHide={handleClose} id={styles.modal}>
              <Recipe
                arrOfIngredients={arrOfAllUsedIngred}
                arrOfInstructions={arrOfInstr}
                recipeName={recipeName}
              />
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
