

// Api for Adding Doctors

const addDoctor = async (req, res) =>{
    try{
        const {name, email, password, speciality, degree, experience, about, available, fee, date, address} = req.body
        const imageFile = req.file

        if (!name || !email || !password || !speciality || !degree || !experience || !about || !available || !fee || !date || !address || !req.file) {
  return res.status(400).json({ message: "Please fill all the fields" });
}



    } catch(error){

    }
}
export {addDoctor}