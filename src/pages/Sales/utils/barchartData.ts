import { salesData } from "../../../utils/salesData";
interface SaleProps {
  date: string;
  customer_name: string;
  product: string;
  district: string;
  customer_work_area: string;
  order_quantity: Number;
}

export const barChartData = () => {
  const apidata = salesData();
  const date = new Date();
  const currentMonth = date.getMonth() + 1;

  const allSales = apidata; //store.getState().allSales;
  let dayWiseSales: any = [];
  let allProduct = new Set();

  //expect: [ 2020-05-30: [MotoTracker: 1, EagleCam: 2], ... ]
  allSales.map((sale: any) => {
    const date = sale.date;
    const product = sale.product;
    const qty = sale.order_quantity;

    //exclude all data other than current month
    const saleMonth = parseInt(date.split("-")[1]);
    if (saleMonth !== currentMonth) return null;

    //insert product in a set
    allProduct.add(product);

    let temp = [];
    temp[product] = qty;

    //Sum product sale on day basis
    if (dayWiseSales[date]) {
      if (dayWiseSales[date][product]) {
        dayWiseSales[date][product] += qty;
      } else {
        dayWiseSales[date][product] = qty;
      }
    } else {
      dayWiseSales[date] = temp;
    }

    return 1;
  });

  let prodWiseSale: any = [];
  const days = Object.keys(dayWiseSales).sort();

  //                    [day1 sale, day2 sale,...]
  //expect: [AssetLock: [0,   21,  19, 13, 25, 6, 16, 0], ...]
  days.map((day: any) =>
    allProduct.forEach((prod: any) => {
      let saleCount = dayWiseSales[day][prod] ? dayWiseSales[day][prod] : 0;
      if (prodWiseSale[prod]) {
        prodWiseSale[prod].push(saleCount);
      } else {
        prodWiseSale[prod] = [saleCount];
      }
    })
  );

  //dataset prop
  const datasets: any = [];
  allProduct.forEach((prod: any) => {
    datasets.push({
      label: prod,
      backgroundColor: "#" + Math.random().toString(16).substr(-6),
      data: prodWiseSale[prod],
    });
  });

  //return structured barchart data
  return {
    labels: days,
    datasets,
  };
};
