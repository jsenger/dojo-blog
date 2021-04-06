const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Blog title:</label>
        <input type="text" required />
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="Gottmik">Gottmik</option>
          <option value="Rosé">Rosé</option>
          <option value="Denali">Denali</option>
        </select>
      </form>
    </div>
  );
};

export default Create;
