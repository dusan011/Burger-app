import React from "react";
import classes from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl/BurgerControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const burgerControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>Current price {props.price.toFixed(2)}</p>
      {controls.map(ctrl => {
        return (
          <BurgerControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientsAdded(ctrl.type)}
            removed={() => props.ingredientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
    </div>
  );
};

export default burgerControls;
