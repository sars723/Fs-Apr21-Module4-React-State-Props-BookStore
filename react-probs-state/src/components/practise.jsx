const practice = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <p>{counter}</p>
    </>
  );
};
export default practice;
