import Product from "../models/Product";
import fs from "fs-extra";
import path from "path";

export const createProduct = async (req, res) => {
  try {
    const { name, uprice } = req.body;
    const product = new Product({
      name,
      uprice,
      image: req.file.path,
      user: req.userId,
    });
    await product.save();
    res.status(200).json({
      message: "Product saved successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const readProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id,
      { name, uprice } = req.body;
    if (req.file) {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, uprice, image: req.file.path },
        { new: true }
      );
      res.status(200).json({
        message: "Product updated successfully",
        updatedProduct,
      });
    } else {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, uprice },
        { new: true }
      );
      res.status(200).json({
        message: "Product updated successfully",
        updatedProduct,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (deleteProduct) {
      await fs.unlink(path.resolve(deletedProduct.image));
    }
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({user: req.userId}).sort("name");
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error,
          });
    }
}
