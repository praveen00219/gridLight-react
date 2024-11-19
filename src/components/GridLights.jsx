import { useState } from "react";

const GridLights = () => {
  const [selectedCells, setSelectedCells] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleCellClick = (index) => {
    if (isComplete) return;

    if (!selectedCells.includes(index)) {
      setSelectedCells([...selectedCells, index]);

      // Check if all cells are selected
      if (selectedCells.length === 8) {
        // We need 9 cells total
        setIsComplete(true);
        // Start the reverse animation
        const interval = setInterval(() => {
          setSelectedCells((prev) => {
            const newSelected = [...prev];
            newSelected.pop();
            if (newSelected.length === 0) {
              clearInterval(interval);
              setIsComplete(false);
            }
            return newSelected;
          });
        }, 500); // Delay between each cell unselection
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Grid Lights</h1>
      <p className="mb-6 text-gray-600">
        Click on cells to select them. Once all cells are selected, they will be
        unselected one by one in the reverse order they were selected.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className={`
              aspect-video border-2 border-gray-300 rounded-lg cursor-pointer
              transition-all duration-300 
              ${
                selectedCells.includes(index)
                  ? "bg-blue-500 border-blue-600"
                  : "hover:border-blue-400 hover:bg-blue-50"
              }
            `}
          />
        ))}
      </div>

      <div className="mt-4 text-gray-600">
        Selected: {selectedCells.length} / 9
      </div>
    </div>
  );
};

export default GridLights;
