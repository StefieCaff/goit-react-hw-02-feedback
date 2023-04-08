import sprite from '../images/icons.svg';


export const App = () => {
  return (
    <> 
       <button>
        <svg width="100" height="100">
          <use href={`${sprite}#fire`}></use>
         </svg>
      </button>
    </>
  );
};
