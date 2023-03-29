import React, { useState } from "react";
import "./upload.scss";
import axios from "axios";
import { productsRoute } from "../../api/api";

const UploadItems = () => {
  const [imageloadupload, setImageLoadUpload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hive, setHive] = useState({
    name: "",
    price: "",
    size: "",
    category: "",
    type: "",
    img: "",
  });
  const uploadImage = async (e) => {
    if (e.target.name === "file") {
      setImageLoadUpload(true);
      const formData = new FormData();
      formData.append("upload_preset", "muohmkoe");
      formData.append("cloud_name", "dgofftfvk");
      formData.append("file", e.target.files[0]);

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dgofftfvk/upload",
          { body: formData, method: "POST" }
        );

        const data = await res.json();
        console.log(data);

        setHive({ ...hive, img: data.url });
        setImageLoadUpload(false);
      } catch (error) {
        console.error(error);
        setImageLoadUpload(false);
        alert("Error uploading image. Please try again later.");
      }
    } else {
      setHive({ ...hive, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hive.img) {
      alert("Please select an image.");
      return;
    }

    if (
      !hive.name ||
      !hive.price ||
      !hive.size ||
      !hive.type ||
      !hive.category
    ) {
      alert("All fields are required.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(productsRoute, hive);

      console.log(data);

      setLoading(false);

      alert("Uploaded Successfully!");

      setHive({
        name: "",
        price: "",
        size: "",
        category: "",
        type: "",
        img: null,
      });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="uploading">
      <div className="upload-wrapper">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2>Upload New Items</h2>
          <label htmlFor="file">Choose Image:</label>
          <br />
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={uploadImage}
          />
          <br />
          <label htmlFor="name">Item Name:</label>
          <input type="text" name="name" id="name" onChange={uploadImage} />
          <br />
          <label htmlFor="size">Shoe Size:</label>
          <input type="text" name="size" id="size" onChange={uploadImage} />
          <br />
          <label htmlFor="price">Price:</label>
          <input type="text" name="price" id="price" onChange={uploadImage} />
          <br />
          <br /> <label htmlFor="category">Category:</label>
          <select name="category" id="category" onChange={uploadImage}>
            <option value="">Select Category</option>
            <option value="sneakers">Sneakers</option>
            <option value="sandals">Sandals</option>
            <option value="jordans">Jordans</option>
            <option value="airmax">Airmax</option>
            <option value="airforce">Airforce</option>
            <option value="watches">Watches</option>
          </select>
          <br />
          <label>Type:</label>
          <select type="text" name="type" id="type" onChange={uploadImage}>
            <option value="">Select Category</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="both">both</option>
          </select>
          <br></br>
          <button type="submit" disabled={imageloadupload || loading}>
            {loading ? "Loading..." : imageloadupload ? "uploading..." : "send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadItems;
