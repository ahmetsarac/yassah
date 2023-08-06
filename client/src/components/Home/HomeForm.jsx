const HomeForm = ({ handleSubmit, setName, placeholder, buttonText }) => {
  return (
    <form className="home-form" onSubmit={handleSubmit}>
      <input
        className="name-input"
        type="text"
        placeholder={placeholder}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button className="home-form-button" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default HomeForm;
