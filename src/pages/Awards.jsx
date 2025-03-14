import React from "react";

const Awards = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen text-white py-12">
       <video 
      src="https://videos.pexels.com/video-files/856857/856857-sd_960_506_30fps.mp4" 
    //  best Video: // https://videos.pexels.com/video-files/4323285/4323285-sd_640_360_30fps.mp4
      autoPlay 
      loop 
      muted 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height:'100vh',
        
        objectFit: 'cover' 
      }} ></video>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-screen-md z-10">
        <img
          src="https://static1.squarespace.com/static/58fe6b7b579fb36549cfb62f/58fec8b2e6f2e1cc6b8863c8/5b1e07708a922d0f9f7af171/1542180514768/CAST+Award+Sticker+Imprints+Page+Updated+11.14.18.jpg?format=1500w"
          alt="Award"
          className="w-64 h-64 rounded-lg shadow-lg"
        />
        <p className="text-lg text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          asperiores in obcaecati consequuntur laudantium praesentium
          accusantium blanditiis labore iusto? Cum eligendi dolorum minus
          molestias accusamus quasi blanditiis repudiandae maiores deserunt?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          quisquam, rerum illum tempore blanditiis itaque amet magnam eius illo.
          Laudantium voluptatem labore optio recusandae possimus.
        </p>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-screen-md mt-12 z-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwJkup271JUV8CYfsqbJypNe0W1w47XIXwg&s"
          alt="Award"
          className="w-56 h-56 rounded-lg shadow-lg"
        />
        <p className="text-lg text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor atque
          eaque ullam consequatur molestias autem quae delectus ratione. Cum
          modi quasi reiciendis atque neque est quidem debitis, fuga commodi
          vitae.
        </p>
      </div>
    </div>
  );
};

export default Awards;
