import { supabase } from "@/lib/supabaseClient";

const BUCKET_NAME = "mm-store";

export const getImage = (filePath: string) => {
    try{
        const { data } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(filePath);

        const publicUrl = data.publicUrl;
        if (!publicUrl) {
            throw new Error("Image not found");
        }

        return publicUrl;
    } catch (error) {
        console.error("Error downloading image:", error);
        throw error;
    }
}