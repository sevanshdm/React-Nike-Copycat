const Hero = () => {
  return (
    <section
      id="home"    //on extra large devices it becomes a flex row with xl:flex-row, usually it's a flex-col because you want them to stack on mobile devices
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br/>
          <span>Nike Shoes</span>
          Shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      </div>
    </section>
  )
}

export default Hero