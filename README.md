# Backend Exercise

A company is thinking about expanding its business and not only forecast sales in the stores but also manage the cash register. The first store where we will introduce our software will sell the following 3 products.

|  CODE   |      NAME      |  PRICE |
|---------|----------------|--------|
| VOUCHER |   Gift Card    |  5.00€ |
|  TSHIRT | Summer T-Shirt | 20.00€ |
|  PANTS  |  Summer Pants  |  7.50€ |

### The different departments have agreed the following discounts:
- A 2-for-1 special on VOUCHER items.
- If you buy 3 or more TSHIRT items, the price per unit should be 19.00€.
- Items can be scanned in any order, and the cashier should return the total amount to be
paid.

### The interface for the checkout process has the following specifications:
- The Checkout constructor receives a pricing_rules object
- The Checkout object has a scan method that receives one item at a time

#### Examples used for testing:
- *Items*: no items - Total: 0€
- *Items*: VOUCHER, TSHIRT, PANTS - Total: 32.50€
- *Items*: VOUCHER, TSHIRT, VOUCHER - Total: 25.00€
- *Items*: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT - Total: 81.00€
- *Items*: VOUCHER, TSHIRT, VOUCHER, VOUCHER, PANTS, TSHIRT, TSHIRT - Total: 74.50€
- *Items*: VOUCHER, TSHIRT, VOUCHER, VOUCHER, PANTS, TSHIRT, TSHIRT, VOUCHER - Total: 74.50€
- *Items*: VOUCHER, TSHIRT, TSHIRT, VOUCHER, PANTS, TSHIRT, TSHIRT, TSHIRT - Total: 107.50€
- *Items*: VOUCHER, camisole, VOUCHER, PANTS, TSHIRT, VOUCHER - Total: 37.50€

### Running the tests:
The tests that you'll find under `spec` directory are written using [Mocha](https://mochajs.org/) test framework 
and [Chai](http://chaijs.com/) assertion library.

They are configured to use Chai's [`expect`](http://chaijs.com/api/bdd/) assertion style and can be executed as follows:

- To run the tests just run the following command:
```
npm test
```