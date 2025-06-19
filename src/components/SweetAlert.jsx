import { useEffect } from "react";
import Swal from "sweetalert2";

const SweetAlert = ({ data }) => {
  useEffect(()=> {
    const { age, month, day } = data;

    const ageString = `${age} years, ${month} months, ${day} days`; 

    Swal.fire({
      title: "Your Age",
      html: `<p>${ageString}</p>`,
      icon: "success",
    });
  }, [data]);

  return null;
};

export default SweetAlert;