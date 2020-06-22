import { salesData } from "../../../utils/salesData";
export const pieChartData = () => {
  const apidata = salesData();
  const date = new Date();
  const currentMonth = date.getMonth() + 1;

  const allSales = apidata; //store.getState().allSales;
  let dayWiseSales: any = [];
  let allProduct = new Set();

  allSales.map((sale: any) => {
    const date = sale.date;
    const product = sale.product;
    const qty = sale.order_quantity;

    //exclude all data other than current month
    const saleMonth = parseInt(date.split("-")[1]);
    if (saleMonth !== currentMonth) return null;

    //insert product in a set
    allProduct.add(product);

    let temp: any = [];
    temp[product] = qty;

    //Sum product sale on day basis
    if (dayWiseSales) {
      if (dayWiseSales[product]) {
        dayWiseSales[product] += qty;
      } else {
        dayWiseSales[product] = qty;
      }
    } else {
      dayWiseSales = temp;
    }

    return 1;
  });

  const products = Object.keys(dayWiseSales).sort();

  //dataset prop
  const datasets: any = [];
  const data: any = [];
  const backgroundColor: any = [];
  const hoverBackgroundColor: any = [];
  products.forEach((prod: any) => {
    data.push(dayWiseSales[prod]);
    backgroundColor.push("#" + Math.random().toString(16).substr(-6));
    hoverBackgroundColor.push("#" + Math.random().toString(16).substr(-6));
  });

  datasets.push({
    data,
    backgroundColor,
    hoverBackgroundColor,
  });

  //return structured piechart data
  return {
    labels: products,
    datasets,
  };
};
