import React from 'react'
import { } from "react-bootstrap"

const CreateProduct = () => {
    return (
        <div>
            <div className="container">
                <h2>Detail Product</h2>
                <form>
                    <label for="product_name">Product Name</label>
                    <br />
                    <input type="text" className="form-control" id="product_name" required />
                    <p className="name_warn"></p>
                    <br />
                    <label for="product_category">Product Category</label>
                    <br />
                    <div className="dropdown">
                        <button className="btn dropdown-toggle border" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Choose
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <p className="dropdown-item" data-value="Category 1">Category 1</p>
                            </li>
                            <li>
                                <p className="dropdown-item" data-value="Category 2">Category 2</p>
                            </li>
                            <li>
                                <p className="dropdown-item" data-value="Category 3">Category 3</p>
                            </li>
                        </ul>
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
                            <label className="form-check-label" for="exampleRadios1">
                                Opsi 1
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                value="Opsi 2" />
                            <label className="form-check-label" for="exampleRadios2">
                                Opsi 2
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                                value="Opsi 3" />
                            <label className="form-check-label" for="exampleRadios3">
                                Opsi 3
                            </label>
                        </div>
                    </div>
                    <br />
                    <label for="additional">Additional Description</label>
                    <br />
                    <textarea type="text" id="additional" cols="50" rows="5"></textarea>
                    <br />
                    <label for="price">Product Price</label>
                    <br />
                    <input type="number" className="form-control" id="price" />
                    <br />
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary tombol" type="button">Submit</button>
                    </div>
                </form>
            </div>
            <div className="container my-5">
                <h3>List Product</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Image of Product</th>
                            <th scope="col">Product Freshness</th>
                            <th scope="col">Additional Desciption</th>
                            <th scope="col">Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1,001</th>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>Brand new</td>
                            <td>adipiscing</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th scope="row">1,002</th>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>Second Hand</td>
                            <td>adipiscing</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th scope="row">1,003</th>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>Brand new</td>
                            <td>adipiscing</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <th scope="row">1,004</th>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>Refushed</td>
                            <td>adipiscing</td>
                            <td>9</td>
                        </tr>
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

export default CreateProduct