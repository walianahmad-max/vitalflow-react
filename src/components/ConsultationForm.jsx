import { useNavigate } from "react-router-dom";
import data from "../data/content.json";
export default function ConsultationForm() {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const values = new FormData(e.currentTarget);
        navigate(
          "/contact?" +
            new URLSearchParams({
              name: values.get("name"),
              doctor: values.get("doctor"),
            }),
        );
      }}
      className="rounded-[28px] bg-pale p-7 md:p-9"
    >
      <h2 className="mb-6 text-3xl">Virtual Consultation</h2>
      <div className="grid items-end gap-5 md:grid-cols-4">
        <label className="space-y-2">
          <span>Name</span>
          <input
            name="name"
            required
            placeholder="Full Name"
            className="field"
          />
        </label>
        <label className="space-y-2">
          <span>Doctor</span>
          <select className="field" name="doctor" required defaultValue="">
            <option value="" disabled>
              Choose Doctor
            </option>
            {data.doctors.map((d) => (
              <option key={d.slug}>{d.name}</option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span>Location</span>
          <select name="location" className="field" required defaultValue="">
            <option value="" disabled>
              Choose location
            </option>
            <option>Online consultation</option>
            <option>In-person visit</option>
          </select>
        </label>
        <button type="submit" className="pill min-h-14">
          Submit
        </button>
      </div>
    </form>
  );
}
