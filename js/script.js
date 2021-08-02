$(() => {
   $("#navbarToggler").blur((e) => {
       let screenWidth = window.innerWidth;
       if (screenWidth < 992){
           $("#navbarNavAltMarkup").collapse('hide');
       }
   });

   console.log(rateColor(color_lawn, 5));

   let updatedSchools = editName("Stratford", "HB Woodlawn", schools);
  
  console.log(updatedSchools); // { name: "HB Woodlawn" }
  console.log(schools); 
});


const rateColor = (color, rating) => ({
    ...color,
    rating
});

let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rate: 0
  };

  let schools = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Liberty" },
    { name: "Wakefield" }
  ];
  
  

  const editName = (oldName, name, arr) =>
  arr.map(item => {
    if (item.name === oldName) {
      return {
        ...item,
        name
      };
    } else {
      return item;
    }
  });