import { useState } from 'react';

export default function App() {
  const [current, setCurrent] = useState<number>(0);
  const [previous, setPrevious] = useState<number>(1);
  const [clickCount, setClickCount] = useState<number>(0);

  // Function to dynamically calculate the next Fibonacci number
  const handleNextFibonacci = () => {
    const nextValue = current === 0 && clickCount === 0 ? 1 : current + previous;
    setPrevious(current === 0 && clickCount === 0 ? 0 : current);
    setCurrent(nextValue);
    setClickCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrent(0);
    setPrevious(1);
    setClickCount(0);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Fibonacci Counter</h1>

      <div style={{ margin: '1.5rem 0' }}>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          {clickCount === 0 ? 'Click the button to start' : `Click #${clickCount}`}
        </p>
        <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
          {current}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <button
          onClick={handleNextFibonacci}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Next Fibonacci Number
        </button>

        {clickCount > 0 && (
          <button
            onClick={handleReset}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#eaeaea',
              color: '#333',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}