import { apidata } from "../../../components/Charts/data";
export const pieChartData = () => {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;

  const allSales = apidata; //store.getState().allSales;
  let dayWiseSales: any = [];
  let allWorkArea = new Set();

  allSales.map((sale) => {
    const date = sale.date;
    const workArea = sale.customer_work_area;
    const qty = 1; //sale.order_quantity;

    //exclude all data other than current month
    const saleMonth = parseInt(date.split("-")[1]);
    if (saleMonth !== currentMonth) return null;

    //insert product in a set
    allWorkArea.add(workArea);

    let temp: any = [];
    temp[workArea] = qty;

    //Sum product sale on day basis
    if (dayWiseSales) {
      if (dayWiseSales[workArea]) {
        dayWiseSales[workArea] += qty;
      } else {
        dayWiseSales[workArea] = qty;
      }
    } else {
      dayWiseSales = temp;
    }

    return 1;
  });

  console.log("dwisesale", dayWiseSales);
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
