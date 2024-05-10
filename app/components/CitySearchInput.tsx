import { redirect } from "next/navigation";

async function setNewCity(formData: FormData) {
  "use server";

  const form = {
    city: formData.get("city"),
  };

  if (!form.city) return;

  redirect(`/?city=${encodeURIComponent(form.city.toString())}`);
}

export function CitySearchInput() {
  return (
    <li className="list-group-item">
      <form className="form-inline" action={setNewCity}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="City"
          />
        </div>
        <button type="submit" className="btn btn-default">
          Search
        </button>
      </form>
    </li>
  );
}
