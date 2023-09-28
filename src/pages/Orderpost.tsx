import React from 'react';
import useOrderPost from './postOrderFunction'; // Import your custom hook
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function OrderTheThing() {
  const { isLoading, error, handlePostOrder } = useOrderPost();
  
  const handleOrderButtonClick = async () => {
    // Call the handlePostOrder function
    await handlePostOrder();

    // Clear local storage
    localStorage.clear();
  }

  return (
    <div>
            <Link to="/">
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: 'rgb(13, 184, 13)', margin: '10px' }}
          onClick={handleOrderButtonClick}
          disabled={isLoading}
        >
          {isLoading ? 'Posting Order...' : 'Place Order'}
        </Button>
      </Link>
    </div>
  );
}

export default OrderTheThing;




