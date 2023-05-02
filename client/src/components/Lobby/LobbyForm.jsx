const LobbyForm = ({ handleSubmit, setName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button type="submit">Join the lobby</button>
    </form>
  );
};

export default LobbyForm;
