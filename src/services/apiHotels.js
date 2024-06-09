import supabase from "./supabase";
/* eslint-disable */
const supabaseUrl = "https://hwbfzdutjvelhpadjtrg.supabase.co";

export async function getHotels() {
  const { data, error } = await supabase.from("hotels").select("*");

  if (error) {
    throw new Error("Hotels can't be loaded");
  }
  return data;
}

export async function deleteHotel(id) {
  const { error } = await supabase.from("hotels").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Hotel can't be deleted");
  }
}

export async function createEditHotels(newHotel, id) {
  //---- https://hwbfzdutjvelhpadjtrg.supabase.co/storage/v1/object/public/hotel-images/hotel-01.jpg?t=2024-03-12T17%3A30%3A50.745Z
  const hasImagePath = newHotel.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newHotel.image.name}`.replaceAll(
    "/",
    ""
  ); // make imageName unique , prevent supabase creating folder

  const imagePath = hasImagePath
    ? newHotel.image
    : `${supabaseUrl}/storage/v1/object/public/hotel-images/${imageName}`;
  let query = supabase.from("hotels");
  //create
  if (!id) query = query.insert([{ ...newHotel, image: imagePath }]);
  //edit
  if (id) query = query.update({ ...newHotel, image: imagePath }).eq("id", id);

  const { data, error } = await query.select();

  //  create the hotel (except img)

  if (error) {
    throw new Error("Hotel can't be created");
  }

  // upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("hotel-images")
    .upload(imageName, newHotel.image);

  // 3. Delete hotel if an error uploading img
  if (storageError) {
    await supabase.from("hotels").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Hotel image can't be uploaded");
  }

  return data;
}
