const InteractionStyleSelect = ({ value, onChange }) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-blue-100 bg-blue-50 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:outline-none px-4 py-3 transition"
        required
      >
        <option value="" disabled>
          Preferred interaction style
        </option>
        <option value="listen">I prefer to listen</option>
        <option value="share">I want to share</option>
        <option value="both">Both</option>
      </select>
    );
  };
  
  export default InteractionStyleSelect;
  