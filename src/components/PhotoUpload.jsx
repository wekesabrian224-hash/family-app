import { useState } from "react";
import { supabase } from "../lib/supabase";

function PhotoUpload({ user, onUploaded }) {
  const [file, setFile] = useState(null);

  const [title, setTitle] = useState("");

  const [caption, setCaption] = useState("");

  const [year, setYear] = useState(new Date().getFullYear());

  const [loading, setLoading] = useState(false);

  async function handleUpload(event) {
    event.preventDefault();

    if (!file) {
      return;
    }

    setLoading(true);

    const extension = file.name.split(".").pop();

    const filePath = `${user.id}/${crypto.randomUUID()}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("family-photos")
      .upload(filePath, file);

    if (uploadError) {
      console.error(uploadError);
      setLoading(false);

      return;
    }

    const { data, error } = await supabase
      .from("photos")
      .insert({
        uploaded_by: user.id,
        image_path: filePath,
        title,
        caption,
        year,
      })
      .select()
      .single();

    if (error) {
      console.error(error);
      setLoading(false);

      return;
    }

    onUploaded(data);

    setFile(null);
    setTitle("");
    setCaption("");

    setLoading(false);
  }

  return (
    <form className="upload-form" onSubmit={handleUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <input
        type="text"
        placeholder="Photo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload Memory"}
      </button>
    </form>
  );
}

export default PhotoUpload;
