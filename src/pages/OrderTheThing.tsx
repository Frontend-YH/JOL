import React from 'react';
import useOrderPost from './postOrderFunction'; // Import your custom hook

function OrderTheThing() {
  const { isLoading, error, handlePostOrder } = useOrderPost();

  return (
    <div>
      {/* Render your component content here */}
      <button onClick={handlePostOrder} disabled={isLoading}>
        {isLoading ? 'Posting Order...' : 'Place Order'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default OrderTheThing;
