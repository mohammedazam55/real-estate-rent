// const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

//   const handleDateChange = (ranges) => {
//     setDateRange([ranges.selection]);
//   };

//   const handlePriceChange = (e) => {
//     setPriceRange({ ...priceRange, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle form submission here
//   };
// <DateRange
//             ranges={dateRange}
//             onChange={handleDateChange}
//             editableDateInputs={true}
//             moveRangeOnFirstSelection={false}
//           />
