import usePasswordStore from "../store/passwordStore";

const PasswordApp = () => {
  const {
    length,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    includeLowercase,
    generatedPassword,
    setLength,
    toggleNumbers,
    toggleSymbols,
    toggleUppercase,
    toggleLowercase,
    generatePassword,
  } = usePasswordStore();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-700">
          Password Generator
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Length:
            <input
              type="number"
              min={4}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="ml-2 w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </label>
        </div>
        <div className="space-y-2 mb-6">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={toggleNumbers}
              className="accent-purple-500"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={toggleSymbols}
              className="accent-purple-500"
            />
            Include Symbols
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={toggleUppercase}
              className="accent-purple-500"
            />
            Include Uppercase
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={toggleLowercase}
              className="accent-purple-500"
            />
            Include Lowercase
          </label>
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition"
        >
          Generate Password
        </button>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Generated Password:
          </h2>
          <div className="bg-gray-100 rounded px-4 py-2 text-purple-700 font-mono break-all select-all">
            {generatedPassword || (
              <span className="text-gray-400">No password generated yet.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordApp;
