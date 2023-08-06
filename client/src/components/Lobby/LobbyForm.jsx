const LobbyForm = ({ handleSubmit, setName }) => {
  return (
    <form className="lobby-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="mahlas"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button type="submit">lobiye katıl</button>
    </form>
  );
};

export default LobbyForm;
