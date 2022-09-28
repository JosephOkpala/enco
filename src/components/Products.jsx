import ladySitting from '../assets/lady-sitting.png';
import peopleGathered from '../assets/people-gathered.png';

const Products = () => {
  return (
    <div className="product-container">
      <h1>Our Products</h1>
      <div className="loans">
        <div className="circle"></div>
        <h3>Personal Loans</h3>
      </div>
      <div className="personal-loans products-flex">
        <img src={ladySitting} alt="lady-sitting" />
        <div className="personal-loan-text loan-text">
          <p>
            Our Personal Loan product is a multi-purpose offering which includes
            Education loans, Asset financing, Travel loans, Investment loans and
            Personal financing.
          </p>
          <p>Our personal loans offers the following:</p>
          <ul>
            <li>
              Flexible repayment plans and option to pay off all or part of the
              loan at any time without penalty.
            </li>
            <li>Option to apply online for a faster approval.</li>
            <li>
              Option to access additional funds after repayment over time.
            </li>
            <li>Competitive interest rates.</li>
            <li>Applications are approved within 48 hours.</li>
          </ul>
        </div>
      </div>
      <div className="loans">
        <div className="circle"></div>
        <h3>Business Loans</h3>
      </div>
      <div className="business-loan products-flex column ">
        <div className="business-loan-text loan-text">
          <p>
            At Enco Finance, whatever your business needs are, we have the right
            loan to help you meet them. We have tailored solutions designed to
            help you scale-up your business and grow your revenue.
          </p>
          <p>Our range of business loans include; </p>
          <ul>
            <li>Term Loan</li>
            <li>Invoice Discounting</li>
            <li>Working Capital Financing</li>
            <li>Distributors Financing</li>
            <li>Lease Financing</li>
            <li>Equipment Financing</li>
          </ul>
        </div>
        <img src={peopleGathered} alt="people gathering" />
      </div>
    </div>
  );
};

export default Products;
