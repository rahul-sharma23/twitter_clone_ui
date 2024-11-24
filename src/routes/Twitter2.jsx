import React, { useState } from "react";

const Twitter2 = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }  `}
    >
      {/* <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}

      <div className="grid grid-cols-10 px-[10%]">
        {/* First Column - 25% width */}
        <div
          className="col-span-1 bg-blue-200 p-4 sticky top-0"
          style={{ height: "100vh", overflow: "hidden" }}
        >
          <div className="flex flex-col space-y-2">
            {[...Array(7)].map((_, index) => (
              <button
                key={index}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Button {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Second Column - 50% width */}
        <div className="col-span-6 bg-green-200 p-4 overflow-y-auto custom-scrollbar">
          <h2 className="text-xl mb-4">Column 2</h2>
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 1</h3>
              <p>This is the content of the first card.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 2</h3>
              <p>This is the content of the second card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of the third card.</p>
            </div>
          </div>
        </div>

        {/* Third Column - 25% width */}
        {/* <div className="col-span-3 bg-red-200 p-4 "> */}
        <div className="col-span-3 bg-red-200 p-4 custom-scrollbar sticky-parent">
          <div className="mb-4 sticky top-0 sticky-input">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fermentum lacus at orci laoreet, at volutpat felis scelerisque.
              Suspendisse potenti. Aenean faucibus est nec suscipit faucibus.
              Integer placerat consectetur est in aliquet. Nam non venenatis
            </p>
            <p className="mt-4 text-sm">
              Proin auctor pharetra fermentum. Nullam vel ex in erat accumsan
              tristique. Nam vel eros lectus. In hac habitasse platea dictumst.
              Aenean ultricies semper odio, ac molestie ante lobortis at. Nullam
              malesuada vestibulum ante, sit amet interdum erat feugiat ac.
              Phasellus in enim non nisl tincidunt volutpat id vel sapien.
              Suspendisse ac lorem at ligula pellentesque accumsan a ut orci.
              Aliquam erat volutpat. Proin eget justo sit amet nunc vehicula
              malesuada.
            </p>
            <p className="mt-4 text-sm">
              Proin auctor pharetra fermentum. Nullam vel ex in erat accumsan
              tristique. Nam vel eros lectus. In hac habitasse platea dictumst.
              Aenean ultricies semper
            </p>
            <p className="mt-4 text-sm">
              Proin auctor pharetra fermentum. Nullam vel ex in erat accumsan
              tristique. Nam vel eros lectus. In hac habitasse platea dictumst.
              Aenean ultricies semper odio, ac molestie ante lobortis at. Nullam
              malesuada vestibulum ante, sit amet interdum erat feugiat ac.
              Phasellus in enim non nisl tincidunt volutpat id vel sapien.
              Suspendisse ac lorem at ligula pellentesque accumsan a ut orci.
              Aliquam erat volutpat. Proin eget justo sit amet nunc vehicula
              malesuada.
            </p>
            <p className="mt-4 text-sm">
              Proin auctor pharetra fermentum. Nullam vel ex in erat accumsan
              tristique. Nam vel eros lectus. In hac habitasse platea dictumst.
              Aenean ultricies semper odio, ac molestie ante lobortis at. Nullam
              malesuada vestibulum ante, sit amet interdum erat feugiat ac.
              Phasellus in enim non nisl tincidunt volutpat id vel sapien.
              Suspendisse ac lorem at ligula pellentesque accumsan a ut orci.
              Aliquam erat volutpat. Proin eget justo sit amet nunc vehicula
              malesuada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter2;
