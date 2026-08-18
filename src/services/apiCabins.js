import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Error while fetching cabin api data");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("Cabin couldn't be deleted");

  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log("edit......");
  console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1. Create / Edit Cabin
  let query = supabase.from("cabins");

  //A.Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //B.Edit
  if (id) query = query.update({ ...newCabin, image: imagePath });

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error(
      "Cabin couldn't be created. Error Message:" + error.message,
    );
  }

  //2.Upload Image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image couldn't be uploaded and cabin was not created. Error Message:" +
        storageError.message,
    );
  }
  return data;
}
