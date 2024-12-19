import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Invoice = () => {
  const invoiceRef = useRef(null);

  const handleConvertToPdf = () => {
    const element = invoiceRef.current;
    const opt = {
      margin: 1,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div ref={invoiceRef} className="invoice-container p-4 bg-white shadow">
            <div className="row mb-4">
              <div className="col-6">
                <h2 className="text-primary">Invoice</h2>
                <p><strong>Invoice #:</strong> INV-001</p>
                <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              </div>
              <div className="col-6 text-end">
                <h3>Your Company Name</h3>
                <p>123 Business Street</p>
                <p>City, State 12345</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-6">
                <h4>Bill To:</h4>
                <p>Client Name</p>
                <p>Client Address</p>
                <p>City, State 12345</p>
              </div>
            </div>

            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>2</td>
                  <td>$50.00</td>
                  <td>$100.00</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>1</td>
                  <td>$75.00</td>
                  <td>$75.00</td>
                </tr>
                {/* <tr>
                  <td colSpan="3" className="text-end"><strong>Subtotal</strong></td>
                  <td>$175.00</td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-end"><strong>Tax (10%)</strong></td>
                  <td>$17.50</td>
                </tr> */}
                <tr>
                  <td colSpan="3" className="text-end"><strong>Total</strong></td>
                  <td><strong>$192.50</strong></td>
                </tr>
              </tbody>
            </table>

            <div className="row mt-4">
              <div className="col-12">
                <p><strong>Payment Terms:</strong> Due within 30 days</p>
                <p><strong>Thank you for your business!</strong></p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button onClick={handleConvertToPdf} className="btn btn-primary">
              Convert to PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;