
// define an Icon component
const Icon = ({ id, ...props }) =>{
  return (
    <svg {...props} >
      <use href={`#${id}`} />
    </svg>
  );
}

export { Icon };