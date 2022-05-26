import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-container row m-5 ">
        {menuData.map((curElm) => {
          const { id, name, image, category, price, description } = curElm;

          return (
            <>
              <div className="card-container col-xl-3 col-md-4 col-sm-6 mb-5" key={id}>
                <div className="card">
                  <div className="card-body">
                    <h2 className="text-capitalize">{name}</h2>
                    <h5 className="text-capitalize">{category}</h5>
                    <span className="description text-justify">{description}</span>
                    <h3 className="price">{price}</h3>
                    <Stack>
                      <Button className="button" variant="outlined">
                        Order Now
                      </Button>
                    </Stack>
                  </div>
                  <img src={image} alt="img" />
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
