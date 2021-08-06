import React from 'react';
import classes from './CategoryList.module.css';
import CL_Image1 from '../../../content/cl1.png';
import CL_Image2 from '../../../content/cl2.png';
import CL_Image3 from '../../../content/cl3.png';
import CL_Image4 from '../../../content/cl4.png';
const CategoryList = () => {
  return (
    <div className={classes.cl_container}>
      <a className={classes.cl_card}>
        <div className={classes.cl_card_container}>
          <img src={CL_Image1} alt='img' />
        </div>
        <div className={classes.cl_card_title}>Calculated Weather</div>
        <div className={classes.cl_card_desc}>
          Built Wicket longer admire do barton vanity itself do in it.
        </div>
      </a>

      <div className={classes.cl_card}>
        <div className={classes.cl_card_container}>
          <img src={CL_Image2} alt='img' />
        </div>
        <div className={classes.cl_card_title}>Best Flights</div>
        <div className={classes.cl_card_desc}>
          Engrossed listening. Park gate sell they west hard for the.
        </div>
      </div>

      <div className={classes.cl_card}>
        <div className={classes.cl_card_container}>
          <img src={CL_Image3} alt='img' />
        </div>
        <div className={classes.cl_card_title}>Local Events</div>
        <div className={classes.cl_card_desc}>
          Barton vanity itself do in it. Preferd to men it engrossed listening.
        </div>
      </div>

      <div className={classes.cl_card}>
        <div className={classes.cl_card_container}>
          <img src={CL_Image4} alt='img' />
        </div>
        <div className={classes.cl_card_title}>Customization</div>
        <div className={classes.cl_card_desc}>
          We deliver outsourced aviation services for military customers
        </div>
      </div>
    </div>
  );
};

export default CategoryList;