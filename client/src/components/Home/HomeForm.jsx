const HomeForm = ({ handleSubmit, setName }) => {
  return (
    <form className="home-form" onSubmit={handleSubmit}>
      <input
        className="name-input"
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button className="home-form-button" type="submit">
        Create lobby
      </button>
    </form>
  );
};

export default HomeForm;
