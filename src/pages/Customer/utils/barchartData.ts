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
  let allDistrict = new Set();

  salesData();

  //expect: [ 2020-05-30: [MotoTracker: 1, EagleCam: 2], ... ]
  allSales.map((sale: any) => {
    const date = sale.date;
    const district = sale.district;
    const qty = 1;

    //exclude all data other than current month
    const saleMonth = parseInt(date.split("-")[1]);
    if (saleMonth !== currentMonth) return null;

    //insert district in a set
    allDistrict.add(district);

    let temp = [];
    temp[district] = 1;

    //Sum district wise sale on day basis
    if (dayWiseSales[date]) {
      if (dayWiseSales[date][district]) {
        dayWiseSales[date][district] += qty;
      } else {
        dayWiseSales[date][district] = qty;
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
    allDistrict.forEach((prod: any) => {
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
  allDistrict.forEach((prod: any) => {
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
