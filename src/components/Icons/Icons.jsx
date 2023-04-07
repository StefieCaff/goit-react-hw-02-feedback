
// define an Icon component
const Icon = ({ id, ...props }) =>{
  return (
    <svg {...props} style={{ position: 'absolute' }}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}

export { Icon };