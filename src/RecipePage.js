import React, { useState } from 'react';
import styles from './RecipePage.module.css';
import Recipe from './Recipe';
import { BsClock, BsBook, BsPerson } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
import NavBar from './NavBar';

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const arrOfIngredients = [
    {
      imgURL:
        'https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg',
      ingredientName: '1 tsp baking powder'
    },
    {
      imgURL: 'https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg',
      ingredientName: '1 tsp cinnamon'
    },
    {
      imgURL: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
      ingredientName: '1 apple'
    }
  ];

  const arrOfInstructions = [
    'Preheat the oven to 200 degrees F.',
    `Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl.`,
    `Whisk together the eggs, buttermilk, butter and vanilla extract and
    vanilla bean in a small bowl.`,
    `Add the egg mixture to the dry mixture and gently mix to combine. Do
    not overmix.`,
    `Let the batter sit at room temperature for at least 15 minutes and
    up to 30 minutes before using.`,
    `Heat a cast iron or nonstick griddle pan over medium heat and brush
    with melted butter. Once the butter begins to sizzle, use 2
    tablespoons of the batter for each pancake and cook until the
    bubbles appear on the surface and the bottom is golden brown, about
    2 minutes, flip over and cook until the bottom is golden brown, 1 to
    2 minutes longer.`,
    `Transfer the pancakes to a platter and keep warm in a 200 degree F
    oven.`,
    `Serve 6 pancakes per person, top each with some of the bourbon
    butter.`,
    `Drizzle with warm maple syrup and dust with confectioners' sugar.`,
    `Garnish with fresh mint sprigs and more toasted pecans, if desired.`
  ];

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
            src="https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10131071761-1.jpg"
            className="card-img-top shadow"
            alt="..."
            style={{ width: '100%' }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: '600' }}>
              Brown Butter Apple Crumble
            </h5>
            <hr />
            <div className={styles.iconDisplay}>
              <span>
                <BsClock style={{ marginBottom: '2.8px' }} />{' '}
                <span className={styles.spanDisplay}>20</span>
              </span>
              <span>
                <BsBook style={{ marginBottom: '2.8px' }} />{' '}
                <span className={styles.spanDisplay}>5</span>
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
              Some random text about the recipe above. Yummy sdfmcslkdmcslskvdms
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
                arrOfIngredients={arrOfIngredients}
                arrOfInstructions={arrOfInstructions}
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
