import React, { useState, useEffect } from 'react';
import './EditProduct.css';

function EditForm({ data }) {
  const [formData, setFormData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData(data.map((item) => ({ ...item })));
  }, [data]);

  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const handleSubmit = async (event, _id) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`http://localhost:3000/product/65157109f538b90d77db5811/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData[0], // Include all fields except _id
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSubmitting(false);
      // Handle success or navigate to a different page
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      // Handle error
    }
  };

  return (
    <div className='edit-product'>
      {formData.map((item, index) => (
        <form key={index} onSubmit={(e) => handleSubmit(e, item._id.$oid)}>
          {Object.keys(item).map((field) => {
            // Exclude _id field from being edited
            if (field === '_id') {
              return null;
            }

            return (
              <div key={field} className="form-row">
                <label htmlFor={field}>{field}</label>
                {field === 'description' || field === 'engDescription' ? (
                  <textarea
                    name={field}
                    value={item[field]}
                    onChange={(e) =>
                      handleInputChange(index, field, e.target.value)
                    }
                  />
                ) : (
                  <input
                    type="text"
                    name={field}
                    value={item[field]}
                    onChange={(e) =>
                      handleInputChange(index, field, e.target.value)
                    }
                  />
                )}
              </div>
            );
          })}
          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      ))}
    </div>
  );
}

export default EditForm;

