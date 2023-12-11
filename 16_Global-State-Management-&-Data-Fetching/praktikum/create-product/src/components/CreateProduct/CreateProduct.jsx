import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addProduct, updateProduct, deleteProduct } from './redux/actions';

const CreateProduct = ({ products, addProduct, updateProduct, deleteProduct }) => {
    const [products, setProducts] = useState([]);
    const [prodName, setProdName] = useState('');
    const [prodCategory, setProdCategory] = useState('Kategori 1');
    const [prodDescription, setProdDescription] = useState('');
    const [prodPrice, setProdPrice] = useState('');
    const [nameWarn, setNameWarn] = useState('');
    const [editingProductId, setEditingProductId] = useState(null); // To track the edited product

    // Define regex patterns
    const namePattern = /^[a-zA-Z\s]+$/;
    const pricePattern = /^\d+(\.\d{1,2})?$/;

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setProdName(newName);

        if (!namePattern.test(newName)) {
            setNameWarn("* Invalid product name. It should contain only letters and spaces.");
        } else {
            setNameWarn('');
        }
    }

    const handleCategoryChange = (category) => {
        setProdCategory(category);
    }

    const handleSubmit = () => {
        if (!namePattern.test(prodName)) {
            alert("Invalid product name. It should contain only letters and spaces.");
            return;
        }

        if (!pricePattern.test(prodPrice) || parseFloat(prodPrice) <= 0) {
            alert("Invalid product price. It should be a positive number.");
            return;
        }

        if (prodName && prodCategory && prodPrice) {
            if (editingProductId === null) {
                // Add a new product
                const newProduct = {
                    id: uuidv4(),
                    name: prodName,
                    category: prodCategory,
                    description: prodDescription,
                    price: parseFloat(prodPrice),
                };

                // setProducts([...products, newProduct]);
                addProduct(newProduct);
            } else {
                const updatedProduct = {
                    id: editingProductId,
                    name: prodName,
                    category: prodCategory,
                    description: prodDescription,
                    price: parseFloat(prodPrice),
                };

                updateProduct(updatedProduct);
                setEditingProductId(null);
            }

            resetForm();
        } else {
            alert("Please fill in all required fields");
        }
    }

    const handleEdit = (productId) => {
        const productToEdit = products.find((product) => product.id === productId);
        if (productToEdit) {
            setProdName(productToEdit.name);
            setProdCategory(productToEdit.category);
            setProdDescription(productToEdit.description);
            setProdPrice(productToEdit.price);
            setEditingProductId(productId);
        }
    }

    const handleDelete = (productId) => {
        // Delete the product using Redux action
        deleteProduct(productId);

        if (editingProductId === productId) {
            // Reset the form if the edited product is deleted
            resetForm();
        }
    }

    const resetForm = () => {
        setProdName('');
        setProdCategory('Kategori 1');
        setProdDescription('');
        setProdPrice('');
        setEditingProductId(null);
    }

    const navigate = useNavigate();

    const handleView = (productId) => {
        navigate(`/product/${productId}`, { state: { products } });
        console.log(productId);
    }

    return (
        <div>
            <div className="container">
                <h2>Detail Product</h2>
                <form>
                    <label htmlFor="product_name">Product Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="product_name"
                        onChange={handleNameChange}
                        value={prodName}
                        required
                    />
                    <p className="name_warn" style={{ color: "red" }}>
                        {nameWarn}
                    </p>
                    <br />
                    <div className="dropdown">
                        <Form>
                            <Form.Group controlId="productCategory">
                                <Form.Label>Product Category</Form.Label>
                                <Dropdown onSelect={handleCategoryChange}>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {prodCategory}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="Kategori 1" onClick={() => handleCategoryChange("Kategori 1")}>Kategori 1</Dropdown.Item>
                                        <Dropdown.Item eventKey="Kategori 2" onClick={() => handleCategoryChange("Kategori 2")}>Kategori 2</Dropdown.Item>
                                        <Dropdown.Item eventKey="Kategori 3" onClick={() => handleCategoryChange("Kategori 3")}>Kategori 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>
                        </Form>
                    </div>
                    <br />
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02" />
                    </div>
                    <br />
                    <div>
                        <p>Product Refreshness</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                value="Opsi 1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Opsi 1
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                value="Opsi 2" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Opsi 2
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                                value="Opsi 3" />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Opsi 3
                            </label>
                        </div>
                    </div>
                    <br />
                    <label htmlFor="additional">Additional Description</label>
                    <br />
                    <textarea type="text" id="additional" cols="50" rows="5" value={prodDescription} onChange={(e) => setProdDescription(e.target.value)}></textarea>
                    <br />
                    <label htmlFor="price">Product Price</label>
                    <br />
                    <input type="number" className="form-control" id="price" value={prodPrice} onChange={(e) => setProdPrice(e.target.value)} />
                    <br />
                    <div className="d-grid gap-2">
                        <button className={editingProductId ? "btn btn-warning tombol" : "btn btn-primary tombol"} type="button" onClick={handleSubmit}>{editingProductId ? 'Edit' : 'Tambah'} Produk</button>
                    </div>
                </form>
            </div>
            <div className="container my-5">
                <h3>List Product</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama Produk</th>
                            <th scope="col">Kategori Produk</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className='mr-2 btn btn-primary' onClick={() => handleView(product.id)}>View</button>
                                    <button className='mx-2 btn btn-warning' onClick={() => handleEdit(product.id)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <input type="text" className="form-control" placeholder="Search by Product Name" />
                <div>
                    <button className="btn btn-primary">Deletion</button>
                    <button className="btn btn-outline-primary">Search</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products,
});

// mapDispatchToProps object
const mapDispatchToProps = {
    addProduct,
    updateProduct,
    deleteProduct,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
