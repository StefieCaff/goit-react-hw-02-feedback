
// define an Icon component
const Icon = ({ id, ...props }) =>{
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}


// function App() {
//   return (
//     <div className="App">
//       {icons.map((id) => {
//         return <Icon key={id} id={id} />;
//       })}
//     </div>
//   );
// }

export { Icon };