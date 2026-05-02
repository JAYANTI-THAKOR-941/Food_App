import React, { useEffect, useState } from "react";
import api from "../../services/api";
import './admin.css';

const FoodManagement = () => {
  const [foods, setFoods] = useState([]);

  const [editId, setEditId] = useState(null);

  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    longDescription: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const res = await api.put(`/food/update/${editId}`, form);
      alert(res.data.message);
      window.location.reload();
    } else {
      try {
        const res = await api.post("/food/add", form);
        alert(res.data.message);
        window.location.reload();
      } catch (err) {
        console.log("Failed to add food.!", err);
      }
    }
  };

  const fetchFoods = async () => {
    try {
      const res = await api.get("/food/all");
      setFoods(res.data);
    } catch (err) {
      console.log("Failed to fetch products.!");
    }
  };

  const handleDelete = async (id) => {
    window.confirm("Are you sure? want delete this food.!");
    const res = await api.delete(`/food/delete/${id}`);
    alert(res.data.message);
    window.location.reload();
  };

  const handleEdit = (f) => {
    setEditId(f._id);
    setForm(f);
    setShow(true);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="food-container">
      <button className="add-btn" onClick={() => setShow(true)}>
        Add Food
      </button>

      <table className="food-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {foods.map((f) => (
            <tr key={f._id}>
              <td>
                <img src={f.image} alt="" className="food-img" />
              </td>
              <td>{f.name}</td>
              <td>{f.description}</td>
              <td>₹{f.price}</td>
              <td>{f.category}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(f)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(f._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {show && (
        <div className="form-overlay">
          <form className="food-form" onSubmit={handleSubmit}>
            <h2>{editId ? "Update Food" : "Add Food"}</h2>

            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter longDescription"
              name="longDescription"
              value={form.longDescription}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter price"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter category"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter image URL"
              name="image"
              value={form.image}
              onChange={handleChange}
            />

            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                {editId ? "Update" : "Add"}
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FoodManagement;
