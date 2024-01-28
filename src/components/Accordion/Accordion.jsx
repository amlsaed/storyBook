import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineArrowDropUp ,MdOutlineArrowDropDown } from "react-icons/md";

const AccordionItem = ({ title, content }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div style={{ background: '#eee', padding: '', marginBottom: '1rem' }}>
      <div
        className={`accordion-title ${active ? 'active' : 'notActive'}`}
        style={{
          background: '#fefegg',
          display: 'flex',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
        }}
        onClick={handleClick}
      >
        <div>
          <h3>{title}</h3>
        </div>
        <div className="icon">
            {active?<MdOutlineArrowDropUp/>:<MdOutlineArrowDropDown/>}
        </div>
      </div>
      <div
        className={`accordion-content ${active ? 'active' : 'notActive'}`}
        style={{
          display: active ? 'block' : 'none',
          background: '#fff',
          padding: '1rem',
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    <div>
      {Array.isArray(data) &&
        data.map((d, index) => {
          return <AccordionItem key={index} title={d.title} content={d.content} />;
        })}
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, content: PropTypes.string }),
  ),
};

export default Accordion;