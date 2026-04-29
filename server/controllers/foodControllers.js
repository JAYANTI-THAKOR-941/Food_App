import Food from "../models/Food.js";

export const addFood = async (req, res) => {
  try {
    const {
      name,
      description,
      longDescription,
      price,
      rating,
      category,
      image,
    } = req.body;
    await Food.create({
      name,
      description,
      longDescription,
      price,
      rating,
      category,
      image,
    });
    res.status(201).json({ message: "Food Added Successfully.!" });
  } catch (err) {
    res.status(501).json({ message: "Internal server error.!", err });
  }
};

export const updateFood = async (req, res) => {
  try {
    const {
      name,
      description,
      longDescription,
      price,
      rating,
      category,
      image,
    } = req.body;

    await Food.findByIdAndUpdate(
    req.params.id,
      { name, description, longDescription, price, rating, category, image },
      { new: true },
    );

     res.status(201).json({ message: "Food Updated Successfully.!" });
  } catch (err) {
    res.status(501).json({ message: "Internal server error.!", err });
  }
};

export const deleteFood = async(req,res)=>{
    try{
        const food = req.params.id;
        if(!food){
            return res.status(401).json({ message: "Food Not Found" });
        }

        await Food.findByIdAndDelete(food);
        res.status(200).json({ message: "Food Deleted Successfully"});
    }
    catch(err){
       res.status(501).json({ message: "Internal server error.!", err }); 
    }
}


export const getAllFood = async(req,res)=>{
    try{
        const foods = await Food.find();
        res.status(200).json(foods);
    }
    catch(err){
        res.status(501).json({ message: "Internal server error.!", err });
    }
}

export const getFoodById = async(req,res)=>{
     try{
        const foodId = req.params.id;
        if(!foodId){
            return res.status(401).json({ message: "Food Not Found" }); 
        }
        const food = await Food.findById(foodId);
        res.status(200).json(food);
    }
    catch(err){
        res.status(501).json({ message: "Internal server error.!", err });
    }
}