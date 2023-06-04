import image from '../images/image-hero-desktop.png';

const Main = () => {
  return (
    <div className="h-full w-full flex items-center justify-between border-2 border-cyan-800">
      <div className="w-2/5">
        <h1 className="font-bold text-8xl">Make remote work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda
          quas ad nesciunt reiciendis ratione earum eaque dolores ullam totam
          molestiae id sit suscipit nostrum impedit ea necessitatibus, sapiente
          sunt. Veniam qui quae distinctio et repellat obcaecati fugiat, placeat
          natus.
        </p>
        <button>Learn more</button>
        <div>Logos here</div>
      </div>

      <div className="w-1/2">
        <img className="w-3/5" src={image} alt="main img" />
      </div>
    </div>
  );
};

export default Main;
